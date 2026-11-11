import { Reveal } from "@/components/ui/Reveal";
import { Photo, SampleTag, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const record = [
  { label: "Event", value: "Riverside Invitational · Northfield Arena" },
  { label: "Change", value: "Competition start moved 12:15 → 12:25 PDT" },
  { label: "Reason", value: "Entry backlog remained after turnstile restart" },
  { label: "Requested by", value: "Venue Operations · Northfield Arena" },
  { label: "Approved by", value: "Competition Director · Riverside League" },
  { label: "Recorded", value: "September 26, 2026 at 12:15 PDT" },
  { label: "Status", value: "Decision recorded · correction history preserved" },
];

export function DecisionRecord() {
  return (
    <section id="decision-record" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">A decision record should hold up to scrutiny.</SectionTitle>
        </Reveal>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-10 lg:px-5">
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
              src="/images/decision-approval-records/scrutiny-figure-skater.webp"
              alt="Figure skater in a red dress gliding with arms outstretched"
              sizes="(min-width: 1024px) 400px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
