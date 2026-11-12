import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const scopeTags = ["Events", "Organizations", "Workflows", "Roles", "Data", "Measures"];

export function BoundedScope() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Start with a bounded scope.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A named fixture block does not confer blanket access to all events or organizations. Every scope is agreed
            in writing.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid md:grid-cols-2">
          <RevealItem className={`${card} ${cream} p-6`}>
            <h3 className="text-[16px] font-semibold text-ink">One event</h3>
            <p className="mt-2.5 max-w-[540px] text-[14px] leading-[1.6] text-ink-muted">
              A single fixture, often organizer plus venue, with agreed roles, operations, data and measures.
            </p>
          </RevealItem>
          <RevealItem className="rounded-2xl bg-[#24163A] p-6 text-white transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-[16px] font-semibold">Named fixture block</h3>
            <p className="mt-2.5 max-w-[560px] text-[14px] leading-[1.6] text-white/70">
              A defined set of fixtures, each still listed by name in the written scope — never an open-ended range.
            </p>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-2.5">
          {scopeTags.map((t) => (
            <span
              key={t}
              className={`rounded-full border border-[#DEDAD0] ${cream} px-4 py-2 font-heading text-[13px] font-semibold text-ink/80 transition-colors duration-300 hover:border-brand-yellow`}
            >
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
