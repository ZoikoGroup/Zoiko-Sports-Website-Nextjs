import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, cream, dark, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const timeline = [
  { time: "Sep 24", text: "Schedule approved for Riverside Invitational.", tag: "Plan" },
  { time: "11:52", text: "Turnstile 4 offline. EX-104 recorded by Venue Operations, origin: manual entry.", tag: "Record created" },
  { time: "12:07", text: "Turnstile 4 restored. EX-104 updated, equipment status closed.", tag: "Updated" },
  { time: "12:10", text: "Entry backlog persists. EX-105 recorded, linked to EX-104.", tag: "Record created" },
  {
    time: "12:15",
    text: "Start time approved 12:15 → 12:25 PDT by the Competition Director, citing EX-105. DEC-021.",
    tag: "Decision linked",
  },
  { time: "12:16–12:18", text: "Update notice sent and acknowledged; history shows the full chain.", tag: "Linked" },
  { time: "Sep 27, 09:00", text: "Post-event review opened for Riverside Invitational.", tag: "Review" },
];

export function Reconstruct() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">Reconstruct what is recorded, not what is assumed.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Event time, recorded time and time zone stay explicit, so a reviewer can tell when something happened from
            when it was entered.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {timeline.map((e, i) => (
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

        {/* Equipment vs. operational impact, joined by a 4px gutter */}
        <Reveal delay={0.1} className="mt-8 grid gap-1 overflow-hidden rounded-2xl md:grid-cols-2">
          <div className={`border border-[#DEDAD0] ${cream} px-7 py-7 md:rounded-l-2xl`}>
            <Kicker2>EX-104 · Turnstile 4 offline</Kicker2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink/80">
              Reported 11:52 PDT by Northfield Arena Venue Operations. Equipment restored 12:07 PDT — treat
              &quot;restored&quot; as equipment status only.
            </p>
          </div>
          <div className={`${dark} px-7 py-7`}>
            <Kicker2 className="text-brand-yellow">EX-105 · Entry backlog remains</Kicker2>
            <p className="mt-4 font-heading text-[15px] font-medium leading-[1.65]">
              Recorded 12:10 PDT, linked to EX-104. Operational impact continued after the equipment itself was
              restored.
            </p>
          </div>
        </Reveal>

        <Footnote>EX-104, EX-105, DEC-021 and all times/actors shown are fictional specimen data.</Footnote>
      </div>
    </section>
  );
}

function Kicker2({ children, className = "text-ink/45" }: { children: string; className?: string }) {
  return <p className={`text-[11.5px] font-bold uppercase tracking-[0.16em] ${className}`}>{children}</p>;
}
