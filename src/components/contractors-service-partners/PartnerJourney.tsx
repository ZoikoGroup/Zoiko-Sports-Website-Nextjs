import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const steps = [
  {
    stage: "Plan",
    text: "Identify participating organizations and the permitted scope for a candidate partner.",
    output: "sponsor-approved scope, not self-registration.",
  },
  {
    stage: "Prepare",
    text: "Share an agreed task brief with owner, due time and dependency.",
    output: "partner reads the brief; cannot edit the authoritative record.",
  },
  {
    stage: "Coordinate",
    text: "Route relevant updates and clarifications during the event.",
    output: "delivery and human acknowledgment stay distinct.",
  },
  {
    stage: "Review",
    text: "Connect agreed follow-up work to the governed event record.",
    output: "partner access ends with the agreed scope.",
  },
];

export function PartnerJourney() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">
            A bounded partner journey: Plan → Prepare → Coordinate → Review.
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
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-ink-muted">Output: {s.output}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
