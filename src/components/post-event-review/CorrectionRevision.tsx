import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, cream, dark, ruled, sectionPad, wrap } from "./shared";

export function CorrectionRevision() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">A correction stays distinguishable from the original record.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Amendments made after a review has started — or after sign-off — are flagged as separate revisions, never a
            silent overwrite.
          </Lead>
        </Reveal>

        {/* Original vs. amended, joined by a 4px gutter */}
        <Reveal delay={0.1} className="mt-9 grid gap-1 overflow-hidden rounded-2xl md:grid-cols-2">
          <div className={`border border-[#DEDAD0] ${cream} px-7 py-8 md:rounded-l-2xl`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-ink/45">Original record</p>
            <h3 className="mt-4 text-[19px] font-semibold text-ink">EX-105 · reported 12:10 PDT</h3>
            <p className="mt-4 text-[14px] leading-[1.65] text-ink-muted">
              Source: Northfield Arena Venue Operations, manual entry. Received 12:10 PDT.
            </p>
          </div>
          <div className={`${dark} px-7 py-8`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-yellow">
              Amended Sep 28, revision 2
            </p>
            <p className="mt-4 font-heading text-[15.5px] font-medium leading-[1.6]">
              Backlog duration corrected from estimate to measured value; reason and reviewer acceptance recorded.
            </p>
            <p className="mt-4 text-[13px] leading-[1.65] text-white/55">
              Revision made after the review opened — flagged separately from the review conclusion.
            </p>
          </div>
        </Reveal>

        <Footnote>
          A diff and reason accompany every revision. No prior value is removed for a viewer whose access has since
          changed.
        </Footnote>
      </div>
    </section>
  );
}
