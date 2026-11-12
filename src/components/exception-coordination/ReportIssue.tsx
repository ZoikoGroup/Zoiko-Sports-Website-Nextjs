import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const fields = [
  { title: "Event", text: "Preselected and locked to the authorized event context." },
  { title: "Occurrence date & time", text: "Event-local time with explicit timezone." },
  { title: "Issue title & category", text: "Chosen from an approved taxonomy — not an open text label." },
  { title: "Suggested owner", text: "Routed to an eligible participant, not free text." },
  { title: "Affected location", text: "The venue zone or area involved." },
  { title: "Description", text: "A concise, non-sensitive description of what was observed." },
];

export function ReportIssue() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">Report an issue without deciding event policy.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            An eligible reporter records what was observed. Reporting does not approve or authorize an event change.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-5">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {fields.map((f) => (
              <RevealItem key={f.title} className={`${card} ${cream} p-5`}>
                <h3 className="text-[15.5px] font-semibold leading-snug text-ink">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{f.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="min-h-[256px]">
            <Photo
              src="/images/exception-coordination/report-fencing.webp"
              alt="Two fencers mid-lunge on a lit piste"
              sizes="(min-width: 1024px) 500px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
