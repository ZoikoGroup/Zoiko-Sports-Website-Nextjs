import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const review = [
  {
    kicker: "What changed",
    text: "Competition start moved 12:15 → 12:25 PDT; EX-105 remained active through the event.",
  },
  { kicker: "Who authorized", text: "Competition Director · Riverside League." },
  { kicker: "What’s still open", text: "1 follow-up task, acknowledgment closed at 12:18 PDT." },
  { kicker: "Next review", text: "Scheduled with event operations lead." },
];

export function PostEventReview() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">Closing the event does not close every follow-up.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A post-event review can reconstruct the record and keep outstanding work independently visible.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {review.map((r) => (
            <RevealItem
              key={r.kicker}
              className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
            >
              <Kicker className="font-semibold">{r.kicker}</Kicker>
              <p className="mt-2 max-w-[300px] text-[14px] leading-[1.6] text-ink">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note variant="cream" className="mt-8 text-[13.5px]!">
            Follow-up: Replace turnstile reader — Northfield Arena / Venue Operations — due October 2, 2026. Independent
            of the September 26 restoration.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
