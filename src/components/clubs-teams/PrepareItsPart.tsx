import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, line, altBg, ruled, sectionPad, wrap } from "./shared";

const gaps = [
  {
    title: "Schedule drift",
    text: "A revised start time reaches the competition office while your club travel and arrival plans still reflect the old schedule.",
  },
  {
    title: "Unclear venue dependency",
    text: "Venue readiness checks are owned by the venue. Your club can see the status, not certify that the venue is safe to open.",
  },
  {
    title: "Ambiguous change confirmation",
    text: "A message being sent to your club is not the same as your club positively acknowledging it. The two states must stay distinct.",
  },
];

export function PrepareItsPart() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[780px]">
            Your club prepares its part. The organizer and venue own theirs.
          </SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {gaps.map((g, i) => (
            <RevealItem
              key={g.title}
              className={`group h-full rounded-2xl border ${line} bg-white px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
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
