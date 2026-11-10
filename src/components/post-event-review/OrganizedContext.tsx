import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

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
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-14`}>
        <div>
          <Reveal>
            <SectionTitle>Organized context, not a verdict.</SectionTitle>
            <Lead className="mt-4 max-w-[800px]">
              Zoiko Sports can organize recorded operational context. The relevant people and organizations retain
              responsibility for sporting, safety, venue and emergency decisions.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <RevealItem
                key={p.title}
                className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
              >
                <h3 className="text-[15.5px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2}>
          <Photo
            src="/images/post-event-review/context-long-jump-landing.webp"
            alt="Long jumper's feet about to land in the sand pit"
            sizes="(min-width: 1024px) 380px, 95vw"
            className="aspect-[380/335] w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
