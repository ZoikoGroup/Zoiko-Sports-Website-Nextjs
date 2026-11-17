import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, cream, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const gaps = [
  {
    title: "A schedule change reaches some people",
    text: "A revised start time can reach some recipients and not others, with no record of who still has the old version.",
  },
  {
    title: "Different versions in use at once",
    text: "Without a visible revision number, officials and venue staff can be working from different instructions at the same time.",
  },
  {
    title: "Sent mistaken for acknowledged",
    text: "A message being delivered is often treated as if every recipient has confirmed and understood it.",
  },
];

export function CoordinationGaps() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Common coordination gaps on event day.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {gaps.map((g, i) => (
            <RevealItem
              key={g.title}
              className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <p className="text-[12px] font-semibold text-ink/40">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {g.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{g.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
