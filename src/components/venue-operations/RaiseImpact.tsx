import { Reveal } from "@/components/ui/Reveal";
import { Lead, SampleTag, SectionTitle, altBg, dark, ruled, sectionPad, wrap } from "./shared";

export function RaiseImpact() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Raise an impact. Request a change. Never approve it yourself.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            A venue can document a timing impact and request a change. The competition&apos;s authorized decision maker
            approves or declines it.
          </Lead>
        </Reveal>

        {/* Request vs. decision authority, joined by a 4px gutter */}
        <Reveal delay={0.1} className="mt-9 grid gap-1 overflow-hidden rounded-2xl md:grid-cols-2">
          <div className="border border-[#DEDAD0] bg-white px-7 py-8 md:rounded-l-2xl">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-ink/45">
              Venue request · Pending decision
            </p>
            <p className="mt-4 flex items-baseline gap-3 font-heading">
              <del className="text-[19px] font-semibold text-ink/35">12:15 PDT</del>
              <span aria-hidden="true" className="text-ink/50">
                →
              </span>
              <span className="text-[21px] font-bold text-ink">12:25 PDT</span>
            </p>
            <p className="mt-4 text-[14px] leading-[1.65] text-ink-muted">
              Reason: continuing entry backlog. Requested by: Northfield Arena / Venue Operations. Linked: EX-105.
            </p>
          </div>
          <div className={`${dark} px-7 py-8`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-yellow">Decision authority</p>
            <p className="mt-4 font-heading text-[15.5px] font-medium leading-[1.6]">
              Riverside League · Competition Director approves or declines the fixture start-time change.
            </p>
            <p className="mt-4 text-[13px] leading-[1.65] text-white/55">
              Venue responsibility ends at the request; it does not extend to competition approval.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
