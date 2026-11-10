import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const roles = [
  { title: "Venue", text: "Updates venue-owned checks; sees dependencies affecting its own site." },
  { title: "Organizer", text: "Sees expressly shared venue readiness across its own event." },
  { title: "Club", text: "Views only checks and updates assigned to its own organization." },
  { title: "Security administrator", text: "Enforces system access, but does not inherit operational approval authority." },
];

export function SharedAccess() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_434px] lg:gap-10`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[740px]">Shared event context does not mean shared unrestricted access.</SectionTitle>
            <Lead className="mt-4 max-w-[800px] text-[15.5px]">
              Each role is scoped by organization × event × object, enforced on the server — never by a hidden interface
              control alone.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <RevealItem
                key={r.title}
                className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
              >
                <h3 className="text-[15.5px] font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <Note className="mt-8">
              Sharing relevant event context does not grant access to unrelated venue, club or organizer records. This
              is a proposed access model; permissions depend on verified implementation and agreed pilot scope.
            </Note>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="min-h-[400px]">
          <Photo
            src="/images/venue-operations/access-archery.webp"
            alt="Seated archer drawing a compound bow with her foot"
            sizes="(min-width: 1024px) 434px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
