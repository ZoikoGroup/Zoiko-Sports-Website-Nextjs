import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

// The heading and footnote mention four stages; the design only shows three boxes.
const stages = [
  { title: "Plan", text: "The sending organization drafts the responsibility." },
  { title: "Prepare", text: "The receiving team reviews scope, due time and source." },
  { title: "Coordinate", text: "Changes route through version review, not silent overwrite." },
];

export function HandoverStages() {
  return (
    <section id="handover-workflow" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col">
            <Reveal>
              <SectionTitle className="max-w-[740px]">
                Plan the responsibility. Prepare the receiving team. Coordinate changes. Review what was recorded.
              </SectionTitle>
            </Reveal>

            {/* Joined boxes that sit flush against the photo on desktop */}
            <RevealGroup className="mt-9 grid border-l border-t border-[#DEDAD0] sm:grid-cols-3 lg:mt-auto">
              {stages.map((s, i) => (
                <RevealItem
                  key={s.title}
                  className="border-b border-r border-[#DEDAD0] bg-white px-[22px] py-6 transition-colors duration-300 hover:bg-[#fbfaf6]"
                >
                  <p className="text-[12.5px] font-semibold tracking-[0.06em] text-ink/40">
                    0{i + 1} {s.title}
                  </p>
                  <p className="mt-3 max-w-[260px] text-[15px] leading-[1.55] text-ink">{s.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="mt-6 min-h-[296px] lg:mt-0">
            <Photo
              src="/images/operational-handover/stages-wrestling.webp"
              alt="Two wrestlers in blue and navy singlets mid-throw"
              sizes="(min-width: 1024px) 320px, 95vw"
              className="h-full w-full rounded-none! border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Footnote>One fictional handover (HO-F01) is carried across all four stages here; it is not a live record.</Footnote>
      </div>
    </section>
  );
}
