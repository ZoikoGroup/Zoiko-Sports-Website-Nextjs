import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, altBg, line, ruled, sectionPad, wrap } from "./shared";

const rows = [
  {
    inScope:
      "A scoped task brief, accountable owner, due time and current instruction version for its own organization.",
    notImplied: "Vendor self-registration, pricing, licensing or a public supplier marketplace.",
  },
  {
    inScope: "A relevant update for its organization, with transport status shown separately from human acknowledgment.",
    notImplied: "Insurance, credentialing, background-check or safety-certification validation.",
  },
  {
    inScope: "A routed clarification question to the accountable organization.",
    notImplied: "Approval authority over schedule, safety, competition or venue-opening decisions.",
  },
];

export function WhatPartnersMean() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">What does &quot;Contractors &amp; Service Partners&quot; mean?</SectionTitle>
          <Lead className="mt-5 max-w-[800px] text-[16.5px]">
            Contractors and service partners are organizations that may contribute to an agreed event workflow alongside
            an organizer, club or venue. They sit under Who We Serve → Coordination Partners and are marked gated — a
            bounded participant category, not a separate initial buyer segment or an open vendor marketplace.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-hidden rounded-2xl border ${line} bg-white`}>
            <div className={`hidden grid-cols-2 border-b ${line} md:grid`}>
              <Kicker className="px-4 py-4 text-[11px]">May be in scope</Kicker>
              <Kicker className={`border-l ${line} px-4 py-4 text-[11px]`}>Not implied</Kicker>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.inScope}
                className={`grid text-[14px] leading-[1.65] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-2 ${i > 0 ? `border-t ${line}` : ""}`}
              >
                <p className="px-5 py-6">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/40 md:hidden">
                    May be in scope
                  </span>
                  {r.inScope}
                </p>
                <p className={`border-t ${line} px-5 py-6 md:border-l md:border-t-0`}>
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
