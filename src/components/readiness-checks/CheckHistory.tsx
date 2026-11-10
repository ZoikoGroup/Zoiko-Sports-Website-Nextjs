import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const statusMessages = [
  "“This check has not been submitted for review.”",
  "“Evidence is awaiting review.”",
  "“Recorded complete — subject to the applicable event decision process.”",
];

export function CheckHistory() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-[88px]`}>
        <div>
          <Reveal>
            <SectionTitle>Open a check without losing its history.</SectionTitle>
            <Lead className="mt-5 max-w-[760px] text-[15.5px]">
              A reviewer and an assigned owner see exactly what changed, who changed it and when — evidence and
              corrections stay accountable rather than overwritten.
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
            src="/images/readiness-checks/history-sprinter.webp"
            alt="Sprinter powering down the track mid-race"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="aspect-[420/315] w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
