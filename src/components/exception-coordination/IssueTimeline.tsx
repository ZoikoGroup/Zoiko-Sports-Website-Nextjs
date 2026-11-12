import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SampleTag, SectionTitle, StatePill, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const timeline = [
  { time: "11:52", text: "Turnstile 4 offline. EX-104 created, Venue Operations, active.", tag: "Technical exception" },
  {
    time: "12:07",
    text: "Turnstile restored. EX-104 marked restored — the entry backlog is a separate, continuing record.",
    tag: "Technical exception",
  },
  {
    time: "12:10",
    text: "Entry backlog remains. EX-105 recorded, Venue Operations, delay requested.",
    tag: "Operational impact",
  },
  {
    time: "12:15",
    text: "Competition start approved 12:15 → 12:25 PDT by the Competition Director, Riverside League.",
    tag: "Decision",
  },
  {
    time: "12:16",
    text: "Update shared. Officials and both clubs acknowledged; stewarding lead pending.",
    tag: "Communication",
  },
  {
    time: "12:18",
    text: "Stewarding lead acknowledges. Recorded audience acknowledgment becomes complete.",
    tag: "Communication",
  },
  {
    time: "Sep 27 · 09:00",
    text: "Post-event review reconstructs the decision chain and outstanding follow-up.",
    tag: "Review",
  },
  {
    time: "Oct 2",
    text: "Follow-up to replace the turnstile reader assigned to Venue Operations, independent of the restoration.",
    tag: "Follow-up",
  },
];

export function IssueTimeline() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Follow the issue — not just the latest status.</SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            An eight-fact specimen separates technical recovery, continuing impact, authorized decision, communication,
            review and follow-up as distinct records.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {timeline.map((e, i) => (
            <RevealItem
              key={`${e.time}-${i}`}
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

        <Footnote>
          Exception identifiers, times and statuses shown are fictional specimen data, not live event telemetry.
        </Footnote>
      </div>
    </section>
  );
}
