import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, pad2, ruled, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Plan", owner: "Organizer", decision: "What is in scope for this event" },
  { title: "Prepare", owner: "Venue & organizer", decision: "What is confirmed before event day" },
  { title: "Coordinate", owner: "Operations lead", decision: "Who approves a live change" },
  { title: "Review", owner: "Review owner", decision: "Extend, revise or stop" },
];

export function FourStages() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>One event, four connected stages.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Start with an event. Connect its planning context, readiness work, operational changes and review through
            the organizations and people authorized to act.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <RevealItem
              key={s.title}
              className="group border border-[#DEDAD0] bg-white px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70"
            >
              <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-2.5 border-b border-[#ebe9df] pb-2.5 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <dl className="mt-3 space-y-2 text-[13.5px]">
                {[
                  ["Owner", s.owner],
                  ["Decision", s.decision],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink/40">{label}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
