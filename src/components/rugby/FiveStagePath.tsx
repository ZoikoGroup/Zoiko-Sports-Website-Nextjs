import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Lead, line, PrimaryButton, sectionPad, SectionTitle, wrap } from "./shared";

const stages = [
  { stage: "Qualify", text: "Zoiko Sports reviews fit and market." },
  { stage: "Scope", text: "Participants, workflow and measures agreed in writing." },
  { stage: "Configure", text: "A permission-scoped workflow, reviewed for security and privacy." },
  { stage: "Operate", text: "Recorded coordination activity, with a human-authorized go/no-go." },
  { stage: "Evaluate", text: "Extend, revise or stop — an authorized human decision." },
];

export function FiveStagePath() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>The same five-stage path, regardless of sport.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Describing a rugby fixture doesn&apos;t skip a stage or guarantee acceptance — a written scope
            comes before anything operates.
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
              <p className="mt-2.5 text-[13.5px] leading-[1.6] text-ink-muted transition-colors duration-300 group-hover:text-ink">
                {s.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
          <PrimaryButton href="/sports/discuss-your-sport">Discuss Your Sport</PrimaryButton>
          <p className="text-[12.5px] text-ink/45">
            A request starts a review; it is not confirmation of a pilot or of rugby support.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
