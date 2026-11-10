import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SectionTitle, card, sectionPad, wrap } from "./shared";

const records = [
  {
    title: "Organizer schedule record",
    text: "Fixture timing and version, owned by the competition organizer.",
    source: "Source: organizer system of record",
  },
  {
    title: "Venue check record",
    text: "Agreed checks, owners, due times and evidence, owned by the venue.",
    source: "Source: venue operations",
  },
];

export function SourceContext() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_426px] lg:gap-0">
          <div className="flex flex-col">
            <Reveal className="lg:pr-12">
              <SectionTitle className="max-w-[640px]">Connect source context without losing ownership.</SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                Where an integration is validated for the agreed workflow, imported information should preserve source
                identity, recorded update time, access restrictions and exceptions needing human review.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-0.5 md:mt-auto md:grid-cols-2 md:pt-8">
              {records.map((r) => (
                <RevealItem key={r.title} className={`${card} flex flex-col bg-white p-6`}>
                  <h3 className="text-[15.5px] font-semibold text-ink">{r.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
                  <p className="mt-auto pt-4 text-[12.5px] font-semibold text-ink/45">{r.source}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="min-h-[300px]">
            <Photo
              src="/images/venue-operations/source-javelins.webp"
              alt="Javelin thrower standing with a bundle of javelins in a stadium"
              sizes="(min-width: 1024px) 426px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Footnote>
          No unverified partner logos, API availability, &quot;seamless integration&quot; or automatic multi-system
          coverage are claimed.
        </Footnote>
      </div>
    </section>
  );
}
