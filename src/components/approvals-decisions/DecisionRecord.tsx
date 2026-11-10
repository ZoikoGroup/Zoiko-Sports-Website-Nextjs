import { Reveal } from "@/components/ui/Reveal";
import { Photo, SampleTag, SectionTitle, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const decisionRecord = [
  { label: "Event", value: "Riverside Invitational · Northfield Arena" },
  { label: "Change", value: "Competition start moved 12:15 → 12:25 PDT" },
  { label: "Reason", value: "Entry backlog remained after turnstile restart" },
  { label: "Requested by", value: "Venue Operations · Northfield Arena" },
  { label: "Approved by", value: "Competition Director · Riverside League" },
  { label: "Recorded", value: "September 26, 2026 at 12:15 PDT" },
  { label: "Status", value: "Decision recorded" },
];

export function DecisionRecord() {
  return (
    <section id="sample-decision" className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">A decision record should hold up to scrutiny.</SectionTitle>
        </Reveal>

        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-10">
          <Reveal delay={0.1}>
            <dl className="overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
              {decisionRecord.map((r, i) => (
                <div
                  key={r.label}
                  className={`grid gap-1 px-6 py-4 transition-colors duration-200 hover:bg-[#faf9f5] sm:grid-cols-[minmax(120px,0.75fr)_1fr] sm:gap-6 sm:py-[18px] ${
                    i > 0 ? "border-t border-[#ebe9df]" : ""
                  }`}
                >
                  <dt className="text-[13px] font-medium text-ink/45">{r.label}</dt>
                  <dd className="flex items-center gap-2 font-heading text-[15px] font-medium text-ink">
                    {r.label === "Status" && <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />}
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.2} className="min-h-[320px]">
            <Photo
              src="/images/approvals-decisions/record-figure-skater.webp"
              alt="Figure skater gliding on one edge in a red costume"
              sizes="(min-width: 1024px) 400px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
