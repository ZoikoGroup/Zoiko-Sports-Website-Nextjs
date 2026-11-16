import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Photo, SampleTag, SectionTitle, line, sectionPad, wrap } from "./shared";

const details = [
  { label: "Fixture", value: "Riverside Invitational" },
  { label: "Venue", value: "Northfield Arena" },
  { label: "Event date", value: "September 26, 2026" },
  { label: "Time zone", value: "PDT (UTC−07:00)" },
  { label: "Source revision", value: "Published Sep 24, 2026" },
];

export function OneFixture() {
  return (
    <section id="organizer-workflow" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One fixture, planned before anyone arrives.</SectionTitle>
        </Reveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[520px_1fr]">
          <Reveal delay={0.1}>
            <dl className={`overflow-hidden rounded-2xl border ${line} bg-white`}>
              {details.map((d, i) => (
                <div
                  key={d.label}
                  className={`px-5 py-3.5 transition-colors duration-200 hover:bg-[#fbfaf6] ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/40">{d.label}</dt>
                  <dd className="mt-0.5 font-heading text-[15px] font-semibold text-ink">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="min-h-[300px]">
            <Photo
              src="/images/leagues-competition-organizers/fixture-baseball-slide.webp"
              alt="Baserunner sliding into second base as the fielder reaches with the tag"
              sizes="(min-width: 1024px) 740px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Footnote className="mt-6">
            Source date and times are static fictional specimen values — not a live countdown or real-time feed.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
