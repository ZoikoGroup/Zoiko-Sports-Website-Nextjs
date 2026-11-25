import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, sectionPad, SectionTitle, soft, wrap } from "./shared";

const stages = [
  { title: "Inspect", text: "Confirm the source, owner, and approved transfer channel." },
  { title: "Map", text: "Relate source fields to a versioned, permitted record model." },
  { title: "Validate", text: "Check required keys, event references, time zones, and duplicates." },
  { title: "Preview", text: "Separate accepted, rejected, conflicting, and unchanged records." },
  { title: "Approve", text: "An authorized data steward reviews the exact candidate version." },
  { title: "Commit", text: "Write only the records explicitly allowed by the agreed scope." },
  { title: "Reconcile", text: "Review outcomes, corrections, and retained source provenance." },
];

export function ValidationSequence() {
  return (
    <section className={`${soft} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="mx-auto max-w-[800px] text-center">
          <Kicker>Illustrative control model</Kicker>
          <SectionTitle className="mx-auto mt-4 max-w-[780px]">Validation is a sequence, not a green checkmark.</SectionTitle>
          <Lead className="mt-5">
            If an import is eventually approved, each stage needs its own evidence, owner, and safe failure path. This
            sequence is proposed—not an active upload workflow.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-0">
          {stages.map((s, i) => (
            <RevealItem key={s.title} className="group">
              <div className="flex items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink bg-brand-yellow text-[10.5px] font-bold text-ink transition-transform duration-300 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Connector to the next stage (desktop row only) */}
                {i < stages.length - 1 && <span className="hidden h-px flex-1 bg-[#B9B4C6] lg:mr-4 lg:block" />}
              </div>
              <h3 className="mt-6 font-heading text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-[1.6] text-ink-muted lg:pr-5">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
