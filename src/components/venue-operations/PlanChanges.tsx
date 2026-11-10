import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, card, pad2, ruled, sectionPad, wrap } from "./shared";

const problems = [
  {
    title: "Different operating versions",
    text: "A revised fixture start does not automatically update a local entrance plan.",
  },
  {
    title: "Open work without clear ownership",
    text: "A check can remain unfinished even when several teams have received an update.",
  },
];

export function PlanChanges() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-stretch gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[720px]">The event plan changes. Venue work must stay accountable.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Venue teams coordinate access, staffing and readiness against a schedule they do not own. The proposed
              value is to make that dependency visible without taking over local operational authority.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-2.5 md:grid-cols-2">
            {problems.map((p, i) => (
              <RevealItem key={p.title} className={`${card} bg-white p-6 sm:p-7`}>
                <Kicker className="font-medium tracking-normal">{pad2(i + 1)}</Kicker>
                <h3 className="mt-3 text-[17px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[340px]">
          <Photo
            src="/images/venue-operations/plan-squash-rally.webp"
            alt="Squash player stretching low to return a shot"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
