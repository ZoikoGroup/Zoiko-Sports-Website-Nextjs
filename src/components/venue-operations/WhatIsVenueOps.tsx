import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

export function WhatIsVenueOps() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_441px] lg:gap-14`}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">What is venue operations software for a sports event?</SectionTitle>
          <Lead className="mt-6 max-w-[790px]">
            Sports venue operations software can help venue teams plan, assign and review the operational tasks tied to
            an event: access arrangements, agreed readiness checks, dependencies, exception handling and handoffs. Zoiko
            Sports is being developed to connect that venue-side context with the competition organizer&apos;s event
            plan, subject to authorized access and verified capabilities.
          </Lead>
        </Reveal>

        <Reveal delay={0.2}>
          <Photo
            src="/images/venue-operations/what-squash-lunge.webp"
            alt="Squash player lunging for a ball in front of a crowd"
            sizes="(min-width: 1024px) 441px, 95vw"
            className="aspect-[441/226] w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
