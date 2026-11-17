import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, cream, Lead, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const options = [
  {
    title: "One home venue, one event",
    text: "A single fixture at your venue, with the relevant organizer workflow in scope.",
  },
  {
    title: "A bounded venue program",
    text: "An agreed block of fixtures at your venue, only where pilot and product evidence support that scope.",
  },
];

const phases = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

const measures = [
  "Check completion %",
  "Exception resolution time",
  "Approval turnaround time",
  "Follow-up closure rate",
  "Manual workarounds logged",
];

export function StartPilot() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Start with one event at your venue.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Agree the organizations, workflow, responsibilities, operating limits and measures before the pilot begins.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-2">
          {options.map((o) => (
            <RevealItem
              key={o.title}
              className={`group h-full rounded-2xl border ${line} bg-white px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
            >
              <h3 className="text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {o.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">{o.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <ol className="mt-10 grid grid-cols-2 gap-y-6 border-t-2 border-brand-yellow pt-5 sm:grid-cols-5">
            {phases.map((p, i) => (
              <li key={p}>
                <p className="text-[12px] text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-heading text-[16px] font-semibold text-ink">{p}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 rounded-2xl border ${line} ${cream} px-7 py-6`}>
            <h3 className="text-[15px] font-semibold text-ink">Example evaluation measures</h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {measures.map((m) => (
                <li
                  key={m}
                  className={`rounded-full border ${line} bg-white px-4 py-2 text-[13.5px] text-ink-muted transition-colors duration-300 hover:border-brand-yellow hover:text-ink`}
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
