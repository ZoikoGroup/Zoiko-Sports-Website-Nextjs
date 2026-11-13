import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, cream, sectionPad, wrap } from "./shared";

const roles = [
  {
    label: "Organizer",
    title: "Owns competition & fixture decisions",
    text: "Approves schedule changes and reviews event-day exceptions raised against the fixture.",
  },
  {
    label: "Venue",
    title: "Owns agreed venue-side readiness work",
    text: "Confirms access, ramp and steward checks; raises venue-originated exceptions.",
  },
];

export function Participants() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_405px] lg:gap-[10px]">
          <div>
            <Reveal>
              <SectionTitle>Who participates, and what they each control.</SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                The organizer, venue and clubs can contribute different information to the same event. Access and
                actions follow the organization, role and event — not just who is logged in.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-[10px] md:grid-cols-2">
              {roles.map((r) => (
                <RevealItem
                  key={r.label}
                  className={`group h-full rounded-2xl border border-[#DEDAD0] ${cream} px-6 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
                >
                  <Kicker className="text-[11px] font-semibold tracking-[0.1em]">{r.label}</Kicker>
                  <h3 className="mt-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.15} className="min-h-[283px]">
            <Photo
              src="/images/solution-overview/participants-rugby-run.webp"
              alt="Rugby league player running with the ball at training"
              sizes="(min-width: 1024px) 405px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className={`mt-8 rounded-2xl border border-[#DEDAD0] ${cream} px-6 py-6 text-[14px] text-ink-muted`}>
            Participation never merges rights, records or decision authority across organizations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
