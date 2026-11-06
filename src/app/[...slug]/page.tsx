import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/ui/icons";
import { navPaths } from "@/data/routes";

/** Prerender a placeholder for every navigation destination. */
export function generateStaticParams() {
  return [...navPaths].map((p) => ({ slug: p.slice(1).split("/") }));
}

/**
 * Anything else is a genuine 404. `src/proxy.ts` normally catches unknown paths
 * first (so the response gets a real 404 status); this is the safety net.
 */
function assertKnown(slug: string[]) {
  if (!navPaths.has(`/${slug.join("/")}`)) notFound();
}

/**
 * Temporary placeholder for every navigation destination that does not have
 * its own page yet. Create a real route (e.g. app/platform/page.tsx) to replace it.
 */

const toTitle = (segment: string) =>
  decodeURIComponent(segment)
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export async function generateMetadata(props: PageProps<"/[...slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  if (!navPaths.has(`/${slug.join("/")}`)) return { title: "Page not found" };
  return { title: toTitle(slug[slug.length - 1]) };
}

export default async function PlaceholderPage(props: PageProps<"/[...slug]">) {
  const { slug } = await props.params;
  assertKnown(slug);
  const title = toTitle(slug[slug.length - 1]);
  const trail = slug.slice(0, -1).map(toTitle);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1200px] px-5 py-28 sm:px-8">
        {trail.length > 0 && (
          <p className="reveal mb-4 text-[12px] font-bold uppercase tracking-[0.16em] text-brand-blue">
            {trail.join(" / ")}
          </p>
        )}
        <h1 className="reveal text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-tight text-ink">{title}</h1>
        <p className="reveal mt-5 max-w-xl text-[17px] leading-relaxed text-ink-muted" style={{ "--delay": "100ms" } as React.CSSProperties}>
          This page is being prepared. In the meantime, scope a pilot and we&apos;ll walk you through it.
        </p>
        <Link
          href="/pilot"
          className="reveal group mt-9 inline-flex items-center gap-2 rounded-lg bg-brand-yellow px-6 py-3 font-heading text-[15px] font-semibold text-ink transition-colors hover:bg-brand-yellow-hover"
          style={{ "--delay": "200ms" } as React.CSSProperties}
        >
          Scope a Pilot
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
