import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, dark, sectionPad, wrap } from "./shared";

const stages = [
  { kicker: "Plan", title: "Define the register", text: "Set the in-scope check list and named owners." },
  { kicker: "Prepare", title: "Collect evidence", text: "Owners submit evidence and send checks for review." },
  { kicker: "Coordinate", title: "Resolve changes", text: "Authorized organizations respond to incomplete or changed checks." },
];

export function ReadinessWorkflow() {
  return (
    <section id="check-workflow" className={`scroll-mt-24 ${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_311px] lg:gap-2.5`}>
        <div className="flex flex-col">
          <Reveal>
            <SectionTitle className="max-w-[620px]">See where readiness fits in the event workflow.</SectionTitle>
            <Lead className="mt-4 text-[15.5px]">
              Readiness checks are one part of a wider operating sequence, not a standalone checklist.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-2.5 md:mt-auto md:grid-cols-3 md:pt-8">
            {stages.map((s) => (
              <RevealItem
                key={s.kicker}
                className={`${dark} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1`}
              >
                <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-yellow">{s.kicker}</p>
                <h3 className="mt-2 text-[16px] font-semibold">{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-white/70">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[291px]">
          <Photo
            src="/images/readiness-checks/workflow-figure-skater.webp"
            alt="Figure skater leaping in a split jump on the ice"
            sizes="(min-width: 1024px) 311px, 95vw"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
