import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, StatePill, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const items = [
  { title: "Turnstile & entry systems", owner: "Venue Operations", date: "Sep 25, 2026", state: "Complete" },
  { title: "Medical & safety briefing", owner: "Event Organizer", date: "Sep 25, 2026", state: "Complete" },
  { title: "Broadcast & media access", owner: "Riverside League", date: "Sep 26, 2026", state: "Pending" },
];

export function ReadinessItems() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">Which readiness items must be assessed anew for Riverside Invitational.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            14 of 16 checks complete for this event. Example Fixture 2 and Example Fixture 3 have not started their own
            readiness cycle.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {items.map((it, i) => (
            <RevealItem
              key={it.title}
              className={`grid gap-1.5 px-6 py-4 text-[14px] transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-[1.6fr_1fr_1fr_0.95fr] lg:items-center ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="font-heading font-semibold text-ink">{it.title}</p>
              <p className="text-ink-muted">{it.owner}</p>
              <p className="text-ink-muted">{it.date}</p>
              <span>
                <StatePill>{it.state}</StatePill>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote>A recorded status is never a safety or venue clearance. All identifiers shown are fictional specimen data.</Footnote>
      </div>
    </section>
  );
}
