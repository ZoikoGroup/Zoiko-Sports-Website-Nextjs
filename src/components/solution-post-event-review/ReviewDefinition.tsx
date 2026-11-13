import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, cream, dark, ruled, sectionPad, wrap } from "./shared";

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
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">What post-event review is — and what it doesn&apos;t certify.</SectionTitle>
          <Lead className="mt-4 max-w-[800px]">
            Post-event review is the process of comparing agreed event plans with recorded decisions, exceptions,
            communications and outstanding follow-up. Its purpose is to clarify what is known, who remains responsible,
            and what to improve next.
          </Lead>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2">
          <Reveal delay={0.1} className="h-full border border-t-2 border-[#DEDAD0] border-t-brand-yellow bg-white px-7 py-8">
            <h3 className="text-[15.5px] font-semibold text-ink">Review</h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">
              Reconstructs what was recorded — sources, decisions, notices and follow-up — and surfaces what remains
              unresolved for a human to examine.
            </p>
          </Reveal>
          <Reveal delay={0.2} className={`h-full ${dark} px-7 py-8`}>
            <h3 className="text-[15.5px] font-semibold text-brand-yellow">Operational authority</h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-white/75">
              Remains with competition, venue, safety, medical, safeguarding and emergency decision-makers. Software
              review never substitutes for that judgment.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-8 grid gap-1 md:grid-cols-3">
          {principles.map((p) => (
            <RevealItem
              key={p.title}
              className={`group border border-[#DEDAD0] ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {p.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
