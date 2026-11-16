import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const parties = [
  {
    title: "Venue Operations",
    acts: "Supplies readiness and exception updates for the venue.",
    sees: "An authorized operational summary — not internal venue notes.",
  },
  {
    title: "Riverside League (Competition Director)",
    acts: "Owns and approves competition schedule changes.",
    sees: "The requested change and the recorded decision, not the deliberation.",
  },
];

export function WhoSupplies() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-2.5 lg:grid-cols-[1fr_420px]`}>
        <div>
          <Reveal className="lg:pt-6">
            <SectionTitle>Who supplies the update. Who can act on it.</SectionTitle>
            <Lead className="mt-4 text-[15.5px]">Cross-organization dependency, named plainly for each party.</Lead>
          </Reveal>

          <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-2">
            {parties.map((p) => (
              <RevealItem
                key={p.title}
                className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <h3 className="text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <Kicker className="mt-4 text-[11px] tracking-[0.06em]">Supplies / acts</Kicker>
                <p className="mt-1 text-[14px] leading-[1.6] text-ink-muted">{p.acts}</p>
                <Kicker className="mt-4 text-[11px] tracking-[0.06em]">What your club sees</Kicker>
                <p className="mt-1 text-[14px] leading-[1.6] text-ink-muted">{p.sees}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="mt-6 min-h-[312px] lg:mt-0">
          <Photo
            src="/images/clubs-teams/supplies-table-tennis.webp"
            alt="Table tennis player in a pink shirt playing a forehand"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
