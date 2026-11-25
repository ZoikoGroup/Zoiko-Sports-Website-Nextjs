import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const outcomes = [
  {
    title: "No new connection",
    text: "Existing workflows may already provide what the event needs. The scope records that no additional exchange is required.",
  },
  {
    title: "Agreed manual handoff",
    text: "A named person may transfer or confirm information at an agreed point, with responsibilities made explicit.",
  },
  {
    title: "Scoped file exchange",
    text: "A file-based method may be considered only after its format, validation, permissions, and recovery process are agreed.",
  },
  {
    title: "Tested technical connection",
    text: "A technical connection is included only when the exact method has been assessed, implemented, tested, and written into scope.",
  },
];

export function ScopeOutcomes() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="mx-auto max-w-[780px] text-center">
          <Kicker>Possible scope outcomes</Kicker>
          <SectionTitle className="mt-4">What needs to connect—and what does not?</SectionTitle>
          <Lead className="mt-5">
            Depending on the event and validated capabilities, a pilot may consider one of four outcomes. These are
            possible scope decisions, not a list of available product features.
          </Lead>
        </Reveal>

        <RevealGroup className="mx-auto mt-12 grid max-w-[1120px] gap-4 md:grid-cols-2">
          {outcomes.map((o, i) => (
            <RevealItem
              key={o.title}
              className={`group flex h-full gap-6 rounded-xl border ${line} bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)] md:min-h-[210px] md:p-8`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[13px] font-bold text-ink transition-transform duration-300 group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-2.5">
                <h3 className="font-heading text-[19px] font-semibold text-ink">{o.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-ink-muted">{o.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 text-center text-[12.5px] font-medium text-ink/55">
          None is included unless expressly agreed in writing.
        </p>
      </div>
    </section>
  );
}
