import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, card, cream, dark, sectionPad, wrap } from "./shared";

const stages = [
  { kicker: "Plan", title: "Define fixture scope", text: "Fixture, venue, participating organizations and check scope." },
  { kicker: "Prepare", title: "Agree & evidence checks", text: "Agreed checks, due times, evidence and review.", current: true },
  { kicker: "Coordinate", title: "Handle changes", text: "Authorized organizations respond to exceptions and changes." },
  { kicker: "Review", title: "Record follow-up", text: "Outstanding follow-ups are recorded after the event." },
];

export function WiderWorkflow() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Readiness sits inside a wider event workflow.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Plan → Prepare → Coordinate → Review. This page is about Prepare — agreeing checks, due times, evidence and
            review before the event.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <RevealItem
              key={s.kicker}
              aria-current={s.current ? "step" : undefined}
              className={s.current ? `rounded-2xl ${dark} p-5 transition-transform duration-300 hover:-translate-y-1` : `${card} ${cream} p-5`}
            >
              {s.current ? (
                <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-yellow">{s.kicker}</p>
              ) : (
                <Kicker className="font-semibold">{s.kicker}</Kicker>
              )}
              <h3 className="mt-2 text-[15.5px] font-semibold">{s.title}</h3>
              <p className={`mt-2 text-[14px] leading-[1.6] ${s.current ? "text-white/65" : "text-ink-muted"}`}>{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
