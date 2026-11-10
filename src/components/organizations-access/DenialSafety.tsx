import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

const surfaces = [
  {
    title: "Direct links",
    text: "A guessed or stale record URL is denied without revealing whether the record exists.",
  },
  {
    title: "Search and counts",
    text: "Search results, autocomplete and result counts follow the same scope as the record itself.",
  },
  {
    title: "Exports",
    text: "An export is re-checked at download time; a revoked grant invalidates an in-progress or completed export.",
  },
];

export function DenialSafety() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_298px] lg:gap-7`}>
        <div>
          <Reveal>
            <SectionTitle>A denial never reveals what it is hiding.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Access controls must apply beyond what a screen shows: direct links, search results, exports and
              background requests use the same authorization rules.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-7 md:grid-cols-3">
            {surfaces.map((s) => (
              <RevealItem key={s.title} className={`${card} bg-white p-6`}>
                <h3 className="text-[15.5px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[276px]">
          <Photo
            src="/images/organizations-access/denial-discus.webp"
            alt="Discus thrower spinning through the release in a throwing circle"
            sizes="(min-width: 1024px) 298px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
