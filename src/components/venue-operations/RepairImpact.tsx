import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, cream, dark, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const timeline = [
  { time: "11:52", text: "EX-104: Turnstile 4 offline — Northfield Arena / Venue Operations." },
  { time: "12:07", text: "EX-104: Turnstile restored; technical recovery recorded." },
  { time: "12:10", text: "EX-105: Entry backlog remains active; delay requested by Venue Operations." },
  { time: "12:15", text: "Competition start approved 12:15 → 12:25 PDT by Riverside League Competition Director." },
  { time: "12:16", text: "Change notice shared; officials and clubs acknowledged, stewarding lead pending." },
  { time: "12:18", text: "Stewarding lead acknowledged." },
];

export function RepairImpact() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">A repair and its lingering impact are two different records.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Northfield Arena / Venue Operations owns the equipment issue. A restored device does not automatically close
            a continuing queue impact.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {timeline.map((e, i) => (
            <RevealItem
              key={e.time}
              className={`grid gap-2 px-6 py-4 transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-[70px_1fr] sm:items-center sm:gap-6 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="text-[13px] font-semibold text-ink/45">{e.time}</p>
              <p className="text-[14.5px] leading-[1.6] text-ink-muted">{e.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Equipment record vs. operational impact record */}
        <Reveal delay={0.1} className="mt-8 grid overflow-hidden rounded-2xl md:grid-cols-2">
          <div className={`${cream} px-6 py-7`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-ink/45">EX-104 · Equipment · Restored</p>
            <h3 className="mt-3 text-[15.5px] font-semibold text-ink">Turnstile 4 offline 11:52 → restored 12:07 PDT.</h3>
            <p className="mt-3 text-[14px] text-ink-muted">Technical recovery recorded by Venue Operations.</p>
          </div>
          <div className={`${dark} px-6 py-7`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-yellow">
              EX-105 · Operational impact · Active
            </p>
            <h3 className="mt-3 text-[15.5px] font-semibold">Entry backlog remained active at 12:10, after the 12:07 repair.</h3>
            <p className="mt-3 text-[14px] text-white/55">
              Related to EX-104, tracked independently; linked to the schedule-change request.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
