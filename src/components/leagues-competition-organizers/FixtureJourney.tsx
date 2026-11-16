import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const steps = [
  {
    stage: "Plan",
    text: "Confirm the fixture, venue assignment and participating organizations.",
    output: "published fixture record.",
  },
  {
    stage: "Prepare",
    text: "Track readiness dependencies and due milestones across venue and clubs.",
    output: "readiness status view.",
  },
  {
    stage: "Coordinate",
    text: "Review event-day exceptions and record the competition decision.",
    output: "timestamped decision record.",
  },
  {
    stage: "Review",
    text: "Reconstruct what changed, who decided, and what follow-up remains open.",
    output: "closed-loop review with owner and due date.",
  },
];

export function FixtureJourney() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">
            A bounded fixture journey: Plan → Prepare → Coordinate → Review.
          </SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <RevealItem
              key={s.stage}
              className={`group h-full border ${line} ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40">
                {String(i + 1).padStart(2, "0")} · {s.stage}
              </p>
              <h3 className="mt-2 text-[15px] font-semibold leading-[1.45] text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.text}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-ink-muted">Output: {s.output}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <Footnote className="mt-6 max-w-[1220px]">
            Sample review: Sep 27 09:00 PDT — Sep 24 schedule approval, the 12:15 decision and 12:18 acknowledgment are
            reconstructed; a turnstile reader replacement is assigned to Venue Operations, due Oct 2 — an open follow-up,
            not one automatically closed by the event ending.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
