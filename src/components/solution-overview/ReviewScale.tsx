import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, TextLink, cream, dark, sectionPad, wrap } from "./shared";

export function ReviewScale() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <Kicker>Review &amp; Scale</Kicker>
          <SectionTitle className="mt-3 max-w-[760px]">Review the recorded changes. Decide what to extend.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Evaluate a scoped workflow — including its open follow-up work — before deciding whether, and how, to extend
            it to further events.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-1 md:grid-cols-2">
          <Reveal delay={0.1} className={`h-full rounded-2xl border border-[#DEDAD0] ${cream} px-7 py-7`}>
            <Kicker className="text-[11px] tracking-[0.1em]">Reviewed</Kicker>
            <p className="mt-3 font-heading text-[15.5px] font-semibold leading-[1.5] text-ink">
              Sep 27, 09:00 PDT — EX-104, EX-105 and the approved start-time change.
            </p>
            <p className="mt-4 text-[13.5px] leading-[1.6] text-ink-muted">
              Closing an event review does not resolve outstanding follow-up work on its own.
            </p>
          </Reveal>

          <Reveal delay={0.2} className={`h-full rounded-2xl ${dark} px-7 py-7`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-yellow">Open follow-up</p>
            <p className="mt-3 font-heading text-[15.5px] font-semibold leading-[1.5]">
              Replace Turnstile 4 reader — assigned Northfield Arena Venue Operations, due Oct 2.
            </p>
            <p className="mt-4 text-[13.5px] leading-[1.6] text-white/55">
              Remains open independent of the event review&apos;s conclusion.
            </p>
          </Reveal>
        </div>

        <TextLink href="/solutions/post-event-review">See the full review workflow</TextLink>
      </div>
    </section>
  );
}
