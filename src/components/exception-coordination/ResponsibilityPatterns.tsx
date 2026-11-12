import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, card, pad2, ruled, sectionPad, wrap } from "./shared";

// The heading copy says "three patterns", but the design only shows two cards.
const patterns = [
  {
    title: "Asset restored ≠ impact resolved",
    text: "Turnstile 4 was restored at 12:07 PDT. The entry backlog it caused remained open as EX-105 at 12:10 PDT.",
  },
  {
    title: "Change requested ≠ approved",
    text: "Venue Operations requested a delay. Only the Competition Director’s 12:15 PDT decision changed the official start time.",
  },
];

export function ResponsibilityPatterns() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5`}>
        <div className="flex flex-col">
          <Reveal>
            <SectionTitle className="max-w-[740px]">When the plan changes, responsibility must stay clear.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Three patterns repeatedly break event-day coordination. Each is tracked as a distinct, separately owned
              fact.
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
            src="/images/exception-coordination/responsibility-tennis-serve.webp"
            alt="Tennis player reaching high to serve in front of a crowd"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
