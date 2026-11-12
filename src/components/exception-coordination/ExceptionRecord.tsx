import { Reveal } from "@/components/ui/Reveal";
import { Photo, SampleTag, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const record = [
  { label: "Exception", value: "EX-104 · Turnstile 4 offline" },
  { label: "Event", value: "Riverside Invitational · Northfield Arena" },
  { label: "Observed", value: "Sep 26, 2026 · 11:52 PDT" },
  { label: "Recorded", value: "Sep 26, 2026 · 11:53 PDT" },
  { label: "Owner", value: "Venue Operations" },
  { label: "Status", value: "Restored · reason recorded" },
  { label: "Related", value: "EX-105 · continuing impact" },
];

export function ExceptionRecord() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One record, with provenance and accountable ownership.</SectionTitle>
        </Reveal>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_418px] lg:gap-10 lg:px-5">
          <Reveal delay={0.1}>
            <dl className="overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
              {record.map((r, i) => (
                <div
                  key={r.label}
                  className={`grid gap-1 px-6 py-4 transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-[240px_1fr] sm:gap-6 sm:py-[18px] ${
                    i > 0 ? "border-t border-[#ebe9df]" : ""
                  }`}
                >
                  <dt className="text-[13px] text-ink/45">{r.label}</dt>
                  <dd className="font-heading text-[15px] font-medium text-ink">{r.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="min-h-[320px]">
            <Photo
              src="/images/exception-coordination/record-volleyball-dig.webp"
              alt="Volleyball player crouching low to dig the ball"
              sizes="(min-width: 1024px) 418px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
