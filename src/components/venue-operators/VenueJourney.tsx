import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

// NOTE: the heading names four stages (… → Review) but the design shows only three cards — built as shown.
const steps = [
  {
    stage: "Plan",
    title: "Confirm venue checks, owners and due times against the published schedule.",
    output: "Output: assigned check list.",
  },
  {
    stage: "Prepare",
    title: "Record check status and evidence as readiness work completes.",
    output: "Output: check status view.",
  },
  {
    stage: "Coordinate",
    title: "Raise and track event-day exceptions; request a schedule-impact review.",
    output: "Output: exception and request record.",
  },
];

export function VenueJourney() {
  return (
    <section id="venue-workflow" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={`${wrap} grid lg:grid-cols-[1fr_320px]`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-10">
            <SectionTitle className="max-w-[760px]">
              A bounded venue journey: Plan → Prepare → Coordinate → Review.
            </SectionTitle>
          </Reveal>

          <RevealGroup className="mt-9 grid flex-1 gap-0.5 md:grid-cols-3">
            {steps.map((s, i) => (
              <RevealItem
                key={s.stage}
                className={`group h-full border ${line} ${cream} px-5 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <p className="text-[12px] font-semibold tracking-[0.04em] text-ink/40">
                  {String(i + 1).padStart(2, "0")} · {s.stage}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold leading-[1.5] text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] text-ink-muted">{s.output}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="mt-4 min-h-[288px] lg:mt-0">
          <Photo
            src="/images/venue-operators/journey-volleyball-pass.webp"
            alt="Volleyball player in blue bending low to pass the ball with forearms together"
            sizes="(min-width: 1024px) 320px, 95vw"
            className={`h-full w-full rounded-none! border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
