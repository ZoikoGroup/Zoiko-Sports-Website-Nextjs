import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, cream, line, ruled, sectionPad, wrap } from "./shared";

const views = [
  {
    title: "Organizer view",
    sees: "Steward-count approval due 10:00 PDT and the overall 14 of 16 checks summary.",
    withheld: "Venue-internal inspection notes and equipment vendor detail.",
  },
  {
    title: "Venue view",
    sees: "Every check it owns, including the 09:00 PDT ramp inspection and its due time.",
    withheld: "Other venues’ checks and organizer-only approval records.",
  },
  {
    title: "Club view",
    sees: "Only the authorized updates directed to their fixture, such as the approved start-time change.",
    withheld: "The full readiness checklist and any record not addressed to them.",
  },
];

export function SnapshotViews() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">The same 08:50 snapshot. Three different views.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            14 of 16 readiness checks complete is one fact. What each organization sees of it depends on its role.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {views.map((v) => (
            <RevealItem
              key={v.title}
              className={`group h-full rounded-2xl border ${line} ${cream} px-6 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase leading-none tracking-[0.06em] text-ink/50">
                Illustrative role view
              </span>
              <h3 className="mt-3 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {v.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-muted">Sees: {v.sees}</p>
              <p className="mt-2 text-[12.5px] leading-[1.6] text-ink/45">Withheld: {v.withheld}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <p className={`mt-8 rounded-2xl border ${line} bg-white px-6 py-5 text-[13.5px] text-ink-muted`}>
            A recorded check status is a coordination indicator with a named owner and due time — never a safety
            certification or clearance to open the venue.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
