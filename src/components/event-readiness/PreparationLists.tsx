import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, card, pad2, ruled, sectionPad, wrap } from "./shared";

const problems = [
  {
    title: "Unclear ownership",
    text: "An organizer changes a milestone while a venue checklist still shows the earlier date.",
  },
  {
    title: "Deadline drift",
    text: "A task remains open but no authorized owner is visible to the people who need to act.",
  },
];

export function PreparationLists() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_427px] lg:gap-0.5`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-12">
            <SectionTitle>One event can have several preparation lists.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              The work needs clear ownership. Organizers, venues and clubs often hold different parts of the operating
              picture before event day.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-0.5 md:mt-auto md:grid-cols-2 md:pt-10">
            {problems.map((p, i) => (
              <RevealItem key={p.title} className={`${card} bg-white p-6 sm:p-7`}>
                <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
                <h3 className="mt-3 text-[16px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 max-w-[340px] text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[300px]">
          <Photo
            src="/images/event-readiness/lists-football-volley.webp"
            alt="Footballer striking a volley on a grass pitch"
            sizes="(min-width: 1024px) 427px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
