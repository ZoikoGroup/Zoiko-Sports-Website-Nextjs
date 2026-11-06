# Zoiko Sports Website

Next.js 16 (App Router) + Tailwind CSS v4 + Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

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

`src/app/[...slug]/page.tsx` renders a "being prepared" page for every link in the navigation.
Create a real route (e.g. `src/app/platform/page.tsx`) to replace any of them.
