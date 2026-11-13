import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const principles = [
  {
    title: "Role-scoped context",
    text: "Every review panel is filtered to the authorized event, organization and role — never a blanket view.",
  },
  {
    title: "Decision provenance",
    text: "Who requested, who approved, and under what role-at-time authority stays attached to every decision.",
  },
  {
    title: "Source and notification precision",
    text: "Delivery, acknowledgment and source status are tracked as distinct, separately verified states.",
  },
  {
    title: "Human responsibility",
    text: "Sporting, safety, venue and emergency authority stays with accountable people — never the software.",
  },
];

export function OrganizedContext() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_379px] lg:gap-[100px]`}>
        <div>
          <Reveal>
            <SectionTitle>Organized context, not a verdict.</SectionTitle>
            <Lead className="mt-4 max-w-[800px]">
              Zoiko Sports can organize recorded operational context. The relevant people and organizations retain
              responsibility for sporting, safety, venue and emergency decisions.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-9 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
            {principles.map((p) => (
              <RevealItem key={p.title} className="group">
                <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="relative aspect-[379/335] w-full">
          <Photo
            src="/images/solution-post-event-review/context-badminton-smash.webp"
            alt="Badminton player reaching overhead to smash a shuttlecock"
            sizes="(min-width: 1024px) 379px, 95vw"
            className="h-full w-full rounded-lg!"
          />
        </Reveal>
      </div>
    </section>
  );
}
