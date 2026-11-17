import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const safeguards = [
  {
    title: "Event- and role-scoped access",
    text: "Visibility is bound to one event, organization and role at a time.",
  },
  {
    title: "Minimum necessary records",
    text: "No medical, safeguarding or participant-sensitive data collected without separately approved scope.",
  },
  {
    title: "Governed data lifecycle",
    text: "Retention, export and deletion follow the applicable agreement and approved controls.",
  },
];

export function NoRecords() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">No medical, safeguarding or personal records collected here.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Software does not replace sporting, safety, security or emergency authority. Operational and competition
            decisions remain with authorized people and organizations.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {safeguards.map((s) => (
            <RevealItem
              key={s.title}
              className={`group h-full rounded-2xl border ${line} ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
