import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, altBg, card, cream, ruled, sectionPad, wrap } from "./shared";

/** Illustrative role views — not a real organization's permissions. */
const views = [
  {
    title: "Program Coordinator",
    sees: "Which events are proposed, included or excluded, and each event’s assigned owner.",
    withheld: "Per-event operational detail owned by venue or club roles.",
  },
  {
    title: "Event Organizer",
    sees: "Full operational detail for its own event: readiness, exceptions and decisions.",
    withheld: "Other events’ private records, even within the same program.",
  },
];

export function ProgramVisibility() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5">
          <div className="flex flex-col">
            <Reveal>
              <SectionTitle className="max-w-[660px]">Being part of a program does not grant visibility into every event.</SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                Each participating organization acts within its own authorized role, at the program level and at the
                event level.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-2.5 md:mt-auto md:grid-cols-2 md:pt-10">
              {views.map((v) => (
                <RevealItem key={v.title} className={`${card} ${cream} p-6`}>
                  <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-ink/50">
                    Illustrative role view
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 max-w-[360px] text-[14px] leading-[1.6] text-ink-muted">Sees: {v.sees}</p>
                  <p className="mt-3 max-w-[360px] text-[13.5px] leading-[1.6] text-ink/45">Withheld: {v.withheld}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="min-h-[320px]">
            <Photo
              src="/images/multi-event-operating-model/roles-discus-thrower.webp"
              alt="Discus thrower winding up inside a netted throwing cage"
              sizes="(min-width: 1024px) 420px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note className="mt-8">
            A program coordinator can propose a shared workflow. It cannot approve another organization&apos;s event-level
            decision.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
