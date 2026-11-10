import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, cream, pad2, ruled, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Plan", text: "The approved schedule and owners." },
  { title: "Prepare", text: "Checks and approval dependencies." },
  { title: "Coordinate", text: "Recorded exceptions, decisions and updates." },
];

const handoffs = [
  {
    kicker: "Inputs review depends on",
    text: "The approved schedule, readiness checks, recorded exceptions, decisions, notices and acknowledgments carried forward from earlier stages.",
  },
  {
    kicker: "What review produces",
    text: "Explained outcomes, evidence-linked findings, and follow-up work assigned to a responsible organization — not a safety verdict.",
  },
];

export function ReviewStage() {
  return (
    <section id="review-workflow" className={`scroll-mt-24 bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid lg:grid-cols-[1fr_316px] lg:gap-1">
          <div className="flex flex-col">
            <Reveal className="lg:pr-12">
              <SectionTitle className="max-w-[740px]">Review is the fourth stage, not a standalone step.</SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                Each stage hands off sources that review depends on. Current stage and status describe workflow
                progress, not event-day readiness.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-9 grid flex-1 gap-1 sm:grid-cols-3">
              {stages.map((s, i) => (
                <RevealItem
                  key={s.title}
                  className={`group border-t-[3px] border-[#DEDAD0] ${cream} px-5 pb-7 pt-6 transition-colors duration-300 hover:border-brand-yellow sm:px-6`}
                >
                  <Kicker className="font-semibold">Stage {pad2(i + 1)}</Kicker>
                  <h3 className="mt-3 text-[17px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{s.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="mt-10 border-t-[3px] border-brand-yellow lg:mt-0">
            <Photo
              src="/images/post-event-review/stage-sprinter-crouch.webp"
              alt="Sprinter crouched on the track before a run"
              sizes="(min-width: 1024px) 316px, 95vw"
              className="aspect-[316/338] w-full rounded-none! lg:aspect-auto lg:h-full lg:min-h-[300px]"
            />
          </Reveal>
        </div>

        <RevealGroup className="mt-8 grid gap-1 md:grid-cols-2">
          {handoffs.map((h) => (
            <RevealItem key={h.kicker} className={`border border-[#DEDAD0] ${cream} px-6 py-7`}>
              <Kicker className="font-semibold">{h.kicker}</Kicker>
              <p className="mt-3 text-[14.5px] leading-[1.7] text-ink/80">{h.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
