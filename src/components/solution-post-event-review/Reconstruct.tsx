import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, Tag, cream, dark, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const events = [
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
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">Reconstruct what is recorded, not what is assumed.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Event time, recorded time and time zone stay explicit, so a reviewer can tell when something happened from
            when it was entered.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {events.map((e, i) => (
            <RevealItem
              key={e.time}
              className={`grid grid-cols-[88px_1fr] items-center gap-x-4 gap-y-2 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[88px_1fr_auto] ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="max-w-[60px] font-heading text-[13px] font-semibold leading-snug text-ink/45">{e.time}</p>
              <p className="text-[14.5px] text-ink-muted">{e.text}</p>
              <div className="col-start-2 md:col-start-3">
                <Tag>{e.tag}</Tag>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-8 grid gap-1 md:grid-cols-2">
          <Reveal delay={0.1} className={`h-full rounded-2xl border border-[#DEDAD0] ${cream} px-7 py-7`}>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">EX-104 · Turnstile 4 offline</p>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink-muted">
              Reported 11:52 PDT by Northfield Arena Venue Operations. Equipment restored 12:07 PDT — treat
              &quot;restored&quot; as equipment status only.
            </p>
          </Reveal>
          <Reveal delay={0.2} className={`h-full rounded-2xl ${dark} px-7 py-7`}>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-brand-yellow">
              EX-105 · Entry backlog remains
            </p>
            <p className="mt-4 font-heading text-[15px] font-medium leading-[1.65]">
              Recorded 12:10 PDT, linked to EX-104. Operational impact continued after the equipment itself was
              restored.
            </p>
          </Reveal>
        </div>

        <Footnote className="mt-8">EX-104, EX-105, DEC-021 and all times/actors shown are fictional specimen data.</Footnote>
      </div>
    </section>
  );
}
