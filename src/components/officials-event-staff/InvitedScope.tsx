import { Reveal } from "@/components/ui/Reveal";
import { altBg, Kicker, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const rows = [
  {
    inScope: "The event, briefing and instruction authorized for the official’s own organization and role.",
    notImplied: "Every event run by the same league, or another organization’s internal notes.",
  },
  {
    inScope: "Delivery and acknowledgment status for their own response.",
    notImplied: "Another participant’s private response, contact detail, or personnel record.",
  },
  {
    inScope: "A routed clarification to the accountable organizer or venue.",
    notImplied: "Approval authority over a schedule, safety or competition decision.",
  },
];

export function InvitedScope() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[820px]">Being invited to one event grants nothing beyond it.</SectionTitle>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-hidden rounded-2xl border border-[#e3e1cf] bg-white`}>
            <div className="hidden grid-cols-2 border-b border-[#e3e1cf] md:grid">
              <Kicker className="px-5 py-4 text-[10.5px]">May be in scope</Kicker>
              <Kicker className="border-l border-[#e3e1cf] px-5 py-4 text-[10.5px]">Not implied</Kicker>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.inScope}
                className={`grid text-[14px] leading-[1.65] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-2 ${i > 0 ? `border-t ${line}` : ""}`}
              >
                <p className="px-5 py-5">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/40 md:hidden">
                    May be in scope
                  </span>
                  {r.inScope}
                </p>
                <p className={`border-t ${line} px-5 py-5 md:border-l md:border-t-0`}>
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/40 md:hidden">
                    Not implied
                  </span>
                  {r.notImplied}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
