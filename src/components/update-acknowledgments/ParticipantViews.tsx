import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, cream, sectionPad, wrap } from "./shared";

const views = [
  {
    role: "Competition Owner",
    sees: "Audience coverage and acknowledgment status across the event.",
    withheld: "Internal venue task detail unrelated to the update.",
  },
  {
    role: "Venue Operator",
    sees: "Its own delivery and acknowledgment status for assigned updates.",
    withheld: "Other organizations’ private communications.",
  },
  {
    role: "Club Lead",
    sees: "Updates addressed to its own club and its acknowledgment state.",
    withheld: "Other clubs’ responses and recipient lists.",
  },
];

export function ParticipantViews() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What can each participant see?</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">Access is scoped to your participating organization, event and role.</Lead>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {views.map((v) => (
            <RevealItem
              key={v.role}
              className={`group h-full rounded-2xl border border-[#DEDAD0] ${cream} px-6 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-ink/50">
                Illustrative role view
              </span>
              <h3 className="mt-3 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {v.role}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">Sees: {v.sees}</p>
              <p className="mt-3 text-[13px] leading-[1.6] text-ink/40">Withheld: {v.withheld}</p>
            </RevealItem>
          ))}

          <RevealItem className="min-h-[222px]">
            <Photo
              src="/images/update-acknowledgments/participants-badminton-lunge.webp"
              alt="Badminton player lunging low to return a shuttlecock"
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 95vw"
              className="h-full w-full rounded-lg!"
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
