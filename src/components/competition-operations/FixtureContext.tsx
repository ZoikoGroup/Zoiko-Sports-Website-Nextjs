import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const fixtureContext = {
  competition: { label: "Competition", title: "Riverside Invitational", text: "Organizer: Riverside League" },
  fixture: { label: "Fixture", title: "RV-026", text: "Sep 26, 2026 · 12:15 PDT" },
  venue: { label: "Venue", title: "Northfield Arena", text: "Local readiness owner" },
  clubs: { label: "Participating clubs", items: ["Participating Club A", "Participating Club B"] },
};

const kicker = "text-[11px] font-semibold uppercase tracking-[0.1em]";

function ContextCard({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <RevealItem className={`${card} p-5`}>
      <p className={`${kicker} text-ink/45`}>{label}</p>
      <h3 className="mt-2 text-[16px] font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-[13.5px] text-ink-muted">{text}</p>
    </RevealItem>
  );
}

export function FixtureContext() {
  const { competition, fixture, venue, clubs } = fixtureContext;

  return (
    <section id="fixture-workflow" className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">Start with the competition. Keep the fixture accountable.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            The operating view begins with the agreed fixture context and the organizations authorized to contribute.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ContextCard {...competition} />

          {/* The fixture is the anchor, so it is highlighted */}
          <RevealItem className="rounded-2xl bg-[#24163A] p-5 text-white shadow-[0_18px_40px_-20px_rgba(36,22,58,0.7)] transition-transform duration-300 hover:-translate-y-1">
            <p className={`${kicker} text-brand-yellow`}>{fixture.label}</p>
            <h3 className="mt-2 text-[16px] font-semibold">{fixture.title}</h3>
            <p className="mt-1.5 text-[13.5px] text-white/60">{fixture.text}</p>
          </RevealItem>

          <ContextCard {...venue} />

          <RevealItem className={`${card} p-5`}>
            <p className={`${kicker} text-ink/45`}>{clubs.label}</p>
            <ul className="mt-3 flex flex-col items-start gap-2">
              {clubs.items.map((club) => (
                <li key={club} className="rounded-full bg-[#f4f2ee] px-2.5 py-1.5 text-[12px] font-semibold text-ink/80">
                  {club}
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealGroup>

        <Reveal>
          <p className="mt-9 rounded-2xl border border-[#DEDAD0] bg-white px-6 py-5 text-[14px] leading-[1.7] text-ink-muted">
            Competition, fixture, venue and event are treated as separate concepts; a fixture may be part of a
            competition, but exact cardinality is proposed pending product and architecture decisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
