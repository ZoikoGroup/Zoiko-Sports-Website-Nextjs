import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, card, ruled, sectionPad, wrap } from "./shared";

export function ChoosePath() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Choose your path.</SectionTitle>
          <Lead className="mt-4 max-w-[660px] text-[15.5px]">
            This page explains the cross-organization outcome. The platform page explains the feature detail behind it.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-2">
          {/* Current page */}
          <RevealItem className="h-full rounded-2xl border border-[#24163A] bg-white p-6 sm:p-7" aria-current="page">
            <span className="inline-flex rounded-full bg-[#24163A] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-brand-yellow">
              You are here
            </span>
            <h3 className="mt-3 text-[15.5px] font-semibold text-ink">Coordinate an event-day exception</h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">
              See how organizations align ownership, impact and decision authority around one event.
            </p>
          </RevealItem>

          <RevealItem className="h-full rounded-2xl bg-white">
            <Link href="/platform/event-day-exceptions" className={`${card} group block h-full bg-white p-6 sm:p-7`}>
              <h3 className="flex items-center gap-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                Explore exception workflow controls
                <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 max-w-[560px] text-[14px] leading-[1.6] text-ink-muted">
                The in-product worklist, detail and review states behind this coordination model — Platform · Event-Day
                Exceptions.
              </p>
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
