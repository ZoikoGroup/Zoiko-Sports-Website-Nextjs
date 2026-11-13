import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, SectionTitle, cream, sectionPad, wrap } from "./shared";

const measures = [
  { title: "Source completeness", text: "Share of in-scope records with a confirmed organization and origin." },
  { title: "Decision traceability", text: "Time to trace an approved decision back to its supporting record." },
  { title: "Acknowledgment timeliness", text: "Interval between notice delivery and recorded human acknowledgment." },
  { title: "Open follow-ups at close", text: "Count and age of unresolved tasks when the review concludes." },
];

export function EvaluateWorkflow() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[600px]">Evaluate the workflow with honest denominators.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Define the measurement method and baseline before a pilot begins — not after.
          </Lead>
        </Reveal>

        <RevealGroup
          className={`mt-9 grid gap-x-8 gap-y-6 border-t-2 border-brand-yellow ${cream} px-5 py-7 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {measures.map((m) => (
            <RevealItem key={m.title}>
              <h3 className="text-[15px] font-semibold text-ink">{m.title}</h3>
              <p className="mt-2 max-w-[250px] text-[13.5px] leading-[1.6] text-ink-muted">{m.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Note variant="cream" className="mt-8 text-[13.5px]">
            <p className="font-heading text-[13px] font-semibold text-ink">Learning into the next event</p>
            <p className="mt-2">
              An agreed follow-up may inform the next event&apos;s plan. The next event requires its own participants,
              permissions and approved scope — data and rights do not transfer by default.
            </p>
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
