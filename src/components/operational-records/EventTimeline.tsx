import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SampleTag, SectionTitle, altBg, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const eventTimeline = [
  { time: "11:52", text: "Turnstile 4 offline. EX-104 recorded by Venue Operations, origin: manual entry.", tag: "Record created" },
  { time: "12:07", text: "Turnstile 4 restored. EX-104 updated, status closed.", tag: "Updated" },
  { time: "12:10", text: "Entry backlog persists. EX-105 recorded, linked to EX-104.", tag: "Record created" },
  {
    time: "12:15",
    text: "Competition start approved 12:15 → 12:25 PDT by the Competition Director, citing EX-105.",
    tag: "Decision linked",
  },
  {
    time: "12:16–12:18",
    text: "Update notice sent and acknowledged; the record history now shows the full chain.",
    tag: "Linked",
  },
];

export function EventTimeline() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One event, from first exception to closed review.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {eventTimeline.map((e, i) => (
            <RevealItem
              key={e.time}
              className={`group grid gap-2 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-[86px_1fr_auto] sm:items-center sm:gap-6 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="text-[13px] font-semibold text-ink/45">{e.time}</p>
              <p className="text-[14.5px] leading-[1.6] text-ink-muted">{e.text}</p>
              <span className="w-fit whitespace-nowrap rounded-full bg-[#efede6] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-ink/80 transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-ink">
                {e.tag}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-7 text-[13px] text-ink/45">
          EX-104, EX-105, DEC-021 and all actors, organizations and times shown are fictional specimen data.
        </p>
      </div>
    </section>
  );
}
