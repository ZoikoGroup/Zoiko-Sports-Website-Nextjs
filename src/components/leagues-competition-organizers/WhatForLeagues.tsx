import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, altBg, line, ruled, sectionPad, wrap } from "./shared";

const focus = [
  {
    label: "Today's initial focus",
    text: "The competition schedule, venue readiness status, operational exceptions and recorded decisions — scoped to your league's authorized events.",
  },
  {
    label: "Future governed direction",
    text: "A broader connected sports operating layer, extended across fixtures only as capability is implemented and validated.",
  },
];

export function WhatForLeagues() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid lg:grid-cols-[1fr_458px]`}>
        <Reveal className="lg:pr-8 lg:pt-2">
          <SectionTitle className="max-w-[740px]">
            What does Zoiko Sports do for leagues and competition organizers?
          </SectionTitle>
          <Lead className="mt-5 max-w-[800px] text-[16.5px]">
            Zoiko Sports is being designed to help leagues and competition organizers coordinate an event or fixture
            block with the venues and clubs involved. Its initial focus is the handoff between competition schedules,
            readiness work, operational exceptions, authorized schedule decisions and follow-up records. Organizations
            retain their own responsibilities and access permissions.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 min-h-[252px] lg:mt-0">
          <Photo
            src="/images/leagues-competition-organizers/what-judo-grip.webp"
            alt="Two judoka gripping each other's gi during a training bout"
            sizes="(min-width: 1024px) 458px, 95vw"
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
