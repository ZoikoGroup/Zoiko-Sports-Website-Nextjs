import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

// NOTE: the heading says three jobs but the design shows two role cards plus a photo — built as shown.
const jobs = [
  {
    title: "Club Operations Manager",
    task: "Align club preparation milestones with the published fixture and venue dependencies.",
    limit: "Cannot approve venue readiness or change the competition schedule.",
  },
  {
    title: "Club Secretary",
    task: "Keep assigned club contacts and organizational handoff responsibilities current for the event.",
    limit: "Role-aware assignment preview only; no player roster management assumed.",
  },
];

export function ThreeJobs() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Three jobs inside one club.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">Each role has a distinct task and a clear limit on what it decides.</Lead>
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
          <RevealItem className="min-h-[214px]">
            <Photo
              src="/images/clubs-teams/jobs-javelin-throw.webp"
              alt="Javelin thrower in an orange vest at the moment of release"
              sizes="(min-width: 768px) 426px, 95vw"
              className={`h-full w-full border ${line}`}
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
