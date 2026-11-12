import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, StatePill, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const changes = [
  { name: "Riverside Invitational", text: "Competition start moved 12:15 PDT → 12:25 PDT.", tag: "Approved change" },
  { name: "Example Fixture 2 — not an actual event", text: "No schedule proposed yet.", tag: "Not yet scheduled" },
  { name: "Example Fixture 3 — not an actual event", text: "Awaiting organizer confirmation.", tag: "Not yet scheduled" },
];

export function ScheduleChanges() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">A schedule change on one fixture is never silently applied to another.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Every revised date, time or venue keeps its own source, actor and approval record.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {changes.map((c, i) => (
            <RevealItem
              key={c.name}
              className={`grid gap-2 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[370px_1fr_auto] md:items-center md:gap-6 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="font-heading text-[14.5px] font-semibold text-ink">{c.name}</p>
              <p className="text-[14.5px] text-ink-muted">{c.text}</p>
              <span className="md:justify-self-end">
                <StatePill className="bg-[#efede6] text-[11px] uppercase tracking-[0.04em]">{c.tag}</StatePill>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote>Source, approver and timestamp shown are fictional specimen data, not live schedule telemetry.</Footnote>
      </div>
    </section>
  );
}
