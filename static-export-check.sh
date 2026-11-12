#!/usr/bin/env bash
# static-export-check.sh: READ-ONLY readiness check for hosting a Next.js site as plain static files (Google Cloud Storage).
# Run it from the repository root:   bash static-export-check.sh        (or: bash static-export-check.sh /path/to/repo)
cd "${1:-.}" || exit 2
[ -f package.json ] || { echo "Run this in the repository root (package.json not found here)."; exit 2; }
B=0; W=0
bad()  { echo "  BLOCKER  $1"; B=$((B+1)); }
warn() { echo "  WARNING  $1"; W=$((W+1)); }
ok()   { echo "  ok       $1"; }
show() { head -3 | sed 's/^/             /' | cut -c1-160; }
G() { grep -rEn --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' --include='*.mjs' --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=out --exclude-dir=.git "$@" . 2>/dev/null; }
CFG=$(ls next.config.ts next.config.js next.config.mjs 2>/dev/null | head -1)
echo "Static-export check: $(basename "$PWD") | next $(grep -oE '"next" *: *"[^"]+"' package.json | grep -oE '[0-9][^"]*' | head -1) | config: ${CFG:-none}"
echo "-- configuration"
if [ -z "$CFG" ]; then warn "no next.config file found"; else
  grep -qE "output *: *['\"]export['\"]" "$CFG" && ok "output: 'export' is set" || bad "output: 'export' is not set in $CFG"
  grep -qE "cacheComponents|partialPrefetching|\bppr\b|experimental_ppr" "$CFG" && bad "cacheComponents / partialPrefetching / PPR in $CFG: not supported in export mode (the build stops)" || ok "no cacheComponents / PPR settings"
  grep -qE "(rewrites|redirects|headers) *\(" "$CFG" && bad "rewrites() / redirects() / headers() in $CFG are ignored in export mode: list them for the platform team (Cloudflare rules)" || ok "no rewrites / redirects / headers in the config"
fi
N=$(G "from ['\"]next/image['\"]" | wc -l)
if [ "$N" -gt 0 ]; then
  if [ -n "$CFG" ] && grep -qE "unoptimized *: *true|loader *:|loaderFile" "$CFG"; then ok "next/image used in $N place(s) and the optimizer is off"
  else bad "next/image used in $N place(s) but images.unoptimized is not set: every image URL would point to /_next/image, which does not exist on a bucket (the build still passes!)"; fi
else ok "next/image is not used"; fi
echo "-- server features that do not exist on a bucket"
[ -d pages/api ] || [ -d src/pages/api ] && bad "pages/api exists (API routes)"
for f in $(find src app -type f \( -name 'route.ts' -o -name 'route.js' -o -name 'route.tsx' -o -name 'route.jsx' \) 2>/dev/null); do
  if grep -qE "export +(async +)?(function +|const +)(POST|PUT|PATCH|DELETE)\b" "$f"; then bad "route handler with POST/PUT/PATCH/DELETE: $f (move it to an external service)"
  elif ! grep -qE "dynamic *= *['\"]force-static['\"]" "$f"; then warn "GET route handler without export const dynamic = 'force-static': $f"; fi
done
for f in middleware.ts middleware.js src/middleware.ts src/middleware.js proxy.ts proxy.js src/proxy.ts src/proxy.js; do [ -f "$f" ] && bad "$f exists: middleware / proxy does not run on a bucket"; done
R=$(G "['\"]use server['\"]"); [ -n "$R" ] && { bad "Server Actions ('use server'):"; echo "$R" | show; } || ok "no Server Actions"
R=$(G "from ['\"]next/headers['\"]|draftMode|getServerSideProps|getInitialProps|dynamic *= *['\"]force-dynamic['\"]"); [ -n "$R" ] && { bad "request-time features (next/headers, cookies(), headers(), draftMode, getServerSideProps, force-dynamic):"; echo "$R" | show; } || ok "no request-time features"
R=$(G "fetch\( *[\"'\`]/api/"); [ -n "$R" ] && { bad "the browser calls a relative /api/ route that will not exist:"; echo "$R" | show; } || ok "no calls to relative /api/ routes"
R=$(G "revalidate *[:=]|unstable_cache|revalidateTag|revalidatePath|cache: *['\"]no-store['\"]"); [ -n "$R" ] && { warn "caching/revalidation settings are ignored on a static site (content changes need a rebuild):"; echo "$R" | show; }
for f in $(find src app -type f \( -name 'page.tsx' -o -name 'page.jsx' -o -name 'page.js' -o -name 'page.ts' \) 2>/dev/null); do
  grep -q "searchParams" "$f" && ! grep -q "useSearchParams" "$f" && bad "page reads the searchParams prop (needs a request): $f (read it in the browser with useSearchParams instead)"
done
for f in $(G -l "useSearchParams" | cut -d: -f1 | sort -u); do grep -q "Suspense" "$f" || warn "useSearchParams without <Suspense> in the same file: $f (the build fails unless a parent wraps it)"; done
echo "-- pages"
for d in $(find src/app app -type d -name '\[*\]' 2>/dev/null); do
  ls "$d"/page.* >/dev/null 2>&1 || continue
  grep -qE "generateStaticParams" "$d"/page.* "$d"/layout.* 2>/dev/null && ok "dynamic route lists its pages: $d" || bad "dynamic route without generateStaticParams: $d (only listed paths are built)"
done
for f in $(find src/pages pages -type f -name '\[*\]*' 2>/dev/null); do grep -q "getStaticPaths" "$f" || bad "dynamic page without getStaticPaths: $f"; done
if ls src/app/not-found.* app/not-found.* 2>/dev/null | grep -q .; then ok "custom not-found page exists (becomes 404.html)"; else warn "no app/not-found file: the default 404 page will be used"; fi
echo "-- secrets and settings (everything in the exported files is public)"
R=$(grep -rEn "NEXT_PUBLIC_[A-Z0-9_]*(SECRET|PRIVATE|PASSWORD|TOKEN|API_KEY)" . --include='.env*' --include='*.ts' --include='*.tsx' --include='*.js' --include='*.jsx' --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=out --exclude-dir=.git 2>/dev/null); [ -n "$R" ] && { warn "a public (NEXT_PUBLIC_) variable has a secret-looking name: anyone can read it in the browser:"; echo "$R" | show; }
R=$(G "process\.env\.[A-Z0-9_]+" | grep -vE "NEXT_PUBLIC_|NODE_ENV"); [ -n "$R" ] && { warn "non-public environment variables are read (undefined in the browser; if read at build time the value is baked into the page):"; echo "$R" | show; }
E=$(ls -a | grep -E '^\.env' | grep -vE '\.example$|\.sample$|\.template$'); [ -n "$E" ] && warn "env file(s) in the repository root: $(echo $E | tr '\n' ' ')(make sure they hold no secrets and are not committed)"
R=$(G "localhost:|127\.0\.0\.1"); [ -n "$R" ] && { warn "hard-coded localhost addresses:"; echo "$R" | show; }
[ -f package-lock.json ] && ok "package-lock.json present (the build uses npm ci)" || warn "no package-lock.json: the build uses npm ci and needs it"
echo
echo "RESULT: $B blocker(s), $W warning(s)  ->  $( [ $B -eq 0 ] && echo 'ready to try the export build' || echo 'fix the blockers first')"
[ $B -eq 0 ]
