import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, SampleTag, SectionTitle, Tag, altBg, line, ruled, sectionPad, wrap } from "./shared";

const timeline = [
  { time: "11:52", text: "Turnstile 4 offline. EX-104 created, Venue Operations, active.", tag: "Technical exception" },
  {
    time: "12:07",
    text: "Turnstile restored. EX-104 marked restored — the entry backlog remains a separate record.",
    tag: "Technical exception",
  },
  { time: "12:10", text: "Entry backlog remains. EX-105 recorded, Venue Operations, delay requested.", tag: "Operational impact" },
  {
    time: "12:15",
    text: "Competition start approved 12:15 → 12:25 PDT by the Competition Director, Riverside League.",
    tag: "Decision",
  },
  {
    time: "12:16",
    text: "Match officials and participating clubs acknowledged; stewarding lead pending.",
    tag: "Acknowledgment",
  },
  { time: "12:18", text: "Stewarding lead acknowledged.", tag: "Acknowledgment" },
];

export function EventDayMoments() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Event day, across two organizations, in six recorded moments.</SectionTitle>
        </Reveal>

        <RevealGroup className={`mt-9 overflow-hidden rounded-2xl border ${line} bg-white`}>
          {timeline.map((e, i) => (
            <RevealItem
              key={e.time}
              className={`grid gap-2 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-[90px_1fr_auto] sm:items-center sm:gap-4 ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
            >
              <time className="text-[13px] font-semibold text-ink/45">{e.time}</time>
              <p className="text-[14.5px] text-ink-muted">{e.text}</p>
              <Tag className="w-fit uppercase tracking-[0.04em]">{e.tag}</Tag>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Footnote className="mt-6">EX-104 and EX-105 are fictional source records, not live telemetry.</Footnote>
        </Reveal>
      </div>
    </section>
  );
}
