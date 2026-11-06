import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Next.js adds `noindex` to 404 responses automatically.
export const metadata: Metadata = {
  title: "Page not found",
};

/**
 * Static target that `src/proxy.ts` rewrites unknown URLs to.
 * Because it calls notFound() before anything streams, the response
 * carries a real 404 status and renders app/not-found.tsx.
 */
export default function PageNotFound() {
  notFound();
}
