import { Reveal } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const phases = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

export function StartOneEvent() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[620px]">Start with one event. Agree every organization&apos;s part first.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            The organizer, participating venues and clubs, the shared workflow, decision authority and evaluation
            measures are agreed before a pilot begins.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-9 grid grid-cols-2 gap-y-6 border-t-2 border-brand-yellow pt-5 sm:grid-cols-5">
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
