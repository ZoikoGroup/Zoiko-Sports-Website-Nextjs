import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, Photo, SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const bands = [
  { kicker: "Event", title: "Riverside Invitational", text: "Sep 26, 2026 · Northfield Arena" },
  { kicker: "Readiness scope", title: "16 included checks", text: "Fictional sample, this event only" },
  { kicker: "Check", title: "East entrance ramp inspection", text: "Category: venue access" },
  { kicker: "Owner & evidence", title: "Venue Operations", text: "Evidence: photo, pending" },
];

export function DefinedChecks() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_248px] lg:gap-2.5">
          <div className="flex flex-col">
            <Reveal>
              <SectionTitle className="max-w-[600px]">One event. Defined checks. Explicit responsibility.</SectionTitle>
              <Lead className="mt-4 max-w-[740px] text-[15.5px]">
                The operating view begins with the agreed event and the organizations authorized to contribute. Each
                band below is scoped by role, not implied by the interface.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4 lg:pt-10">
              {bands.map((b) => (
                <RevealItem key={b.kicker} className={`${card} bg-white p-5`}>
                  <Kicker className="font-semibold">{b.kicker}</Kicker>
                  <h3 className="mt-2 text-[15.5px] font-semibold leading-snug text-ink">{b.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-muted">{b.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="min-h-[323px]">
            <Photo
              src="/images/readiness-checks/defined-sprint-blocks.webp"
              alt="Sprinter driving out of the blocks on a purple track"
              sizes="(min-width: 1024px) 248px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note className="mt-9">
            Event, check, owner and review outcome are treated as separate objects; exact cardinality is a proposed
            schema pending product and architecture decisions.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
