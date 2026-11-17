import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Footnote, Lead, line, ruled, SampleTag, sectionPad, SectionTitle, Tag, wrap } from "./shared";

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
    time: "12:18",
    text: "Stewarding lead acknowledged; officials and clubs had acknowledged at 12:16.",
    tag: "Acknowledgment",
  },
];

export function RepairImpact() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">A repair and its lingering impact are two different records.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Your venue owns the equipment issue. A restored device does not automatically close a continuing operational
            impact.
          </Lead>
        </Reveal>

        <RevealGroup className={`mt-9 overflow-hidden rounded-2xl border ${line} bg-white`}>
          {timeline.map((e, i) => (
            <RevealItem
              key={e.time}
              className={`grid gap-2 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-[88px_1fr_auto] sm:items-center sm:gap-4 sm:pr-16 ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
            >
              <time className="text-[13px] font-semibold text-ink/45">{e.time}</time>
              <p className="text-[14.5px] text-ink-muted">{e.text}</p>
              <Tag className="w-fit uppercase tracking-[0.04em] sm:justify-self-end">{e.tag}</Tag>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <Footnote>EX-104 and EX-105 are fictional source records, not live telemetry.</Footnote>
        </Reveal>
      </div>
    </section>
  );
}
