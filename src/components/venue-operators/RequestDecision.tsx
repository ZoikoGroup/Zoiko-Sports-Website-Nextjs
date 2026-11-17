import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Kicker, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const records = [
  { label: "Request", text: "Northfield Arena / Venue Operations · 12:10 PDT · linked EX-105" },
  { label: "Decision", text: "Riverside League / Competition Director · 12:15 PDT" },
  { label: "Published revision", text: "Start 12:15 → 12:25 PDT · schedule v2 → v3" },
  { label: "Audience", text: "Officials, participating clubs, venue operations" },
];

export function RequestDecision() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[780px]">
            Your request, the organizer&apos;s decision and the published revision stay distinct.
          </SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Each carries its own actor and timestamp — raising an impact is never the same as approving a schedule
            change.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid max-w-[1040px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {records.map((r) => (
            <RevealItem key={r.label}>
              <Kicker className="text-[11.5px]">{r.label}</Kicker>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <p className={`mt-6 rounded-2xl border ${line} ${cream} px-6 py-5 text-[13.5px] leading-[1.65] text-ink-muted`}>
            Only the Competition Director&apos;s 12:15 PDT approval changes the schedule. Your venue&apos;s request and
            the organizer&apos;s decision remain two separate records.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
