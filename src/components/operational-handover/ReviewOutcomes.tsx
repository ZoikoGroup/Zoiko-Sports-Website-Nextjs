import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const outcomes = [
  { title: "Accepted", text: "Agreed for the stated version." },
  { title: "Declined", text: "Refused; sender reviews next step." },
  { title: "Superseded", text: "A newer version replaced it." },
  { title: "Open", text: "Still awaiting a recipient response." },
  { title: "Canceled", text: "Withdrawn or event canceled." },
];

export function ReviewOutcomes() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">
            Review what was requested, who responded, what changed — and what&apos;s still open.
          </SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A completed event does not auto-close outstanding handovers.
          </Lead>
        </Reveal>

        {/* Joined boxes: each cell draws its right/bottom edge, the grid draws the outer top/left. */}
        <RevealGroup className="mt-9 grid border-l border-t border-[#DEDAD0] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {outcomes.map((o) => (
            <RevealItem
              key={o.title}
              className="group border-b border-r border-[#DEDAD0] bg-white px-4 py-4 transition-colors duration-300 hover:bg-[#fbfaf6]"
            >
              <h3 className="text-[14.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {o.title}
              </h3>
              <p className="mt-1 text-[13px] text-ink-muted">{o.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
