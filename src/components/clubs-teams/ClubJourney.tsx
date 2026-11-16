import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const steps = [
  { stage: "Plan", text: "Confirm liaison roles and contacts for the event.", output: "assigned contact list." },
  { stage: "Prepare", text: "Track assigned prep tasks against venue dependencies.", output: "task status view." },
  { stage: "Coordinate", text: "Receive and acknowledge event-day changes.", output: "acknowledgment record." },
  { stage: "Review", text: "Review what changed, who decided, and what is still open.", output: "closed-loop summary." },
];

export function ClubJourney() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">
            A bounded club journey: Plan → Prepare → Coordinate → Review.
          </SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <RevealItem
              key={s.stage}
              className={`group h-full border ${line} ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40">
                {String(i + 1).padStart(2, "0")} · {s.stage}
              </p>
              <h3 className="mt-2 text-[15px] font-semibold leading-[1.45] text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.text}
              </h3>
              <p className="mt-1.5 text-[13.5px] text-ink-muted">Output: {s.output}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
