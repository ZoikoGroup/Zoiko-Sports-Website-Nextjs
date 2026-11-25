import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const outcomes = [
  {
    title: "No data import",
    text: "Start with a defined workflow and agreed manual information where that is the safest, clearest option.",
  },
  {
    title: "Documented manual exchange",
    text: "Record who prepares information, who receives it, and how discrepancies are reviewed.",
  },
  {
    title: "Validated bounded import",
    text: "Use only the record category, permission, format, and operating mode approved for the written pilot.",
  },
  {
    title: "Out of scope",
    text: "Identify records or automation that the proposed pilot will not use, rather than forcing a connection.",
  },
];

export function ScopeOutcomes() {
  return (
    <section id="scope-outcomes" className={`scroll-mt-24 ${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="mx-auto max-w-[800px] text-center">
          <Kicker>Possible scope outcomes</Kicker>
          <SectionTitle className="mx-auto mt-4 max-w-[640px]">An import is only one possible answer.</SectionTitle>
          <Lead className="mt-5">
            The written pilot scope should determine whether any import, manual handoff, or technical exchange is
            included. These paths do not describe current product availability.
          </Lead>
        </Reveal>

        <RevealGroup className="mx-auto mt-12 grid max-w-[1120px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <RevealItem
              key={o.title}
              className={`group flex h-full min-h-[280px] flex-col justify-between gap-10 rounded-xl border ${line} bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)]`}
            >
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-brand-yellow text-[12px] font-bold text-ink transition-transform duration-300 group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading text-[18px] font-semibold leading-[1.5] text-ink">{o.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-ink-muted">{o.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
