import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, SampleTag, SectionTitle, altBg, line, ruled, sectionPad, wrap } from "./shared";

const flows = [
  { from: "Organizer", to: "Venue", what: "Competition schedule and fixture changes requiring venue acknowledgment." },
  { from: "Venue", to: "Organizer", what: "Readiness status and any operational exception affecting the competition." },
  { from: "Organizer", to: "Clubs", what: "Approved schedule updates and decisions relevant to their fixture." },
  { from: "Clubs", to: "Organizer", what: "Acknowledgment of a specific update — not a general status feed." },
];

export function WhatMoves() {
  return (
    <section id="operating-model" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4 max-w-[720px]">What moves between organizations, and in which direction.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Shared event context is not universal visibility. Each line below is one agreed, bounded disclosure — not
            open access to another organization&apos;s records.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className={`mt-9 overflow-hidden rounded-2xl border ${line} bg-white`}>
            {flows.map((f, i) => (
              <div
                key={`${f.from}-${f.to}`}
                className={`grid gap-1.5 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[425px_1fr] md:items-center md:gap-4 ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
              >
                <dt className="font-heading text-[14px] font-semibold text-ink">
                  {f.from} <span className="mx-1.5 text-ink/40" aria-label="to">→</span> {f.to}
                </dt>
                <dd className="text-[14px] text-ink-muted">{f.what}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <Footnote className="mt-6">
            Riverside League, Northfield Arena and participating clubs are fictional specimen organizations used to
            illustrate the model.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
