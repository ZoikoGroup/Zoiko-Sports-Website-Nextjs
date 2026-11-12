import { footerColumns, headerCtas, legalLinks, megaMenus } from "./navigation";

/**
 * Internal paths linked from the header and footer, e.g. "/platform/readiness-checks".
 * `app/[...slug]` builds a placeholder page for each one until it gets its own route.
 */
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
export const builtPaths = new Set(["/about", "/platform/approvals-decisions", "/platform/competition-operations",
  "/platform/operational-records",
  "/platform/organizations-access",
  "/platform/post-event-review",
  "/platform/readiness-checks",
  "/platform/venue-operations",
  "/solutions/competition-to-venue",
  "/solutions/decision-approval-records",
  "/solutions/event-readiness",
]);

