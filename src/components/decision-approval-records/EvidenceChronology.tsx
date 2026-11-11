import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SampleTag, SectionTitle, altBg, ruled, StatePill, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const chronology = [
  { time: "11:52 PDT", text: "EX-104: Turnstile 4 reported offline. Venue Operations owns the issue.", tag: "Technical issue" },
  { time: "12:07 PDT", text: "Technical restoration recorded. The entry effect is not automatically resolved.", tag: "Technical issue" },
  { time: "12:10 PDT", text: "EX-105: Entry backlog remains. Venue Operations requests a delayed start.", tag: "Request" },
  {
    time: "12:15 PDT",
    text: "Riverside League Competition Director approves a changed start, 12:15 → 12:25 PDT.",
    tag: "Decision",
  },
  {
    time: "12:16 PDT",
    text: "Update shared. Officials and both clubs acknowledge; stewarding lead pending.",
    tag: "Communication",
  },
  {
    time: "12:18 PDT",
    text: "Stewarding lead acknowledges. Recorded audience now complete for this sample.",
    tag: "Acknowledgment",
  },
  {
    time: "Sep 27 · 09:00",
    text: "Post-event review examines the recorded schedule, approval and notification chain.",
    tag: "Review",
  },
  {
    time: "Oct 2 · due",
    text: "Venue Operations follow-up to replace the turnstile reader — tracked independently.",
    tag: "Follow-up",
  },
];

export function EvidenceChronology() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Follow the decision back to the operational evidence.</SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            A fixed chronology separates technical recovery, continuing impact, the authorized decision and later review
            as distinct, time-stamped facts.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {chronology.map((e, i) => (
            <RevealItem
              key={e.time}
              className={`grid gap-2 px-6 py-4 transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-6 sm:pr-14 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="whitespace-nowrap text-[13px] font-semibold text-ink/45">{e.time}</p>
              <p className="text-[14.5px] leading-[1.6] text-ink-muted">{e.text}</p>
              <span className="sm:justify-self-end">
                <StatePill className="bg-[#efede6] text-[11px] uppercase tracking-[0.04em]">{e.tag}</StatePill>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote>EX-104, EX-105 and every time shown are fictional specimen data, not live event telemetry.</Footnote>
      </div>
    </section>
  );
}
