import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, cream, sectionPad, wrap } from "./shared";

// NOTE: the lead says "three patterns" but the design shows two cards — built as shown.
const patterns = [
  {
    title: "Dispersed decision history",
    text: "Approvals, change requests and the reasons behind them live across chat threads, email and paper — not one traceable record.",
    example: "E.g. who approved the 10-minute start delay, and why?",
  },
  {
    title: "Unresolved work goes quiet",
    text: "An open issue can look finished simply because event day ended, with no one confirming the fix.",
    example: "E.g. was the turnstile reader actually replaced, or just restarted?",
  },
];

export function EventEnds() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-1 lg:grid-cols-[1fr_417px]`}>
        <div className="flex flex-col">
          <Reveal className="lg:pt-6">
            <SectionTitle className="max-w-[720px]">The event ends. The coordination work may not.</SectionTitle>
            <Lead className="mt-4 max-w-[760px]">
              Three patterns make event-day context hard to recover afterward — each one a reason post-event review
              exists.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-10 grid flex-1 gap-1 md:grid-cols-2">
            {patterns.map((p) => (
              <RevealItem
                key={p.title}
                className={`group flex h-full flex-col border border-[#DEDAD0] ${cream} px-6 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <h3 className="text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
                <p className="mt-4 text-[13px] leading-[1.6] text-ink/40">{p.example}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="min-h-[300px] lg:min-h-[374px]">
          <Photo
            src="/images/solution-post-event-review/problems-football-mark.webp"
            alt="Australian rules footballer leaping over opponents to mark the ball"
            sizes="(min-width: 1024px) 417px, 95vw"
            className="h-full w-full rounded-none! border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
