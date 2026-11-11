import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, altBg, ruled, pad2, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Plan", text: "Agree the fixture and venue responsibilities." },
  { title: "Prepare", text: "Review the open venue work and decision points." },
  { title: "Coordinate", text: "Route issues and changes to authorized people." },
  { title: "Review", text: "Identify outstanding follow-ups and what was recorded." },
];

export function CoordinationLifecycle() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Plan. Prepare. Coordinate. Review.</SectionTitle>
        </Reveal>

        {/* Joined boxes: each cell draws its right/bottom edge, the grid draws the outer top/left. */}
        <RevealGroup className="mt-9 grid border-l border-t border-[#DEDAD0] sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <RevealItem
              key={s.title}
              className="group border-b border-r border-[#DEDAD0] px-6 py-6 transition-colors duration-300 hover:bg-[#fbfaf6]"
            >
              <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40 transition-colors duration-300 group-hover:text-brand-blue">
                {pad2(i + 1)} {s.title}
              </p>
              <p className="mt-3 max-w-[260px] text-[14.5px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
