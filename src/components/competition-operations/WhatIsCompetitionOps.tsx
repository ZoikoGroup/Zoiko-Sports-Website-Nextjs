import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

export function WhatIsCompetitionOps() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_380px] lg:gap-16 xl:gap-24`}>
        <Reveal>
          <SectionTitle>What is competition operations?</SectionTitle>
          <Lead className="mt-5 max-w-[800px] text-[16.5px]">
            Competition operations software supports the planning, assignment and review of the fixtures and decisions
            managed by competition organizers. Zoiko Sports is being developed to connect this organizer-side context
            with participating clubs and venues, while each organization retains its own access and authority.
          </Lead>
        </Reveal>
        <Reveal delay={0.15}>
          <Photo
            src="/images/competition-operations/what-volleyball-serve.webp"
            alt="Overhead view of a volleyball player tossing the ball for a serve"
            sizes="(min-width: 1024px) 380px, 95vw"
            className="aspect-[380/187] w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
