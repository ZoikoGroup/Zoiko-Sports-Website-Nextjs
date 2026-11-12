import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, sectionPad, wrap } from "./shared";

const parts = [
  { title: "Sending organization", text: "Who is originating the request, server-authorized." },
  { title: "Authorized recipient", text: "The specific organization and role expected to respond." },
  { title: "Agreed next action", text: "A specific, verifiable task — not a generic \"handover.\"" },
  { title: "Source & due context", text: "Timezone-aware due time and the version it is bound to." },
  { title: "Explicit response & history", text: "Accept, clarify or decline, recorded with actor and time." },
];

export function FiveParts() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>A handover is five things, together.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            An approval may still be required separately, and cannot be inferred from these five parts.
          </Lead>
        </Reveal>

        {/* Joined boxes: each cell draws its right/bottom edge, the grid draws the outer top/left. */}
        <RevealGroup className="mt-9 grid border-l border-t border-[#DEDAD0] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {parts.map((p, i) => (
            <RevealItem
              key={p.title}
              className={`group border-b border-r border-[#DEDAD0] ${cream} px-5 py-6 transition-colors duration-300 hover:bg-[#efede6]`}
            >
              <p className="text-[12px] font-semibold text-ink/40">{i + 1}</p>
              <h3 className="mt-2.5 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {p.title}
              </h3>
              <p className="mt-2 max-w-[220px] text-[14px] leading-[1.6] text-ink-muted">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
