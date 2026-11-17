import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, dark, Lead, line, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const states = ["Pending", "Acknowledged", "Declined", "Unknown"];

export function TransmissionVsAck() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[600px]">
            Message transmission and human acknowledgment are different facts.
          </SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            A delivered notice and a person affirmatively confirming it are tracked as two separate states, both tied to
            the same instruction revision.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-2.5 lg:grid-cols-2">
          <Reveal delay={0.1} className="min-h-[268px]">
            <Photo
              src="/images/officials-event-staff/ack-baseball-kneel.webp"
              alt="Baseball player kneeling on one knee beside his bat, pointing toward the field"
              sizes="(min-width: 1024px) 635px, 95vw"
              className={`h-full w-full border ${line}`}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className={`h-full rounded-2xl ${dark} px-7 py-7`}>
              <p className="border-b border-white/10 pb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-yellow">
                Human acknowledgment
              </p>
              <RevealGroup role="list">
                {states.map((s) => (
                  <RevealItem
                    role="listitem"
                    key={s}
                    className="border-b border-white/10 py-3.5 text-[14px] text-white/75 last:border-b-0"
                  >
                    {s}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
