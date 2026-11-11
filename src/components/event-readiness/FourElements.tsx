import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, pad2, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const elements = [
  { kicker: "Check", title: "East entrance ramp inspection", text: "The agreed work, scoped to this event." },
  { kicker: "Owner", title: "Northfield Arena / Venue Operations", text: "The actor and organization accountable." },
  { kicker: "Due", title: "09:00 PDT (UTC−07:00)", text: "The event-local deadline." },
];

export function FourElements() {
  return (
    <section id="how-readiness-works" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={`${wrap} grid lg:grid-cols-[1fr_319px]`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-12">
            <SectionTitle>Four elements. One agreed event.</SectionTitle>
            <Lead className="mt-5 max-w-[760px] text-[15.5px]">
              Readiness is explainable as a relationship among work, accountability, time and review — scoped to an
              agreed event and its participants.
            </Lead>
          </Reveal>

          <RevealGroup
            className={`mt-9 grid gap-y-6 border-t-2 border-brand-yellow ${cream} px-5 py-7 md:mt-auto md:grid-cols-3 md:gap-x-8`}
          >
            {elements.map((e, i) => (
              <RevealItem key={e.kicker}>
                <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40">
                  {pad2(i + 1)} · {e.kicker}
                </p>
                <h3 className="mt-2 text-[15.5px] font-semibold text-ink">{e.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{e.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="group/photo relative mt-8 min-h-[287px] overflow-hidden border-t-2 border-brand-yellow bg-black/5 lg:mt-0">
          <Image
            src="/images/event-readiness/elements-tennis-backhand.webp"
            alt="Tennis player preparing a two-handed backhand"
            fill
            sizes="(min-width: 1024px) 319px, 95vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover/photo:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
