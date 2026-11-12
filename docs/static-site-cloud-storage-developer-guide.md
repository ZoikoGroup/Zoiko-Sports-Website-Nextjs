# Static websites on Google Cloud Storage: what frontend developers must change

**Audience:** frontend developers of the Zoiko marketing and content websites (Next.js).
**Scope:** websites that are only pages (no login, no server rendering, no own API). Sites that need a server stay on their VM or move to a container; they are not covered here.
**Tested on:** Next.js 16.4.5 (App Router). Pages Router notes are at the end.
**Legend:** **[tested]** = reproduced by us on a real repository (Zoiko Sports). **[docs]** = from the Next.js documentation; the checker and the build will tell you either way.

## 1. The idea in 30 seconds
- Today our sites run as a **Node server** (PM2 behind Nginx). A Cloud Storage bucket cannot run Node. It only serves **files**.
- So each site must be built as **plain static files** (`HTML + JS + CSS + images`) with `output: 'export'`. The build writes them to a folder called `out/`.
- A build server (Jenkins) will run `npm ci` and `npm run build` and upload `out/` to the bucket. **You do not deploy anything yourself.**
- Everything that needs a server (API routes, middleware, server actions, per-request data, the image resizer) **does not exist** on a bucket. This guide lists each one and the replacement.
- **Everything in the exported files is public.** Treat the output as if you were publishing it on a notice board.

## 2. The changes (do all of them)

### 2.1 Turn on static export
```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  // ...
};
```
Do **not** set `trailingSlash`; the platform team decides how URLs map to files (see 5). `next export` is not needed; `npm run build` produces `out/`.

### 2.2 Remove Cache Components / PPR [tested]
`cacheComponents`, `partialPrefetching` and any `experimental.ppr` must go. With them the build **stops** with `Invariant: PPR cannot be enabled in export mode`.
```ts
// delete these lines
cacheComponents: true,
partialPrefetching: true,
```

### 2.3 Turn off the image resizer [tested]
`next/image` normally rewrites every image to `/_next/image?url=...`, which is a **server endpoint**. On a bucket it does not exist, so **every image breaks, and the build still passes** (we measured this: 89 of 89 pages pointed at it).
```ts
images: { unoptimized: true },
```
After this the pages reference your files directly (`/images/hero.webp`). Because nothing resizes images for you any more:
- Commit images at the size they are shown (width x height), as **WebP or AVIF** where possible. Aim for **200 KB or less** per photo and **under 1 MB** for any file.
- Keep `width` and `height` on `<Image>` to avoid layout shift.

### 2.4 No API routes, no route handlers that write, no Server Actions [docs]
- Delete `app/api/**/route.ts` handlers that use POST, PUT, PATCH or DELETE (and `pages/api/**`). Next.js only **warns** ("Statically exporting a Next.js application disables API routes and middleware") and carries on **[tested]**; the endpoint is simply not there.
- Delete `'use server'` files and `<form action={serverAction}>`.
- A **GET** handler is allowed only if it returns the same thing for everyone and says so: `export const dynamic = 'force-static'`.
- Replacement for forms and other dynamic needs: see 3.

### 2.5 No middleware and no `proxy.ts` [tested]
Delete `middleware.ts` / `proxy.ts` (the build warns that middleware is disabled). Replacements:
| What it did | Replacement |
|---|---|
| Show a 404 page for unknown paths | Create `app/not-found.tsx`. It is exported as `404.html`, and the bucket serves it for any missing path. |
| Redirect old URLs / www / http | The platform team does it in Cloudflare. **List every redirect in your PR description** (`/old -> /new`, 301). |
| Set security headers | Cloudflare (same: list what you need) |
| Login / protecting pages | Not possible on a static site. Tell the platform team; this site does not belong here. |

### 2.6 `rewrites()`, `redirects()` and `headers()` in `next.config` are ignored [docs]
They run on a server, so they do nothing in the export. Remove them from the config and list them in the PR description (see the table above). The checker flags them.

### 2.7 No per-request data [docs]
A static page is built **once, at build time**. It cannot know who is asking.
- Do not use `cookies()`, `headers()`, `draftMode()`, `getServerSideProps`, `getInitialProps`, `export const dynamic = 'force-dynamic'`.
- Do not read the `searchParams` **prop** in a page. Read the query string in the browser with `useSearchParams()` in a **client component wrapped in `<Suspense>`** (the build fails without the Suspense).
- `revalidate`, `unstable_cache`, `revalidateTag` and `fetch(..., { cache: 'no-store' })` have no effect on a bucket. Content changes need a **rebuild** (the platform team can trigger it, for example from a CMS webhook).

### 2.8 Dynamic routes must list their pages [docs]
Every `[slug]` page needs `generateStaticParams`, and only the listed paths are built. Unlisted paths become the 404 page.
```tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
```
A catch-all such as `[...slug]` follows the same rule (the Sports site already does this correctly).

### 2.9 Data: at build time, or in the browser
- **Server components** can `fetch()` at build time. The result is frozen into the HTML until the next build.
- **Client components** can `fetch()` from the browser, only from **public** endpoints that allow our origin (CORS). Never call an endpoint that needs a secret.
- Never write relative calls such as `fetch('/api/...')`. They will not exist (the checker flags them).

## 3. Forms and anything that needs a server
A static site cannot receive a form post. The pattern for all sites:
1. The browser posts JSON to an **external endpoint** (a small service the platform team provides; for example a Cloud Run service or a form service). It is **not** part of your Next.js project.
2. The address comes from a build-time variable, so it can differ per environment:
```tsx
const FORM_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT;   // public by design, set by the build server

async function submit(payload: unknown) {
  if (!FORM_URL) throw new Error("The form endpoint is not configured");
  const res = await fetch(FORM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Submission failed");   // show an error, never a fake success
}
```
3. **Never show a success message unless the server confirmed it.** (Today the Sports form says "sent" while only logging; this must not be copied.)
4. Keep validation in the browser **and** expect the endpoint to validate again. Add a spam control (for example Cloudflare Turnstile); the site key is public.
5. Tell the platform team: the **payload fields**, the **site origin**, and who receives the data. They give you the endpoint URL and CORS is set for your origin.

## 4. Environment variables and secrets
- In browser code only `NEXT_PUBLIC_*` variables exist. They are **baked into the files at build time** and are visible to everyone.
- **Never** put a secret in a `NEXT_PUBLIC_*` variable (API keys with write access, tokens, passwords). If a service needs a secret, it has to be called from a server, not from this site.
- Keep a `.env.example` listing the **names** (not values) of every variable the build needs. Never commit `.env` files with real values.
- Any `process.env.X` without `NEXT_PUBLIC_` is `undefined` in the browser, and if a server component reads it at build time its value is **written into the page**. The checker lists these so you can confirm they are safe.

## 5. Links, URLs, SEO
- Internal links: `<Link href="/about">`. Never `href="/about.html"`, never a full absolute URL to your own site.
- **Paths are case-sensitive on a bucket and on Linux.** `/images/Hero.png` and `/images/hero.png` are different files. This works on Windows and macOS by accident and **breaks in production**. Keep names lowercase and make links match the file names exactly.
- `trailingSlash`: leave it at the default. The export produces `about.html` (plus an `about/` folder for page data) and `404.html`; the platform team maps `/about` to the right file when uploading. If the test bucket shows a change is needed, we will send one global update.
- Sitemap and robots: use `app/sitemap.ts` and `app/robots.ts` with `export const dynamic = 'force-static'`, or plain files in `public/`. Set `metadataBase` to the production domain.
- Social share images: use static files, not generated ones.
- Third-party scripts (analytics, chat) are fine. Fonts from `next/font/google` are fine (downloaded at build time, so the build server needs internet).
- Config files for other hosts (`vercel.json`, `netlify.toml`, `_redirects`, `.htaccess`) are **ignored**.

## 6. Test your site before opening a PR
```bash
npm ci                                  # must succeed with the committed package-lock.json
bash static-export-check.sh             # must end with "0 blocker(s)"
npm run build                           # must create the out/ folder

test -f out/index.html && test -f out/404.html && echo "files ok"
grep -rl "/_next/image" out | head      # must print NOTHING
grep -rlE "localhost|127\.0\.0\.1" out | head     # must print NOTHING
npx serve out                           # open it and click EVERY page and form
```
In the browser open DevTools, tab **Network**, filter by `404` or `failed`, and reload each page. Any red entry (image, script, font, data file) is a bug.
`npx serve` is **more forgiving than a bucket** (it serves `/about` for `about.html` by itself). The final proof is the preview on the test bucket; fix whatever it shows.

## 7. Pull request checklist (copy into your PR)
```
- [ ] next.config has output: 'export' and images: { unoptimized: true }
- [ ] no cacheComponents / partialPrefetching / ppr
- [ ] static-export-check.sh reports 0 blockers (paste the RESULT line)
- [ ] npm ci passes; npm run build creates out/ with index.html and 404.html
- [ ] no "/_next/image" and no localhost in out/
- [ ] no API routes, middleware/proxy, Server Actions or request-time functions
- [ ] forms post to NEXT_PUBLIC_FORM_ENDPOINT; no fake success messages
- [ ] no secrets in NEXT_PUBLIC_* variables; .env.example lists the variable names
- [ ] every dynamic route has generateStaticParams
- [ ] redirects / headers I need are listed below: ...
- [ ] all links and image paths are lowercase and match the files; every page clicked in the local preview
```

## 8. What the platform team does (you do not)
Create the bucket and the build job, set the build-time variables, upload `out/` with the right cache headers, map clean URLs, purge the Cloudflare cache, apply redirects and security headers in Cloudflare, provide the form endpoint, and verify your preview on a **test bucket** before anything touches the live site. Your live site keeps running on its current server until the cut-over works.

## 9. Common mistakes
| Symptom | Cause | Fix |
|---|---|---|
| Images missing on the bucket, build was green | `/_next/image` URLs (optimizer is a server feature) | `images: { unoptimized: true }` (2.3) |
| Build stops: "PPR cannot be enabled in export mode" | `cacheComponents` / `partialPrefetching` | remove them (2.2) |
| Form does nothing or returns 404/405 | the form posts to `/api/...` | external endpoint (3) |
| Page 404 on the bucket, fine in `npm run dev` | dynamic route without `generateStaticParams`, or a path/case mismatch | 2.8, 5 |
| Build error about `useSearchParams` | missing `<Suspense>` | wrap the client component (2.7) |
| Old content after an edit | static pages only change when rebuilt | ask for a rebuild |
| Works on my Windows/Mac, 404 in production | upper-case file or folder names in links | lowercase names (5) |
| A key is visible in the browser | it was a `NEXT_PUBLIC_*` variable | rotate it, remove it from the browser code (4) |

## 10. Quick reference
| Feature | On a bucket? |
|---|---|
| Static pages, client-side JavaScript, CSS, fonts, `next/link` | yes |
| `next/image` | yes, with `images: { unoptimized: true }` only |
| `generateStaticParams`, `generateMetadata`, `sitemap.ts`, `robots.ts` | yes (at build time) |
| `useSearchParams` | yes, inside `<Suspense>` |
| Fetch at build time, or from the browser to a public endpoint | yes |
| API routes, Server Actions, middleware / `proxy.ts` | **no** |
| `cookies()`, `headers()`, `draftMode()`, `searchParams` prop | **no** |
| ISR / `revalidate`, `cacheComponents`, PPR | **no** |
| `rewrites` / `redirects` / `headers` in `next.config` | **no** (Cloudflare rules) |
| Login, per-user pages, server-side secrets | **no** (stay on a server) |

**Pages Router sites:** `getStaticProps` and `getStaticPaths` are fine; `getServerSideProps`, `getInitialProps` and `pages/api` are not. Everything else above applies.

## Appendix A: `static-export-check.sh` (read-only)
The script is committed in the **repository root** as [`static-export-check.sh`](../static-export-check.sh). Run `bash static-export-check.sh`. It only reads your files; it changes nothing and installs nothing. It lists each blocker with the file and line. It is a helper, not a proof: a green result means "try the export build", and the build plus the preview in section 6 are the real test.

## Appendix B: evidence (Zoiko Sports repository, Next.js 16.4.5)
| Step | Result |
|---|---|
| Export with the repository as it was | build **stopped**: `PPR cannot be enabled in export mode` |
| Remove `cacheComponents` and `partialPrefetching` | built; Next.js **warned** that API routes and middleware are disabled |
| Also remove the API route and `proxy.ts` | exported **89 pages, 26 MB**, with `404.html`, `index.html`, `_next/`, and pages as `name.html` plus a `name/` folder |
| Inspect the exported pages | **89 of 89** pages referenced `/_next/image?...` (broken on a bucket) while the build was green |
| Add `images: { unoptimized: true }` | **0** references left; every referenced image file present in the export |
| Checker on the repository as it was | 6 blockers: export off, cacheComponents/PPR, image optimizer, POST route handler, `proxy.ts`, browser call to `/api/...` |
| Checker after the fixes | 0 blockers, 0 warnings |
