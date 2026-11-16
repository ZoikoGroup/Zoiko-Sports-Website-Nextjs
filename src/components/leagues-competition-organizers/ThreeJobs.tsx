import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

// NOTE: the heading says three jobs; the design shows two role cards, a photo and a coordination-partners note — built as shown.
const jobs = [
  {
    title: "Competition Director",
    task: "Review a venue-impacting change and make a recorded competition schedule decision — timestamped, reasoned and tied to its source.",
    limit: "Cannot certify venue safety or approve venue-side readiness.",
  },
  {
    title: "League Operations Leader",
    task: "See which fixture milestones, venue assignments and cross-organization handoffs need attention before event day.",
    limit: "Visibility is scoped to authorized events, not every venue or club.",
  },
];

export function ThreeJobs() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Three jobs behind one competition.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">Each role has a distinct decision and a clear limit on what it owns.</Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {jobs.map((j) => (
            <RevealItem
              key={j.title}
              className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <h3 className="text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {j.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{j.task}</p>
              <Kicker className="mt-4 text-[11.5px] tracking-[0.04em]">Does not decide</Kicker>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-muted">{j.limit}</p>
            </RevealItem>
          ))}
          <RevealItem className="min-h-[234px]">
            <Photo
              src="/images/leagues-competition-organizers/jobs-baseball-pitcher.webp"
              alt="Baseball pitcher in a grey road uniform winding up to throw"
              sizes="(min-width: 768px) 427px, 95vw"
              className={`h-full w-full border ${line}`}
            />
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.15}>
          <div className={`mt-8 rounded-2xl border border-dashed ${line} ${cream} px-6 py-6`}>
            <Kicker className="text-[11.5px] tracking-[0.06em]">Coordination partners</Kicker>
            <p className="mt-1.5 text-[14px] leading-[1.7] text-ink-muted">
              Venue Operations Leads send venue-side readiness evidence or flag a condition affecting the competition.
              Club Event-Day Leads see a relevant approved update and can acknowledge it. Neither gains general organizer
              or other-club access.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
