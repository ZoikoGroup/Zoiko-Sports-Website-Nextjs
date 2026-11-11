import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, SectionTitle, cream, pad2, sectionPad, wrap } from "./shared";

const steps = ["Open check", "Owner submits update", "Separately authorized approval", "Dependent activity proceeds"];

export function CompletionRecord() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[780px]">
            Completion is a record. Authorization remains with the responsible people.
          </SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A check can depend on a decision from another participating organization. That dependency is made visible to
            the authorized teams, while ownership and approval stay separate.
          </Lead>
        </Reveal>

        <RevealGroup
          className={`mt-9 grid gap-y-6 border-t-2 border-brand-yellow ${cream} px-5 py-7 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {steps.map((s, i) => (
            <RevealItem key={s} className="group">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">Step {pad2(i + 1)}</p>
              <h3 className="mt-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s}
              </h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note variant="cream" className="mt-8">
            Example: Final steward count approval — Riverside League / Event Manager — due 10:00 PDT, shown as
            &quot;awaiting approval&quot; without inventing the decision. No status on this page declares a venue safe to
            open.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
