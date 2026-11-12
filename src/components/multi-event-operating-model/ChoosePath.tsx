import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, card, sectionPad, wrap } from "./shared";

const paths = [
  {
    title: "Explore Post-Event Review",
    text: "Close out decisions and follow-up work for a single event.",
    href: "/solutions/post-event-review",
  },
  {
    title: "Explore Pilot Program",
    text: "Scope one event or fixture block with agreed measures before expanding.",
    href: "/solutions/pilot-program",
  },
];

export function ChoosePath() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Choose your path.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            This page explains the fixture-block outcome. Related Solutions pages explain the single-event detail behind
            it.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {/* Current page */}
          <RevealItem className="h-full rounded-2xl border border-[#24163A] bg-white p-6 sm:p-7" aria-current="page">
            <span className="inline-flex rounded-full bg-[#24163A] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-brand-yellow">
              You are here
            </span>
            <h3 className="mt-3 text-[15.5px] font-semibold text-ink">Coordinate a fixture block</h3>
            <p className="mt-2 max-w-[330px] text-[14px] leading-[1.6] text-ink-muted">
              See how an agreed workflow repeats across fixtures while event-level authority stays separate.
            </p>
          </RevealItem>

          {paths.map((p) => (
            <RevealItem key={p.title} className="h-full rounded-2xl bg-white">
              <Link href={p.href} className={`${card} group block h-full bg-white p-6 sm:p-7`}>
                <h3 className="flex items-center gap-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {p.title}
                  <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                </h3>
                <p className="mt-2 max-w-[340px] text-[14px] leading-[1.6] text-ink-muted">{p.text}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
