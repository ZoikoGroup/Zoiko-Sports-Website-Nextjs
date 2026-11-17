import { Reveal } from "@/components/ui/Reveal";
import { altBg, Lead, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const phases = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

export function PilotDecision() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">
            An organizer or venue decides whether officials and staff join a pilot.
          </SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Participation is scoped to one event or fixture block, with responsibilities and support agreed in writing
            beforehand. Officials and staff do not purchase or activate their own access from this page.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <ol className="mt-10 grid grid-cols-2 gap-y-6 border-t-2 border-brand-yellow pt-5 sm:grid-cols-5">
            {phases.map((p, i) => (
              <li key={p}>
                <p className="text-[12px] text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-heading text-[16px] font-semibold text-ink">{p}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
