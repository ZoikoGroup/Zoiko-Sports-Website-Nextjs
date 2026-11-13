import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const steps = [
  { title: "Align schedule", text: "Connect the fixture plan to the venue tasks that depend on it." },
  { title: "Confirm owners", text: "Make the responsible organization and next action visible." },
  { title: "Manage change requests", text: "Route requests to authorized decision makers." },
  { title: "Record follow-up", text: "Review what changed and what remains open." },
];

export function AgreedWorkflow() {
  return (
    <section id="coordination-workflow" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>A workflow you can agree across teams.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-6.1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <RevealItem key={s.title} className={`${card} ${cream} p-6`}>
              <h3 className="text-[15.5px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
