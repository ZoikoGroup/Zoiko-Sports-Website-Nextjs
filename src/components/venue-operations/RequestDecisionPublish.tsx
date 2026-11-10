import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Note, SectionTitle, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const stages = [
  { kicker: "Request", text: "Northfield Arena / Venue Operations · 12:10 PDT · linked EX-105" },
  { kicker: "Decision", text: "Riverside League / Competition Director · 12:15 PDT" },
  { kicker: "Published revision", text: "Start 12:15 → 12:25 PDT · schedule v2 → v3" },
  { kicker: "Audience", text: "Officials, participating clubs, venue operations" },
];

export function RequestDecisionPublish() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">Request, decision and publication stay distinct.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            A venue-originated request, the organizer&apos;s authorized decision and the published schedule revision
            each carry their own actor and timestamp.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <RevealItem key={s.kicker}>
              <Kicker className="font-semibold">{s.kicker}</Kicker>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note variant="cream" className="mt-8">
            12:15 PDT — Competition Director / Riverside League approved fixture start moving 12:15 → 12:25 PDT.
            Schedule version v2 → v3.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
