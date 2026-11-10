import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, cream, dark, sectionPad, wrap } from "./shared";

const principles = [
  {
    title: "Clarifies, doesn’t certify",
    text: "Review explains what was recorded and decided. It never declares an event safe or complete.",
  },
  {
    title: "Follow-up stays owned",
    text: "A finding becomes a task with a responsible organization and a due date, not an ambient note.",
  },
  {
    title: "Humans sign off",
    text: "Conclusion requires an attested, role-at-time decision — never an automated close-out.",
  },
];

export function ReviewDefinition() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">What post-event review is — and what it doesn&apos;t certify.</SectionTitle>
          <Lead className="mt-4 max-w-[780px]">
            Post-event review is the process of comparing agreed event plans with recorded decisions, exceptions,
            communications and outstanding follow-up. Its purpose is to clarify what is known, who remains responsible,
            and what to improve next.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 grid md:grid-cols-2">
          <div className="border border-brand-yellow bg-white px-7 py-8">
            <h3 className="text-[16px] font-semibold text-ink">Review</h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">
              Reconstructs what was recorded — sources, decisions, notices and follow-up — and surfaces what remains
              unresolved for a human to examine.
            </p>
          </div>
          <div className={`${dark} px-7 py-8`}>
            <h3 className="text-[16px] font-semibold text-brand-yellow">Operational authority</h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-white/75">
              Remains with competition, venue, safety, medical, safeguarding and emergency decision-makers. Software
              review never substitutes for that judgment.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-8 grid border-l border-t border-[#DEDAD0] md:grid-cols-3">
          {principles.map((p) => (
            <RevealItem
              key={p.title}
              className={`group relative border-b border-r border-[#DEDAD0] ${cream} px-5 py-6 transition-colors duration-300 hover:bg-[#efece3]`}
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-yellow transition-transform duration-500 group-hover:scale-x-100" />
              <h3 className="text-[15.5px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
