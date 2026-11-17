import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Kicker, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const roles = [
  {
    label: "Organizer-authorized",
    title: "Officials Coordinator",
    text: "Manages official groups and briefing communications for the organizer.",
    sees: "The officials-confirmation milestone, briefing details and relevant acknowledgment summaries.",
    notDecide: "Cannot approve a competition schedule change — that stays with the Competition Director.",
  },
  {
    label: "Invited participant",
    title: "Event official",
    text: "Receives event information relevant to their assignment and acknowledges required updates.",
    sees: "The current event instruction, briefing milestone and updates addressed to their role.",
    notDecide: "Cannot see other events, other officials’ responses, or organizer-only records.",
  },
  {
    label: "Venue-side role",
    title: "Stewarding lead",
    text: "Receives a revised instruction and confirms it was seen.",
    sees: "Instructions and changes relevant to stewarding responsibilities.",
    notDecide: "Cannot approve a competition decision or certify the venue as safe.",
  },
  {
    label: "Organizer buyer/authority",
    title: "Competition Director",
    text: "Owns sporting schedule approval and reviews acknowledgment results.",
    sees: "The full fixture plan, recorded decisions and bounded acknowledgment results, where lawful.",
    notDecide: "Cannot override venue safety or local operating procedures.",
  },
  {
    label: "Venue buyer",
    title: "Venue Operations lead",
    text: "Owns venue readiness, local safety procedures and exception reporting.",
    sees: "Its own venue checks, exceptions and the schedule assigned to it.",
    notDecide: "Cannot approve a competition schedule change.",
  },
  {
    label: "Scoped participant",
    title: "Event operations staff",
    text: "Carries out approved, role-specific coordination tasks on event day.",
    sees: "Only the responsibilities authorized for their role.",
    notDecide: "Access is not inferred from general employment or ticket possession.",
  },
];

export function SixRoles() {
  return (
    <section id="who-does-what" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">Six roles. Different authority, different visibility.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            No role holds every permission. A competition decision stays with the organizer; a venue duty holder keeps
            safety authority; a participant acknowledges only what is addressed to them.
          </Lead>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_302px]">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <RevealItem
                key={r.title}
                className={`group h-full rounded-2xl border ${line} ${cream} px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
              >
                <Kicker className="text-[10.5px]">{r.label}</Kicker>
                <h3 className="mt-2 text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {r.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-muted">{r.text}</p>

                <Kicker className="mt-5 text-[11px]">Sees</Kicker>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{r.sees}</p>

                <Kicker className="mt-5 text-[11px]">Does not decide</Kicker>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{r.notDecide}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="hidden lg:block">
            <Photo
              src="/images/officials-event-staff/roles-tennis-celebration.webp"
              alt="Tennis player in purple clenching her fist in celebration on court"
              sizes="302px"
              className={`h-full w-full border ${line} rounded-md!`}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
