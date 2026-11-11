import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const timeline = [
  { time: "11:52", text: "EX-104: Turnstile 4 offline — Northfield Arena / Venue Operations." },
  { time: "12:07", text: "EX-104: Turnstile restored; technical recovery recorded." },
  { time: "12:10", text: "EX-105: Entry backlog remains active; delay requested by Venue Operations." },
  { time: "12:15", text: "Competition start approved 12:15 → 12:25 PDT by Riverside League Competition Director." },
  { time: "12:18", text: "Stewarding lead acknowledged; all recipients now acknowledged." },
];

export function SeparateRecords() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">Separate the repair, the impact and the sporting decision.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A technical fix, its lingering impact and the resulting authorized decision are tracked as distinct,
            time-stamped events.
          </Lead>
        </Reveal>

        <RevealGroup className={`mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] ${cream}`}>
          {timeline.map((e, i) => (
            <RevealItem
              key={e.time}
              className={`grid gap-2 px-6 py-4 transition-colors duration-200 hover:bg-[#efede6] sm:grid-cols-[70px_1fr] sm:items-center sm:gap-6 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="text-[13px] font-semibold text-ink/45">{e.time}</p>
              <p className="text-[14.5px] leading-[1.6] text-ink-muted">{e.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
