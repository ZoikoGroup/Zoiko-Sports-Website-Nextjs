import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Footnote, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const stages = [
  { stage: "Qualify", text: "Zoiko Sports reviews fit and market." },
  { stage: "Scope", text: "Participants, workflow and measures agreed in writing." },
  { stage: "Configure", text: "A permission-scoped workflow, reviewed for security and privacy." },
  { stage: "Operate", text: "Recorded coordination activity, with a human-authorized go/no-go." },
  { stage: "Evaluate", text: "Extend, revise or stop — an authorized human decision." },
];

export function AfterYouReachOut() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What happens after you reach out.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            The same five-stage pilot process applies, regardless of sport — with a written scope before anything
            operates.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((s, i) => (
            <RevealItem
              key={s.stage}
              className={`group h-full border ${line} ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <p className="text-[12px] font-semibold tracking-[0.04em] text-ink/40">
                {String(i + 1).padStart(2, "0")} · {s.stage}
              </p>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted transition-colors duration-300 group-hover:text-ink">
                {s.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote>No stage can be skipped. A pilot can stop at any gate; stopping is a legitimate outcome.</Footnote>
      </div>
    </section>
  );
}
