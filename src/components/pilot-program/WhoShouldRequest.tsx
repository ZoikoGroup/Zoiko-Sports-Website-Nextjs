import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, card, ruled, sectionPad, wrap } from "./shared";

const audiences = [
  {
    title: "Leagues & competition organizers",
    text: "Scheduling and approvals span multiple venues and clubs with no single source of truth.",
    example: "A multi-day league weekend across several venues.",
  },
  {
    title: "Clubs & teams",
    text: "Confirming handoffs and readiness with host venues and officials is manual and easy to miss.",
    example: "A single away fixture or showcase event.",
  },
];

export function WhoShouldRequest() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_426px] lg:gap-0`}>
        <div className="flex flex-col">
          <Reveal>
            <SectionTitle>Who should request a pilot?</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              The initial focus is the organizations that actually coordinate an event — not a universal industry claim.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid md:mt-auto md:grid-cols-2 md:pt-10">
            {audiences.map((a) => (
              <RevealItem key={a.title} className={`${card} bg-white p-6 sm:p-7`}>
                <h3 className="text-[17px] font-semibold text-ink">{a.title}</h3>
                <p className="mt-3 max-w-[360px] text-[14.5px] leading-[1.65] text-ink-muted">{a.text}</p>
                <div className="mt-3 border-t border-[#ebe9df] pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/40">First-event example</p>
                  <p className="mt-0.5 font-heading text-[14px] font-medium text-ink">{a.example}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[300px]">
          <Photo
            src="/images/pilot-program/who-hammer-thrower.webp"
            alt="Hammer thrower gripping the handle mid-spin inside the cage"
            sizes="(min-width: 1024px) 426px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
