import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, ruled, sectionPad, wrap } from "./shared";

const governance = [
  {
    title: "Deny by default",
    text: "No access is granted from URL possession, UI visibility, or an organization name alone.",
  },
  {
    title: "No cross-org leakage",
    text: "A denied request returns a generic message — never a reason that reveals another organization’s records.",
  },
  {
    title: "Decision authority stays human",
    text: "Access approval is never a sporting or safety decision; an accountable duty holder remains responsible.",
  },
  {
    title: "Audit, not analytics",
    text: "Access-change history is reviewable by authorized admins; it is never sent to public marketing analytics.",
  },
];

export function AccessGovernance() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-14`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[760px]">Governance and accountability behind every access decision.</SectionTitle>
            <Lead className="mt-4 max-w-[800px]">
              A platform spanning organizations must be explicit about who decided an access change, and that access
              authority is never mistaken for sporting or safety authority.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {governance.map((g) => (
              <RevealItem
                key={g.title}
                className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
              >
                <h3 className="text-[15.5px] font-semibold text-ink">{g.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{g.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2}>
          <Photo
            src="/images/organizations-access/governance-pommel-horse.webp"
            alt="Gymnast swinging his legs high above the pommel horse"
            sizes="(min-width: 1024px) 380px, 95vw"
            className="aspect-[380/382] w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
