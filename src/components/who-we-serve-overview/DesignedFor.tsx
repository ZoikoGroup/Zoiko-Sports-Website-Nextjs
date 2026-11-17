import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const groups = [
  {
    name: "Leagues & Competition Organizers",
    text: "coordinate the competition schedule and venue dependencies, and hold schedule and competition decision authority.",
  },
  {
    name: "Clubs & Teams",
    text: "prepare their own team and receive the updates and decisions addressed to them.",
  },
  {
    name: "Venue Operators",
    text: "own readiness checks and event-day exceptions tied to the organizer’s schedule.",
  },
];

export function DesignedFor() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[353px_1fr] lg:gap-7`}>
        <Reveal>
          <Photo
            src="/images/who-we-serve/designed-figure-skater.webp"
            alt="Figure skater in a red dress gliding low on one blade with her arm extended"
            sizes="(min-width: 1024px) 353px, 95vw"
            className={`aspect-[353/324] w-full border ${line}`}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <SectionTitle>Who is Zoiko Sports designed for?</SectionTitle>
          <Lead className="mt-6">
            Zoiko Sports initially focuses on three groups responsible for delivering events: leagues and competition
            organizers, clubs and teams, and venue operators. Its intended operating model connects the schedule,
            readiness work, exceptions and authorized decisions across their agreed responsibilities.
          </Lead>

          <dl className="mt-5 space-y-3">
            {groups.map((g) => (
              <div key={g.name} className="flex flex-col gap-1 text-[15px] leading-[1.65] sm:flex-row sm:gap-3">
                <dt className="shrink-0 font-heading font-semibold text-ink">{g.name}</dt>
                <dd className="text-ink-muted">— {g.text}</dd>
              </div>
            ))}
          </dl>

          <Footnote className="mt-6">
            Additional participants and more specialized workflows may be considered as the platform expands and each
            scope is validated.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
