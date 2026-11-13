import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, pad2, ruled, sectionPad, wrap } from "./shared";

const gaps = [
  {
    title: "Channel reached ≠ person responded",
    text: "A message reaching a supported channel can be mistaken for a required person actually responding to it.",
  },
  {
    title: "Old version ≠ current revision",
    text: "An acknowledgment recorded against an earlier version does not carry forward when the update changes.",
  },
];

export function AwarenessStates() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-1 lg:grid-cols-[1fr_426px]`}>
        <div className="flex flex-col">
          <Reveal className="lg:pt-6">
            <SectionTitle className="max-w-[700px]">
              One event update. Several organizations. Different states of awareness.
            </SectionTitle>
            <Lead className="mt-4 text-[15.5px]">What was sent is not always what was acknowledged.</Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid flex-1 gap-0.5 md:grid-cols-2">
            {gaps.map((g, i) => (
              <RevealItem
                key={g.title}
                className="group h-full rounded-2xl border border-[#DEDAD0] bg-white px-6 py-7 transition-colors duration-300 hover:border-brand-yellow/70"
              >
                <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
                <h3 className="mt-3 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {g.title}
                </h3>
                <p className="mt-2.5 max-w-[340px] text-[14px] leading-[1.6] text-ink-muted">{g.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="min-h-[300px] lg:min-h-[346px]">
          <Photo
            src="/images/update-acknowledgments/awareness-football-volley.webp"
            alt="Footballer striking an overhead volley in a crowded stadium"
            sizes="(min-width: 1024px) 426px, 95vw"
            className="h-full w-full rounded-lg!"
          />
        </Reveal>
      </div>
    </section>
  );
}
