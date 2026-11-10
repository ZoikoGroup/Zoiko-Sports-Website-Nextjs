import { Reveal } from "@/components/ui/Reveal";
import { Note, SectionTitle, altBg, dark, sectionPad, wrap } from "./shared";

export function DecisionAuthority() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">Who requested the change, and who had authority to approve it.</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 grid gap-1 md:grid-cols-3">
          <div className="border border-[#DEDAD0] bg-white px-6 py-7">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40">Requested</p>
            <h3 className="mt-3 text-[16px] font-semibold text-ink">Start moved 12:15 → 12:25 PDT</h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">
              Requested by Northfield Arena Venue Operations, citing EX-105.
            </p>
          </div>
          <div className={`${dark} px-6 py-7`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-yellow">Approved</p>
            <h3 className="mt-3 text-[16px] font-semibold">DEC-021 · Approved 12:15 PDT</h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-white/60">
              Recorded by the Riverside League Competition Director, role-at-time verified.
            </p>
          </div>
          <div className="border border-[#DEDAD0] bg-white px-6 py-7">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40">Source</p>
            <h3 className="mt-3 text-[16px] font-semibold text-ink">Linked to EX-104, EX-105</h3>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">
              Version 2 of 2 · earlier revision remains readable.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Note className="mt-8">
            A record contributor cannot approve a decision by editing a field. Authority is checked server-side against
            role-at-time before any commit.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
