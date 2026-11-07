import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { capabilities } from "@/data/about";
import { Lead, Photo, SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

export function OperatingLayer() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Start with the event. Build toward the sports operating layer.</SectionTitle>
          <Lead className="mt-5 max-w-[740px]">
            The first Zoiko Sports product focus is competition and venue operations. It gives participating
            organizations a governed way to coordinate the information and decisions surrounding an event while
            preserving responsibility and access boundaries.
          </Lead>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[3fr_2fr]">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((c) => (
              <RevealItem key={c.title} className={`${card} p-6`}>
                <h3 className="text-[16px] font-semibold leading-snug text-ink">{c.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted">{c.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="min-h-[300px]">
            <Photo
              src="/images/about/operating-layer-skate.webp"
              alt="Roller skater grinding along the lip of a concrete skate bowl"
              sizes="(min-width: 1024px) 500px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-2xl border border-[#DEDAD0] bg-white px-7 py-7 sm:px-8">
          <h3 className="text-[18px] font-semibold text-ink">The architectural foundation: a governed sports graph</h3>
          <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">
            Longer term, Zoiko Sports is designed around the idea that sports entities and events—competitions,
            fixtures, venues, clubs, teams, participants, organizations, rights, relationships, decisions and
            supporting records—should be connectable through a governed data model rather than remain isolated in
            product silos.
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-ink/45">
            Internally, this direction can be described as the One Sports Graph. Public use of that name is gated by
            brand and architecture approval.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
