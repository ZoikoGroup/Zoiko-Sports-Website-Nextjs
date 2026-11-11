import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, Photo, SectionTitle, sectionPad, wrap } from "./shared";

const parts = [
  {
    kicker: "Request",
    title: "A proposed change",
    text: "Venue Operations proposes an action and the reason behind it. Submitting a request does not change the event schedule.",
  },
  {
    kicker: "Decision",
    title: "An authorized response",
    text: "An authorized person records approval, rejection or a request for changes, with role, organization and time.",
  },
  {
    kicker: "Application",
    title: "A confirmed update",
    text: "Whether an approved decision has actually been applied to the event is tracked and confirmed separately.",
  },
];

export function WhatAreRecords() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_318px] lg:gap-10">
          <div className="flex flex-col">
            <Reveal>
              <SectionTitle>What are decision and approval records?</SectionTitle>
              <Lead className="mt-5 max-w-[770px]">
                A decision and approval record links a proposed operational change to the authorized person who
                accepted, rejected or requested changes — including their role, organization, recorded time and
                supporting context. Any resulting schedule update, recipient notification and human acknowledgment are
                separate steps.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-y-6 md:mt-auto md:grid-cols-3 md:pt-10">
              {parts.map((p, i) => (
                <RevealItem
                  key={p.kicker}
                  className={`px-0 md:px-6 md:py-8 ${i > 0 ? "md:border-l md:border-[#DEDAD0]" : "md:pl-6"}`}
                >
                  <Kicker className="font-semibold">{p.kicker}</Kicker>
                  <h3 className="mt-2 text-[16px] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 max-w-[270px] text-[14px] leading-[1.6] text-ink-muted">{p.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="min-h-[320px]">
            <Photo
              src="/images/decision-approval-records/what-long-jump.webp"
              alt="Long jumper landing feet-first in the sand pit"
              sizes="(min-width: 1024px) 318px, 95vw"
              className="h-full w-full rounded-none!"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note variant="cream" className="mt-8 italic">
            A request is not a decision. A recorded decision is not proof the change was applied.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
