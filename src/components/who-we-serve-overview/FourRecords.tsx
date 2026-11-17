import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Lead, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const records = [
  {
    title: "Schedule",
    text: "The organizer’s published competition plan, and the milestones each organization depends on.",
  },
  {
    title: "Readiness",
    text: "Checks owned by the venue and tasks owned by the club, each with an accountable owner and due time.",
  },
  {
    title: "Exceptions",
    text: "Event-day issues and their lingering operational impact, tracked as distinct records.",
  },
  {
    title: "Decisions",
    text: "Requests, authorized approvals and acknowledgments — kept as separate, attributable records.",
  },
];

export function FourRecords() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Four records that make coordination possible.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Every audience page is organized around the same structured records, scoped to what each organization owns.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid border-l border-t border-brand-yellow/70 sm:grid-cols-2 lg:grid-cols-4">
          {records.map((r) => (
            <RevealItem
              key={r.title}
              className="group h-full border-b border-r border-brand-yellow/70 bg-white px-6 py-7 transition-colors duration-300 hover:bg-[#fffbea]"
            >
              <h3 className="text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {r.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
