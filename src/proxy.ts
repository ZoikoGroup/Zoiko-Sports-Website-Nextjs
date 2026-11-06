import { NextResponse, type NextRequest } from "next/server";
import { isKnownPath } from "@/data/routes";

/**
 * Unknown URLs would otherwise fall into the `[...slug]` placeholder route and
 * stream the 404 UI with a 200 status. Rewriting them here (the visitor keeps
 * their URL) returns a proper 404 status for browsers, crawlers and analytics.
 */
export function proxy(request: NextRequest) {
  if (isKnownPath(request.nextUrl.pathname)) return;
  return NextResponse.rewrite(new URL("/page-not-found", request.url));
}

export const config = {
  // Skip API routes, Next internals, and any file with an extension (images, icons, fonts…)
  matcher: ["/((?!api|_next/static|_next/image|page-not-found|.*\\..*).*)"],
};
