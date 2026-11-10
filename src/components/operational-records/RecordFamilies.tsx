import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, cream, pad2, ruled, sectionPad, wrap } from "./shared";

const recordFamilies = [
  { title: "Schedule", text: "Fixture timing and venue assignment, owned by the organizing competition." },
  { title: "Readiness Check", text: "A venue or operations confirmation tied to a specific event requirement." },
  { title: "Exception", text: "An unplanned condition recorded where it was observed, with its own lifecycle." },
  { title: "Decision", text: "A human approval that may cite one or more exceptions or requests." },
  { title: "Update & Acknowledgment", text: "A notice and, where recorded, the authorized response to it." },
  { title: "Follow-up", text: "Post-event work assigned to a responsible organization." },
];

export function RecordFamilies() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Six record families, one event spine.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            A shared event provides context. It does not mean shared ownership of every record attached to it.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {recordFamilies.map((f, i) => (
            <RevealItem
              key={f.title}
              className={`group border-t-[3px] border-brand-yellow ${cream} px-5 pb-7 pt-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#efece3]`}
            >
              <Kicker className="font-semibold">Type {pad2(i + 1)}</Kicker>
              <h3 className="mt-3 text-[16.5px] font-semibold leading-snug text-ink">{f.title}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-ink-muted">{f.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
