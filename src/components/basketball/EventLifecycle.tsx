import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Footnote, Lead, line, ruled, SampleTag, sectionPad, SectionTitle, wrap } from "./shared";

const stages = [
  {
    stage: "Plan",
    text: "Competition and venue context, participating organizations and owners agreed ahead of the fixture.",
    example: "Example: Riverside League and Northfield Arena confirm scope for one fixture block.",
  },
  {
    stage: "Prepare",
    text: "Owned checks tracked against a due time — pending is not failed.",
    example: "14 of 16 checks complete at 08:50. East entrance ramp inspection due 09:00 · Venue Ops.",
  },
  {
    stage: "Coordinate",
    text: "An event-day exception, a human decision, and a tracked acknowledgment.",
    example: "11:52 turnstile offline (EX-104) → 12:07 restored → 12:15 Competition Director approves a hold → 12:18 acknowledged.",
  },
  {
    stage: "Review",
    text: "Follow-up ownership without an inferred match-result impact.",
    example: "Sep 27 09:00 review. Turnstile reader follow-up assigned to Venue Ops, due Oct 2.",
  },
];

export function EventLifecycle() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Plan → Prepare → Coordinate → Review.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            The sport is intentionally unspecified in the example below — it shows the pattern of one event lifecycle,
            not a basketball-specific product capability.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <RevealItem
              key={s.stage}
              className={`group flex h-full flex-col border ${line} bg-white px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <p className="text-[12px] font-semibold tracking-[0.04em] text-ink/40">
                {String(i + 1).padStart(2, "0")} · {s.stage}
              </p>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.text}
              </p>
              <p className={`mt-4 border-t border-dashed ${line} pt-3 text-[13px] leading-[1.6] text-ink/45`}>
                {s.example}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote>
          Example owners, times and statuses are fictional and sport-neutral — not evidence of a basketball
          feature.
        </Footnote>
      </div>
    </section>
  );
}
