import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Lead, SampleTag, SectionTitle, altBg, ruled, dark, sectionPad, wrap } from "./shared";

export function ScheduleChange() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">A schedule change is a reviewable consequence, not a silent rewrite.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Show which venue dependencies need review and who is responsible for confirming them.
          </Lead>
        </Reveal>

        {/* Fictional sample data — illustrative only. */}
        <Reveal delay={0.1} className="mt-9 grid gap-0.5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#DEDAD0] bg-white px-6 py-7 md:rounded-r-none">
            <Kicker className="font-semibold">Before · Requested</Kicker>
            <p className="mt-4 flex items-center gap-3 font-heading text-[20px] font-bold text-ink">
              <span className="text-ink/40 line-through">12:15 PDT</span>
              <span aria-hidden className="text-[16px] font-normal text-ink/50">
                →
              </span>
              <span>12:25 PDT</span>
            </p>
            <p className="mt-4 max-w-[560px] text-[14px] leading-[1.65] text-ink-muted">
              Reason: entry backlog persisted after Turnstile 4 was restored. Requested by: Northfield Arena / Venue
              Operations. Linked: EX-105.
            </p>
          </div>
          <div className={`rounded-2xl ${dark} px-6 py-7 md:rounded-l-none`}>
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-yellow">After · Approved</p>
            <h3 className="mt-4 max-w-[560px] text-[16px] font-semibold leading-[1.6]">
              Start time changed 12:15 → 12:25 PDT. Approved by Competition Director / Riverside League at 12:15 PDT.
            </h3>
            <p className="mt-4 text-[13.5px] leading-[1.65] text-white/50">
              Affected venue tasks remain open for venue confirmation — approval does not auto-close venue work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
