import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, StatePill, altBg, cream, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const fields = [
  { label: "Event", value: "Riverside Invitational · Northfield Arena" },
  { label: "Next action", value: "Confirm access-plan review and the named receiving lead" },
  { label: "Owner", value: "Northfield Arena / Venue Operations" },
  { label: "Due", value: "Sep 25, 2026 · 17:00 PDT (UTC−07:00)" },
  { label: "Source", value: "AP-SAMPLE-02 · v2 · current recipient response required" },
  { label: "Current response", value: "The receiving team needs more information before accepting this version." },
];

const responses = ["Accept", "Request clarification", "Decline", "Escalate"];

export function HandoverDetail() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Review the next agreed action.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            The detail specimen below groups summary, scope, source and permitted responses for one fictional handover.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1fr_412px]">
          <Reveal delay={0.1} className="rounded-2xl border border-[#DEDAD0] bg-white px-6 py-6 sm:px-[30px]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ebe9df] pb-4 pt-2">
              <p className="text-[13.5px] font-semibold text-ink/45">HO-F01 · version 2</p>
              <StatePill>Clarification requested</StatePill>
            </div>

            <dl>
              {fields.map((f) => (
                <div key={f.label} className="border-b border-[#ebe9df] py-4">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/40">{f.label}</dt>
                  <dd className="mt-1 font-heading text-[15px] font-medium text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>

            {/* Static specimen of the permitted responses */}
            <div className="mt-4 flex flex-wrap gap-2.5" aria-hidden>
              {responses.map((r, i) => (
                <span
                  key={r}
                  className={`rounded-md px-4 py-2.5 font-heading text-[13.5px] font-semibold text-ink ${
                    i === 0 ? "bg-brand-yellow" : cream
                  }`}
                >
                  {r}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="min-h-[360px]">
            <Photo
              src="/images/operational-handover/detail-mma-kick.webp"
              alt="Mixed martial artist leaping into a knee strike in the ring"
              sizes="(min-width: 1024px) 412px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
