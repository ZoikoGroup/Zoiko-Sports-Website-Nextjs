import { footerColumns, headerCtas, legalLinks, megaMenus } from "./navigation";

/**
 * Real pages that are NOT linked from the header or footer.
 * Add the path here when you create one (e.g. "/about-driverxtra"),
 * otherwise `src/proxy.ts` will answer it with the 404 page.
 */
export const extraPaths: string[] = [];

/** Internal paths linked from the header and footer, e.g. "/platform/readiness-checks". */
export const navPaths = new Set(
  [
    ...megaMenus.flatMap((m) => [...m.columns.flatMap((c) => c.links), m.feature.cta]).map((l) => l.href),
    ...footerColumns.flatMap((c) => c.links).map((l) => l.href),
    ...legalLinks.map((l) => l.href),
    headerCtas.signIn.href,
    headerCtas.primary.href,
  ]
    .filter((h) => h.startsWith("/"))
    .map((h) => h.split(/[?#]/)[0])
    .filter((h) => h !== "/"),
);

/**
 * Nav paths that have their own route under src/app (e.g. app/about/page.tsx).
 * The `[...slug]` placeholder skips these so it never pre-renders over them.
 */
export const builtPaths = new Set(["/about", "/platform/approvals-decisions", "/platform/competition-operations"]);

/** Every path the site serves a page for. */
export function isKnownPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return path === "/" || navPaths.has(path) || extraPaths.includes(path);
}
