import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const parties = [
  {
    title: "Riverside League (Competition Director)",
    acts: "Owns and approves the competition plan and schedule changes.",
    sees: "The full fixture plan and every recorded decision.",
  },
  {
    title: "Northfield Arena (Venue Operations)",
    acts: "Supplies readiness status and exception reports for the venue.",
    sees: "An authorized readiness summary — not internal venue notes.",
  },
];

export function WhoPasses() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Who passes what to whom.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Cross-organization dependency, named plainly for each party in the fixture.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
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
              <Kicker className="mt-4 text-[11px] tracking-[0.06em]">What the organizer sees</Kicker>
              <p className="mt-1 text-[14px] leading-[1.6] text-ink-muted">{p.sees}</p>
            </RevealItem>
          ))}
          <RevealItem className="min-h-[214px]">
            <Photo
              src="/images/leagues-competition-organizers/passes-baseball-batter.webp"
              alt="Baseball batter in a red helmet following through on a swing"
              sizes="(min-width: 768px) 420px, 95vw"
              className={`h-full w-full border ${line}`}
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
