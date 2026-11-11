import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, Photo, SectionTitle, altBg, ruled, card, dark, sectionPad, wrap } from "./shared";

export function SharedEventContext() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5">
          <div className="flex flex-col">
            <Reveal>
              <SectionTitle className="max-w-[720px]">
                Work from the same event context. Keep responsibility with the right organization.
              </SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                The organizer owns competition decisions; venue teams own agreed venue-side tasks; information is shared
                only where permitted for the event.
              </Lead>
            </Reveal>

            {/* Fictional sample data — illustrative only. */}
            <RevealGroup className="mt-8 grid gap-2.5 md:mt-auto md:grid-cols-2 md:pt-10">
              <RevealItem className={`${card} bg-white px-6 py-6`}>
                <Kicker className="font-semibold">Organizer lane</Kicker>
                <h3 className="mt-2 text-[16px] font-semibold text-ink">Riverside League</h3>
                <p className="mt-1.5 text-[14px] text-ink-muted">Owns competition &amp; fixture decisions</p>
              </RevealItem>
              <RevealItem className={`rounded-2xl ${dark} px-6 py-6 transition-transform duration-300 hover:-translate-y-1`}>
                <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-yellow">Shared event spine</p>
                <h3 className="mt-2 text-[16px] font-semibold">Riverside Invitational · RV-026</h3>
                <p className="mt-1.5 text-[14px] text-white/60">Sep 26, 2026 · Northfield Arena</p>
              </RevealItem>
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="min-h-[300px]">
            <Photo
              src="/images/competition-to-venue/context-javelin-release.webp"
              alt="Javelin thrower releasing a throw in a packed stadium"
              sizes="(min-width: 1024px) 420px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note className="mt-9">
            A shared event identifier never implies universal access. Only authorized information is shown, scoped by
            organization, role and event.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
