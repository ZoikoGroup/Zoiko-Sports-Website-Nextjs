import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, Tag, cream, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const findings = [
  {
    title: "EX-104 restoration time is accurate",
    meta: "Northfield Arena · Venue Operations · Evidence: EX-104",
    note: "No further action.",
    state: "Agreed",
    tone: "bg-[#e9e6dc] text-ink",
  },
  {
    title: "Entry backlog duration estimate",
    meta: "Riverside League vs. Northfield Arena · Evidence: EX-105",
    note: "Revision proposed — see amendment below.",
    state: "Disputed",
    tone: "bg-[#fde4e4] text-[#b42318]",
  },
  {
    title: "Late acknowledgment root cause",
    meta: "Riverside League · Evidence: Acknowledgment log",
    note: "Assigned as FU-032, due Oct 1.",
    state: "Open query",
    tone: "bg-[#fdf3d0] text-[#9a6b00]",
  },
];

export function Observations() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">Observations, agreed findings, and what stays disputed.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A documented finding is not a legal or safety certification. Disagreement is recorded, not hidden.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 space-y-1">
          {findings.map((f) => (
            <RevealItem
              key={f.title}
              className={`flex flex-col-reverse gap-3 border border-[#DEDAD0] ${cream} px-6 py-5 transition-colors duration-300 hover:border-brand-yellow/70 sm:flex-row sm:items-start sm:justify-between`}
            >
              <div>
                <h3 className="text-[15px] font-semibold text-ink">{f.title}</h3>
                <p className="mt-1 text-[13px] text-ink-muted">{f.meta}</p>
                <p className="mt-1 text-[13px] text-ink-muted">{f.note}</p>
              </div>
              <div>
                <Tag className={`px-3 ${f.tone}`}>{f.state}</Tag>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
