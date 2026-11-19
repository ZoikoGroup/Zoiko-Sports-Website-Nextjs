import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const roles = [
  {
    role: "Competition organizer",
    incoming: "A game’s court assignment or start time changes.",
    next: "Confirm the updated schedule with every affected club and venue.",
    note: "A proposed change is recorded, not auto-applied.",
  },
  {
    role: "Venue operations",
    incoming: "Readiness checks due ahead of tipoff, including court and equipment turnover.",
    next: "Confirm owned checks and flag what’s outstanding.",
    note: "A completed check is not a safety certification.",
  },
];

export function OperatingWork() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_426px] lg:gap-0.5`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-10">
            <SectionTitle className="max-w-[720px]">The operating work between games and venues.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              A basketball fixture touches several organizations before, during and after tipoff. These are examples of
              the kind of handoff a scoped conversation could cover — not a description of shipped basketball features.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-9 grid flex-1 gap-0.5 md:grid-cols-2">
            {roles.map((r) => (
              <RevealItem
                key={r.role}
                className={`group flex h-full flex-col rounded-2xl border ${line} bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
              >
                <h3 className="text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {r.role}
                </h3>
                <Kicker className="mt-4 text-[10.5px]!">Incoming</Kicker>
                <p className="mt-1 text-[13.5px] leading-[1.6] text-ink-muted">{r.incoming}</p>
                <Kicker className="mt-3 text-[10.5px]!">Accountable next step</Kicker>
                <p className="mt-1 text-[13.5px] leading-[1.6] text-ink-muted">{r.next}</p>
                <div className="mt-auto pt-4">
                  <p className={`border-t ${line} pt-3 text-[12.5px] italic text-ink/45`}>{r.note}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="min-h-[320px]">
          <Photo
            src="/images/basketball/work-basketball-dunk.webp"
            alt="Basketball player in a red jersey hanging on the rim after a dunk"
            sizes="(min-width: 1024px) 426px, 95vw"
            className={`h-full min-h-[320px] w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
