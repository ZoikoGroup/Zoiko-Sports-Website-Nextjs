import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Kicker, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const parties = [
  {
    title: "Riverside League (Competition Director)",
    acts: "Publishes and approves the competition schedule your venue plans against.",
    sees: "The schedule version relevant to your checks — not internal organizer deliberation.",
  },
  {
    title: "Participating Clubs",
    acts: "Acknowledge venue-related updates addressed to them.",
    sees: "Only that the acknowledgment closed — never another club’s internal response.",
  },
];

export function WhoSupplies() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Who supplies the update. Who can act on it.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">Cross-organization dependency, named plainly for each party.</Lead>
        </Reveal>

        <div className="mt-9 grid gap-2.5 lg:grid-cols-3">
          <RevealGroup className="grid gap-2.5 md:grid-cols-2 lg:col-span-2">
            {parties.map((p) => (
              <RevealItem
                key={p.title}
                className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <h3 className="text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <Kicker className="mt-4 text-[11px]">Supplies / acts</Kicker>
                <p className="mt-1 text-[14px] leading-[1.6] text-ink-muted">{p.acts}</p>
                <Kicker className="mt-4 text-[11px]">What your venue sees</Kicker>
                <p className="mt-1 text-[14px] leading-[1.6] text-ink-muted">{p.sees}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="min-h-[212px]">
            <Photo
              src="/images/venue-operators/supplies-rope-pull.webp"
              alt="Strongman athlete gripping a thick rope during a pulling event"
              sizes="(min-width: 1024px) 420px, 95vw"
              className={`h-full w-full border ${line}`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
