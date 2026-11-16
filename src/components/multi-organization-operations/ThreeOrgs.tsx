import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

// NOTE: the heading says three organizations; the design shows two organization cards plus a photo — built as shown.
const orgs = [
  {
    org: "Riverside League",
    title: "Event Organizer",
    owns: "Owns the competition schedule, reviews venue-reported issues and makes the recorded decision to change a fixture.",
    sees: "The full fixture plan, recorded decisions and an authorized readiness summary from the venue.",
    limit: "Cannot certify venue safety or edit the venue’s own operational checks.",
  },
  {
    org: "Northfield Arena",
    title: "Venue Operations",
    owns: "Owns venue readiness, local safety procedures and reporting an operational exception when one occurs.",
    sees: "Its own venue checks, exceptions and the competition schedule assigned to it.",
    limit: "Cannot approve a competition schedule change or see another venue’s records.",
  },
];

export function ThreeOrgs() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Three organizations. Three distinct jobs.</SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            No single enterprise administrator sits above all three. Each organization owns its part and sees only what
            its role permits.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {orgs.map((o) => (
            <RevealItem
              key={o.title}
              className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <Kicker className="text-[11px]">{o.org}</Kicker>
              <h3 className="mt-2 text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {o.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{o.owns}</p>
              <Kicker className="mt-4 text-[11.5px] tracking-[0.04em]">Sees</Kicker>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-muted">{o.sees}</p>
              <Kicker className="mt-4 text-[11.5px] tracking-[0.04em]">Does not decide</Kicker>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-muted">{o.limit}</p>
            </RevealItem>
          ))}
          <RevealItem className="min-h-[344px]">
            <Photo
              src="/images/multi-organization-operations/orgs-field-hockey.webp"
              alt="Field hockey player lunging into a hit on a grass pitch"
              sizes="(min-width: 768px) 426px, 95vw"
              className={`h-full w-full border ${line}`}
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
