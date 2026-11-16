import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, cream, line, ruled, sectionPad, wrap } from "./shared";

const options = [
  {
    title: "One event",
    text: "A single fixture involving your league and at least one venue, with agreed roles and measures.",
  },
  {
    title: "A fixture block",
    text: "A named, bounded set of fixtures — never an open-ended schedule — once evidence and written terms support it.",
  },
];

const phases = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

const measures = [
  "Readiness check completion %",
  "Decision record completeness %",
  "Acknowledgment response time",
  "Exception resolution rate",
  "Manual workarounds logged",
];

export function StartOne() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Start with one event or fixture block.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Agree the venue, participants, workflow, responsibilities and measures before the pilot begins.
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
              <p className="mt-2 max-w-[560px] text-[14px] leading-[1.65] text-ink-muted">{o.text}</p>
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
