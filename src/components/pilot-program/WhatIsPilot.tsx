import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

export function WhatIsPilot() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_390px] lg:gap-9 lg:px-[52px]`}>
        <Reveal>
          <SectionTitle>What is the Pilot Program?</SectionTitle>
          <Lead className="mt-4 max-w-[840px]">
            The Zoiko Sports Pilot Program is a proposed, bounded evaluation process for leagues, clubs and venue
            operators. After qualification and written agreement, the parties may configure an agreed workflow, operate
            it for defined event(s), and jointly evaluate results.
          </Lead>
          <p className="mt-4 text-[14px] text-ink/45">
            Submitting a request is not approval to participate, a contract, a deployment date or a promise of support.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <Photo
            src="/images/pilot-program/what-high-jump.webp"
            alt="High jumper arching backwards over the bar"
            sizes="(min-width: 1024px) 390px, 95vw"
            className="aspect-[390/255] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
