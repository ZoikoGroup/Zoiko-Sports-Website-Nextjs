import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, card, pad2, ruled, sectionPad, wrap } from "./shared";

// The copy says "three patterns", but the design only shows two cards.
const patterns = [
  {
    title: "Duplicated setup",
    text: "Each new fixture re-enters organizers, venues and checklists from scratch, even when the pattern matches the last event.",
  },
  {
    title: "Schedule drift",
    text: "A date or venue change on one fixture doesn’t automatically flag which other fixtures or owners need to review it.",
  },
];

export function RepeatingPatterns() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5`}>
        <div className="flex flex-col">
          <Reveal>
            <SectionTitle className="max-w-[740px]">
              The operating pattern may repeat. The facts and owners change with every event.
            </SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              One-event tools don&apos;t scale cleanly on their own. Three patterns repeatedly break coordination across a
              fixture block.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-2.5 md:mt-auto md:grid-cols-2 md:pt-10">
            {patterns.map((p, i) => (
              <RevealItem key={p.title} className={`${card} bg-white p-6 sm:p-7`}>
                <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
                <h3 className="mt-3 text-[16px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 max-w-[360px] text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[300px]">
          <Photo
            src="/images/multi-event-operating-model/patterns-rugby-tackle.webp"
            alt="Rugby player in blue carrying the ball through a tackle"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
