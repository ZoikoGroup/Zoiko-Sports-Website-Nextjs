import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, ruled, sectionPad, wrap } from "./shared";

const governance = [
  {
    title: "Scoped by organization and role",
    text: "Record, search and export detail are visible only within the authorized event, organization and role.",
  },
  {
    title: "No cross-organization leakage",
    text: "A denied request returns a generic message — never a reason that reveals another organization's records.",
  },
  { title: "Source, not safety authority", text: "Verified source context never certifies a venue safe, open, or ready." },
  {
    title: "Audit, not marketing analytics",
    text: "Record identifiers and content are never carried into public web analytics.",
  },
];

export function Governance() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-14`}>
        <div>
          <Reveal>
            <SectionTitle>Security and governance behind every record.</SectionTitle>
            <Lead className="mt-4 max-w-[800px]">
              A platform spanning organizations must be explicit about who can see a record, and what happens when its
              source or history can&apos;t be confirmed.
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
            src="/images/operational-records/security-pitcher-kick.webp"
            alt="Baseball pitcher in a high leg kick during the wind-up"
            sizes="(min-width: 1024px) 380px, 95vw"
            className="aspect-[379/314] w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
