import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const statusMessages = [
  "“This check has not been submitted for review.”",
  "“Evidence is awaiting review.”",
  "“Recorded complete — subject to the applicable event decision process.”",
];

export function CheckHistory() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-[88px]`}>
        <div>
          <Reveal>
            <SectionTitle>Open a check without losing its history.</SectionTitle>
            <Lead className="mt-5 max-w-[760px] text-[15.5px]">
              An authorized venue writer records the result; a separate reviewer role records a review outcome.
              Corrections append a reason rather than overwriting the prior record.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-6 grid gap-2.5">
            {statusMessages.map((m) => (
              <RevealItem
                key={m}
                className="rounded-xl border border-[#DEDAD0] bg-white px-5 py-3.5 text-[14px] italic text-ink/80 transition-colors duration-300 hover:border-brand-yellow"
              >
                {m}
              </RevealItem>
            ))}
          </RevealGroup>

          <Footnote className="mt-5">
            The public specimen never includes uploaded file bytes or private personnel identities.
          </Footnote>
        </div>

        <Reveal delay={0.2}>
          <Photo
            src="/images/venue-operations/history-volleyball-dig.webp"
            alt="Volleyball player digging the ball with outstretched arms"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="aspect-[420/357] w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
