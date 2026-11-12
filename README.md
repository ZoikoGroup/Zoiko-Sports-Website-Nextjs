# Zoiko Sports Website

Next.js 16 (App Router) + Tailwind CSS v4 + Motion.

```bash
npm install
npm run dev                  # http://localhost:3000
bash static-export-check.sh  # must end with "0 blocker(s)"
npm run build                # writes the static site to out/
npx serve out                # preview the exported files
```

## Static hosting (Google Cloud Storage)

The site is a **static export** (`output: "export"` in `next.config.ts`): `npm run build` produces plain
files in `out/`, which the build server uploads to a Cloud Storage bucket. There is no Node server, so:

- No API routes, `proxy.ts`/middleware, Server Actions or request-time data (`cookies()`, `headers()`, ...).
- Images are served as committed (`images.unoptimized`): keep photos WebP/AVIF, at display size, ≤ 200 KB.
- Unknown URLs are answered by `out/404.html` (from `src/app/not-found.tsx`).
- Redirects and security headers are set in Cloudflare by the platform team; list them in your PR.
- The pilot request form posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT` (see `.env.example`), an external
  endpoint from the platform team. Without it the form shows an error; it never fakes success.

Full rules and the PR checklist: [`docs/static-site-cloud-storage-developer-guide.md`](docs/static-site-cloud-storage-developer-guide.md).

## Where things live

| What | File |
| --- | --- |
| All header mega-menu + footer content | `src/data/navigation.ts` |
| Header / mega menu / mobile menu | `src/components/layout/Header.tsx`, `MegaMenuPanel.tsx`, `MobileMenu.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Intro loading animation | `src/components/layout/Preloader.tsx` (+ `src/app/loading.tsx` for route changes) |
| Brand colours, fonts, breakpoints | `src/app/globals.css` (`@theme`) |
| Logo / favicon | `public/brand/`, `src/app/icon.png`, `src/app/apple-icon.png` |
| Mega-menu card images | `public/images/nav/*.webp` |

## Fonts

- **Hanken Grotesk** (body) is loaded via `next/font/google`.
- **Semantic** (headings, nav, buttons) is self-hosted. Add the licensed files to `public/fonts/`:
  `Semantic-Regular.woff2`, `Semantic-Medium.woff2`, `Semantic-SemiBold.woff2`, `Semantic-Bold.woff2`.
  Until they are present, headings fall back to Hanken Grotesk.

## Placeholder pages

`src/app/[...slug]/page.tsx` renders a "being prepared" page for every link in the navigation
(listed by `generateStaticParams`; any other URL becomes the 404 page).
Create a real route (e.g. `src/app/platform/page.tsx`) to replace any of them.
