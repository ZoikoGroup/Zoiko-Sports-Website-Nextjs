import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, line, altBg, ruled, sectionPad, wrap } from "./shared";

const focus = [
  {
    label: "Today's initial focus",
    text: "The event schedule, your club's assigned preparation tasks, venue dependencies and recorded decisions — scoped to your club's role.",
  },
  {
    label: "Future governed direction",
    text: "A broader connected sports operating layer, extended only as capability is implemented and validated.",
  },
];

export function WhatForClubs() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid lg:grid-cols-[1fr_438px]`}>
        <Reveal className="lg:pr-10 lg:pt-2">
          <SectionTitle className="max-w-[740px]">What does Zoiko Sports mean for clubs and teams?</SectionTitle>
          <Lead className="mt-5 max-w-[820px] text-[16.5px]">
            Zoiko Sports is being developed to help club operations managers, secretaries and event-day leads coordinate
            preparation for a fixture or event with the relevant organizer and venue teams. Its initial focus is event
            schedules, assigned responsibilities, readiness dependencies, changes and records that each organization is
            authorized to use.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 min-h-[253px] lg:mt-0">
          <Photo
            src="/images/clubs-teams/what-volleyball-dig.webp"
            alt="Volleyball player kneeling low on a wooden court to dig the ball"
            sizes="(min-width: 1024px) 438px, 95vw"
            className="h-full w-full rounded-none!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className={`grid overflow-hidden rounded-2xl border ${line} bg-white md:grid-cols-2`}>
            {focus.map((f, i) => (
              <div key={f.label} className={i > 0 ? `border-t ${line} md:border-l md:border-t-0` : ""}>
                <Kicker className={`border-b ${line} px-4 py-4 text-[11px]`}>{f.label}</Kicker>
                <p className="px-5 py-6 text-[14.5px] leading-[1.7] text-ink-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
