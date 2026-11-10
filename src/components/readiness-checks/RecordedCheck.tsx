import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, SectionTitle, cream, pad2, ruled, sectionPad, wrap } from "./shared";

const steps = ["Work recorded", "Submitted", "Reviewed (where applicable)", "Separate operational decision"];

export function RecordedCheck() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">
            A recorded check is information for the responsible people—not a safety decision.
          </SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Operational, competition, venue, medical and safeguarding authority remains with authorized human
            organizations and duty holders.
          </Lead>
        </Reveal>

        <RevealGroup
          className={`mt-9 grid gap-x-8 gap-y-6 border-t-2 border-brand-yellow ${cream} px-5 py-6 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {steps.map((s, i) => (
            <RevealItem key={s} className="group">
              <Kicker className="font-semibold">Step {pad2(i + 1)}</Kicker>
              <h3 className="mt-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s}
              </h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note variant="cream" className="mt-8">
            Example trail: Submitted by Venue Operations 08:12 PDT → Reviewed by Event Manager 08:20 PDT (pending) →
            Decision not yet recorded. There is no bulk &quot;Approve event&quot; action on any check row.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
