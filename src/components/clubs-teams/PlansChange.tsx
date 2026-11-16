import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SampleTag, SectionTitle, Tag, line, altBg, ruled, sectionPad, wrap } from "./shared";

const timeline = [
  { time: "11:52", text: "Turnstile 4 offline. EX-104 created, Venue Operations, active.", tag: "Technical exception" },
  {
    time: "12:07",
    text: "Turnstile restored. EX-104 marked restored — entry backlog is a separate, continuing record.",
    tag: "Technical exception",
  },
  { time: "12:10", text: "Entry backlog remains. EX-105 recorded, Venue Operations, delay requested.", tag: "Operational impact" },
  {
    time: "12:15",
    text: "Competition start approved 12:15 → 12:25 PDT by the Competition Director, Riverside League.",
    tag: "Decision",
  },
];

export function PlansChange() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">When plans change on event day.</SectionTitle>
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
          <div
            className={`mt-8 flex flex-col gap-2 rounded-2xl border border-[#e3e1cf] bg-white px-6 py-5 md:flex-row md:items-center md:justify-between`}
          >
            <p className="text-[14px] text-ink-muted">
              Hardware restored does not mean the entry backlog ended. Your club receives the decision, not a role in
              approving it.
            </p>
            <p className="shrink-0 text-[12.5px] text-ink/45">EX-104 and EX-105 are fictional source records.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
