import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, sectionPad, wrap } from "./shared";

const stages = [
  { owner: "Organizer", stage: "Plan", text: "Confirm the fixture, venue assignment and participating organizations." },
  { owner: "Venue", stage: "Prepare", text: "Complete readiness checks and surface exceptions with owners and due times." },
  {
    owner: "Organizer + Venue",
    stage: "Coordinate",
    text: "Review event-day exceptions and record the competition decision.",
  },
  { owner: "Venue + Organizer", stage: "Review", text: "Close the event record and assign any open follow-up." },
];

export function OneSpine() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">One event. One spine. Four stages everyone shares.</SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            Plan, Prepare, Coordinate and Review carry the event from schedule to closeout. Every stage has a named
            owner.
          </Lead>
        </Reveal>

        <RevealGroup className={`mt-9 grid border-t-2 border-brand-yellow ${cream} sm:grid-cols-2 lg:grid-cols-4`}>
          {stages.map((s, i) => (
            <RevealItem key={s.stage} className="group px-5 py-6 transition-colors duration-300 hover:bg-[#efede5]">
              <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40">
                {String(i + 1).padStart(2, "0")} · {s.owner}
              </p>
              <h3 className="mt-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.stage}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
