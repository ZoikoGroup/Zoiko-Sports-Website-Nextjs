import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, cream, dark, sectionPad, wrap } from "./shared";

export function CorrectionRevision() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">A correction stays distinguishable from the original record.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Amendments made after a review has started — or after sign-off — are flagged as separate revisions, never a
            silent overwrite.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-1 md:grid-cols-2">
          <Reveal delay={0.1} className={`h-full rounded-2xl border border-[#DEDAD0] ${cream} px-7 py-8`}>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">Original record</p>
            <h3 className="mt-4 text-[18px] font-semibold text-ink">EX-105 · reported 12:10 PDT</h3>
            <p className="mt-4 text-[13.5px] text-ink-muted">
              Source: Northfield Arena Venue Operations, manual entry. Received 12:10 PDT.
            </p>
          </Reveal>
          <Reveal delay={0.2} className={`h-full rounded-2xl ${dark} px-7 py-8`}>
            <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-brand-yellow">
              Amended Sep 28, revision 2
            </p>
            <p className="mt-4 font-heading text-[15px] font-semibold leading-[1.6]">
              Backlog duration corrected from estimate to measured value; reason and reviewer acceptance recorded.
            </p>
            <p className="mt-4 text-[13px] text-white/55">
              Revision made after the review opened — flagged separately from the review conclusion.
            </p>
          </Reveal>
        </div>

        <Footnote className="mt-8">
          A diff and reason accompany every revision. No prior value is removed for a viewer whose access has since
          changed.
        </Footnote>
      </div>
    </section>
  );
}
