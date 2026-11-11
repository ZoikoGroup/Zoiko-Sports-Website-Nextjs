import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

export function WhatIsReadiness() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_419px] lg:gap-14`}>
        <Reveal>
          <SectionTitle>What is event readiness coordination?</SectionTitle>
          <Lead className="mt-6 max-w-[770px]">
            It is the agreed process of identifying an event&apos;s preparation checks, assigning responsible people or
            organizations, tracking due times, and making outstanding work visible to authorized participants. It does
            not replace inspections, sporting rulings or any other required human approval.
          </Lead>
        </Reveal>

        <Reveal delay={0.2}>
          <Photo
            src="/images/event-readiness/what-baseball-pitcher.webp"
            alt="Baseball pitcher following through after a throw"
            sizes="(min-width: 1024px) 419px, 95vw"
            className="aspect-[419/415] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
