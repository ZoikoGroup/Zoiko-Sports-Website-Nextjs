import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, StatePill, TextLink, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const checks = [
  { item: "Arena access plan confirmed", owner: "Northfield Arena · Venue Operations", state: "Confirmed" },
  { item: "Ramp inspection", owner: "Northfield Arena · Venue Operations", state: "Due 09:00" },
  { item: "Steward count approval", owner: "Riverside League · Competition Operations", state: "Due 10:00" },
];

export function PlanPrepare() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <Kicker>Plan &amp; Prepare</Kicker>
          <SectionTitle className="mt-3 max-w-[680px]">
            Align the competition plan with venue responsibilities before the event.
          </SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Clarify who supplies an update, who owns a check, and which decision needs an authorized approval — before
            the event, not during it.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          {checks.map((c, i) => (
            <RevealItem
              key={c.item}
              className={`grid gap-2 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[1.75fr_1.3fr_1fr] md:items-center md:gap-4 ${
                i > 0 ? "border-t border-[#ebe9df]" : ""
              }`}
            >
              <p className="font-heading text-[15px] font-semibold text-ink">{c.item}</p>
              <p className="text-[14px] text-ink-muted">{c.owner}</p>
              <div>
                <StatePill>{c.state}</StatePill>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <TextLink href="/solutions/competition-to-venue">See the full coordination workflow</TextLink>
      </div>
    </section>
  );
}
