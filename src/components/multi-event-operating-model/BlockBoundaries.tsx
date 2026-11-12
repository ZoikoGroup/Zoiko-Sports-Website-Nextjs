import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, card, cream, ruled, sectionPad, wrap } from "./shared";

const boundaries = [
  {
    title: "Event-level authorization",
    text: "Every event in a program is checked against its own access rules — the program alone never grants visibility.",
  },
  {
    title: "Non-inherited status",
    text: "Readiness, approvals and acknowledgments never carry forward from one event to the next.",
  },
  {
    title: "Source & provenance",
    text: "Each schedule or scope change keeps its source, actor and time, even across fixtures.",
  },
  {
    title: "Correction history",
    text: "A later correction supersedes the original record rather than silently overwriting it.",
  },
];

/** Interface states shown when the view may be out of date. */
const states = [
  {
    title: "As-of snapshot",
    text: "Program and event status are shown as of their last confirmed update, not a live feed.",
  },
  {
    title: "Version conflict",
    text: "Another update exists for a record. Compare current and attempted values before reapplying.",
  },
  {
    title: "Could not confirm save",
    text: "Check submission status with a request reference before retrying — never assume success.",
  },
];

export function BlockBoundaries() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_436px] lg:gap-10`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[700px]">Access, provenance and connectivity stay bounded across the block.</SectionTitle>
            <Lead className="mt-4 max-w-[800px] text-[15.5px]">
              A program groups fixtures for coordination; it never widens who can act on an individual event. Authorized
              people retain responsibility for safety, security and competition decisions.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {boundaries.map((b) => (
              <RevealItem
                key={b.title}
                className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
              >
                <h3 className="text-[15.5px] font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 max-w-[250px] text-[14px] leading-[1.6] text-ink-muted">{b.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup className="mt-8 grid gap-4 md:grid-cols-3">
            {states.map((s) => (
              <RevealItem key={s.title} className={`${card} ${cream} p-5`}>
                <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[360px]">
          <Photo
            src="/images/multi-event-operating-model/access-field-hockey.webp"
            alt="Field hockey player swinging her stick on a green pitch"
            sizes="(min-width: 1024px) 436px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
