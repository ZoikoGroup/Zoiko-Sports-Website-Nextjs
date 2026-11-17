import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Kicker, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

// NOTE: the design heading says "Three jobs" but shows only two role cards — built as shown.
const jobs = [
  {
    title: "Venue Director",
    text: "Owns overall venue readiness and accountable sign-off for the operational areas assigned to the venue.",
    notDecide: "Cannot approve a competition schedule change — that stays with the organizer.",
  },
  {
    title: "Venue Operations Manager",
    text: "Assigns readiness checks, tracks owners and due times, and raises operational exceptions on event day.",
    notDecide: "Cannot certify the venue as safe to open; a check state is a coordination indicator only.",
  },
];

export function ThreeJobs() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Three jobs inside one venue team.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">Each role has a distinct task and a clear limit on what it decides.</Lead>
        </Reveal>

        <div className="mt-9 grid gap-2.5 lg:grid-cols-3">
          <RevealGroup className="grid gap-2.5 md:grid-cols-2 lg:col-span-2">
            {jobs.map((j) => (
              <RevealItem
                key={j.title}
                className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <h3 className="text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {j.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">{j.text}</p>
                <Kicker className="mt-4 text-[11px]">Does not decide</Kicker>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{j.notDecide}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="min-h-[235px]">
            <Photo
              src="/images/venue-operators/jobs-volleyball-dig.webp"
              alt="Volleyball player kneeling low on a wooden court to dig the ball"
              sizes="(min-width: 1024px) 420px, 95vw"
              className={`h-full w-full border ${line}`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
