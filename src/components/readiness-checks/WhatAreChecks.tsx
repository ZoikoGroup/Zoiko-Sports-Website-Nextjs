import { Reveal } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

export function WhatAreChecks() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          <Reveal>
            <SectionTitle>What are event readiness checks?</SectionTitle>
            <Lead className="mt-6 max-w-[800px]">
              Event readiness checks are agreed operational tasks and confirmations tied to a sporting event, with a
              named owner, due time and recorded status. In a coordinated workflow, participating organizations may
              contribute information within their permitted scope. Completing a check is not the same as authorizing an
              event, approving a safety plan or certifying compliance.
            </Lead>
          </Reveal>

          <Reveal delay={0.2}>
            <Photo
              src="/images/readiness-checks/what-sprint-start.webp"
              alt="Sprinter set in the starting blocks before a race"
              sizes="(min-width: 1024px) 380px, 95vw"
              className="aspect-[380/339] w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note className="mt-9">
            <strong className="font-semibold text-ink">What checks cannot tell you:</strong> whether an item is genuinely
            not applicable, whether a late input has reached its owner, or whether the relevant human decision has
            actually been made. Those remain distinct, visible states — never inferred from a check being marked
            complete.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
