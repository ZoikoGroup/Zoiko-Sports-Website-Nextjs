import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const boundaries = [
  {
    title: "Source & provenance",
    text: "Source references remain attributable where supported; no record is silently overwritten.",
  },
  {
    title: "Scoped access",
    text: "Every read is authorized by organization, role and event — never a hidden interface control alone.",
  },
  { title: "Human approval", text: "Approvals are human actions by an authorized role, independent of task completion." },
  {
    title: "Connectivity",
    text: "Connectivity arrangements are scoped and agreed before live-event usage, not assumed.",
  },
];

export function TrustBoundaries() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_379px] lg:gap-14`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[680px]">Trust, provenance and connectivity stay bounded.</SectionTitle>
            <Lead className="mt-4 max-w-[780px] text-[15.5px]">
              Access follows organization and role; source references remain attributable; approvals are human actions.
              No software completion state certifies a venue or authorizes operations.
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
        </div>

        <Reveal delay={0.2}>
          <Photo
            src="/images/event-readiness/trust-tennis-lunge.webp"
            alt="Tennis player lunging low to return a ball"
            sizes="(min-width: 1024px) 379px, 95vw"
            className="aspect-[379/382] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
