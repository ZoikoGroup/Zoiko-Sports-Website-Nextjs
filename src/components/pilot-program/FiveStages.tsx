import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, SectionTitle, altBg, pad2, ruled, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Qualify", owner: "Zoiko commercial intake", output: "Fit and market review", gate: "Reviewed, not yet scoped" },
  {
    title: "Scope",
    owner: "Executive sponsor + Zoiko pilot owner",
    output: "Written pilot scope",
    gate: "Agreed in writing",
  },
  {
    title: "Configure",
    owner: "Zoiko implementation engineer",
    output: "Permission-scoped workflow",
    gate: "Security & privacy reviewed",
  },
  {
    title: "Operate",
    owner: "Operations lead + venue liaison",
    output: "Recorded coordination activity",
    gate: "Human-authorized go / no-go",
  },
  {
    title: "Evaluate",
    owner: "Buyer + Zoiko pilot manager",
    output: "Extend / revise / stop decision",
    gate: "Authorized human decision",
  },
];

export function FiveStages() {
  return (
    <section id="five-stages" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">A disciplined five-stage evaluation, not a free-trial signup.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stages.map((s, i) => (
            <RevealItem
              key={s.title}
              className="group border border-[#DEDAD0] bg-white px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70"
            >
              <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-2.5 border-b border-[#ebe9df] pb-2.5 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <dl className="mt-3 space-y-2 text-[13.5px]">
                {[
                  ["Owner", s.owner],
                  ["Output", s.output],
                  ["Exit gate", s.gate],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink/40">{label}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote>No stage can be skipped. A pilot can stop at any gate; stopping is a legitimate outcome.</Footnote>
      </div>
    </section>
  );
}
