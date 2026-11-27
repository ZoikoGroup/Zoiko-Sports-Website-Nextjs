import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, divider, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const areas = [
  {
    title: "External systems assessment",
    text: "Incumbent tools are recorded only in a staffed, scoped assessment — never on a public uploader.",
  },
  {
    title: "Data rights & boundaries",
    text: "Organization, event and field-level scope, purpose and retention are proposed, reviewed and documented before any sharing.",
  },
  {
    // The design shows "&amp;" here — an encoding slip; rendered as a plain ampersand.
    title: "Sync-failure & recovery",
    text: "Outage, stale feed, retry and manual fallback are design patterns for a future connection — not a live guarantee today.",
  },
];

export function SystemsDataRights() {
  return (
    <section className={`${altBg} ${divider} ${sectionPad}`}>
      <div className={`${wrap} grid gap-8 lg:grid-cols-[1fr_292px]`}>
        <div>
          <Reveal className="max-w-[760px]">
            <SectionTitle>Systems, data rights and failure handling — assessed, not assumed.</SectionTitle>
            <Lead className="mt-4">
              No external account, token or vendor logo appears on this page. Existing systems are discussed in a
              staffed pilot-scoping conversation only.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-9 grid gap-6 sm:grid-cols-3">
            {areas.map((a) => (
              <RevealItem
                key={a.title}
                className={`h-full rounded-2xl border ${line} bg-white px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)]`}
              >
                <h3 className="font-heading text-[15.5px] font-semibold text-ink">{a.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-ink-muted">{a.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.1} className="mx-auto w-full max-w-[292px] lg:mx-0">
          <Photo
            src="/images/scheduling-calendars/systems-runner-smartwatch.webp"
            alt="A smiling runner checking her smartwatch against a sunlit wall"
            sizes="292px"
            className={`aspect-[292/353] w-full border ${line} lg:aspect-auto lg:h-full`}
          />
        </Reveal>
      </div>
    </section>
  );
}
