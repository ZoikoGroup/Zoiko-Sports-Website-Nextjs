import { Reveal } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const columns = [
  {
    label: "Today's initial focus",
    text: "The event schedule your venue depends on, your venue's agreed readiness checks and owners, operational exceptions, and the organizer's recorded decisions — scoped to your venue's role.",
  },
  {
    label: "Future governed direction",
    text: "A broader connected sports operating layer, extended only as capability is implemented and validated.",
  },
];

export function WhatItMeans() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">What does Zoiko Sports mean for venue operators?</SectionTitle>
          <Lead className="mt-5 max-w-[820px]">
            Zoiko Sports is being developed to help venue directors, venue operations managers and safety/operations
            teams coordinate the readiness work tied to an organizer&apos;s event with the organizer and participating
            clubs. Its initial focus is agreed checks, accountable owners, dependencies, operational exceptions and
            recorded decisions — scoped to your venue&apos;s role.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 grid overflow-hidden rounded-2xl border ${line} bg-white md:grid-cols-2`}>
            {columns.map((c, i) => (
              <div key={c.label} className={i > 0 ? `border-t ${line} md:border-l md:border-t-0` : ""}>
                <Kicker className={`border-b ${line} px-4 py-4 text-[10.5px]`}>{c.label}</Kicker>
                <p className="px-5 py-6 text-[14px] leading-[1.65] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6]">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
