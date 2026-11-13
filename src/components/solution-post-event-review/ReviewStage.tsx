import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, cream, pad2, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Plan", text: "The approved schedule and owners." },
  { title: "Prepare", text: "Checks and approval dependencies." },
  { title: "Coordinate", text: "Recorded exceptions, decisions and updates." },
  { title: "Review", text: "Explain outcomes and assign follow-up.", current: true },
];

const flows = [
  {
    label: "Inputs review depends on",
    text: "The approved schedule, readiness checks, recorded exceptions, decisions, notices and acknowledgments carried forward from earlier stages.",
  },
  {
    label: "What review produces",
    text: "Explained outcomes, evidence-linked findings, and follow-up work assigned to a responsible organization — not a safety verdict.",
  },
];

export function ReviewStage() {
  return (
    <section id="review-workflow" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">Review is the fourth stage, not a standalone step.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Each stage hands off sources that review depends on. Current stage and status describe workflow progress,
            not event-day readiness.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <RevealItem
              key={s.title}
              aria-current={s.current ? "step" : undefined}
              className={`h-full border-t-4 px-[22px] pb-7 pt-6 ${
                s.current ? "border-brand-yellow bg-[#24163A] text-white" : `border-[#DEDAD0] ${cream}`
              }`}
            >
              <p
                className={`text-[11.5px] font-semibold uppercase tracking-[0.12em] ${
                  s.current ? "text-brand-yellow" : "text-ink/40"
                }`}
              >
                Stage {pad2(i + 1)}
              </p>
              <h3 className={`mt-3 text-[17px] font-semibold ${s.current ? "text-white" : "text-ink"}`}>{s.title}</h3>
              <p className={`mt-3 text-[13.5px] leading-[1.6] ${s.current ? "text-white/70" : "text-ink-muted"}`}>
                {s.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-8 grid gap-1 md:grid-cols-2">
          {flows.map((f) => (
            <RevealItem key={f.label} className={`h-full border border-[#DEDAD0] ${cream} px-6 py-7`}>
              <Kicker className="text-[11px]">{f.label}</Kicker>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-ink-muted">{f.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
