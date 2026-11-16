import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, cream, line, ruled, sectionPad, wrap } from "./shared";

const steps = [
  {
    stage: "Ask",
    title: "Submit a routed question",
    text: "A short clarification tied to the current task and revision — not a change to the authoritative record.",
  },
  {
    stage: "Route",
    title: "Sent to the accountable organization only",
    text: "Visibility stays limited to the organizer or venue that owns the task.",
  },
];

export function QuestionNotChange() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-0.5 lg:grid-cols-[1fr_427px]`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-10">
            <SectionTitle>A question is not a change to the record.</SectionTitle>
          </Reveal>

          <RevealGroup className="mt-8 grid flex-1 gap-0.5 md:grid-cols-2">
            {steps.map((s, i) => (
              <RevealItem
                key={s.stage}
                className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <p className="text-[12px] font-semibold tracking-[0.04em] text-ink/40">
                  {String(i + 1).padStart(2, "0")} · {s.stage}
                </p>
                <h3 className="mt-2 text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="mt-6 min-h-[236px] lg:mt-0">
          <Photo
            src="/images/contractors-service-partners/question-volleyball-spike.webp"
            alt="Volleyball player in mid-air winding up for a spike"
            sizes="(min-width: 1024px) 427px, 95vw"
            className={`h-full w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
