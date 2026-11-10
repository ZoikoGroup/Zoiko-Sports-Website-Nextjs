import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, SampleTag, SectionTitle, StatePill, altBg, card, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const summary = [
  { kicker: "Agreed checks", title: "16 in scope", text: "Fictional sample, this event only" },
  { kicker: "Recorded complete", title: "14 of 16", text: "Coordination indicator, not a safety score" },
  { kicker: "Open checks", title: "2", text: "East entrance ramp · Steward count" },
  { kicker: "Approvals", title: "1 pending", text: "Competition Director" },
];

/** Fictional sample data — illustrative only. */
const openChecks = [
  { check: "East entrance ramp inspection", owner: "Northfield Arena · Venue Operations", due: "Due 09:00 PDT", state: "Open" },
  { check: "Final steward count approval", owner: "Riverside League · Event Manager", due: "Due 10:00 PDT", state: "Pending" },
];

export function VenuePicture() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One event. A bounded venue picture, with an honest as-of time.</SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            A completion count is a snapshot of agreed checks in scope — never a global readiness or safety verdict.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {summary.map((s) => (
            <RevealItem key={s.kicker} className={`${card} bg-white p-5`}>
              <Kicker className="font-semibold">{s.kicker}</Kicker>
              <h3 className="mt-2 text-[16px] font-bold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-[13.5px] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          <ul>
            {openChecks.map((c, i) => (
              <li
                key={c.check}
                className={`grid gap-2 px-6 py-4 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[1.2fr_1.2fr_0.8fr_auto] md:items-center md:gap-6 ${
                  i > 0 ? "border-t border-[#ebe9df]" : ""
                }`}
              >
                <span className="font-heading text-[15px] font-semibold text-ink">{c.check}</span>
                <span className="text-[13.5px] text-ink-muted md:text-center">{c.owner}</span>
                <span className="text-[13px] text-ink/45 md:text-right">{c.due}</span>
                <span className="md:justify-self-end">
                  <StatePill>{c.state}</StatePill>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <Note variant="cream" className="mt-8">
            No active exceptions at this 08:50 PDT snapshot. A later event-day incident (11:52 PDT) is tracked
            separately below and must not be read back into this earlier state.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
