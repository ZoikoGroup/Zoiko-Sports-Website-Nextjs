import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SectionTitle, card, cream, ruled, sectionPad, wrap } from "./shared";

const roles = [
  { title: "Organizer", text: "Sees expressly shared readiness across its own event." },
  { title: "Venue", text: "Can update venue-owned checks; sees dependencies affecting its own site." },
  { title: "Security administrator", text: "Enforces system access, but does not inherit operational approval authority." },
  { title: "Club", text: "Views only checks assigned to its own organization, not the wider event." },
];

export function SharedContext() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">Shared event context does not mean shared unrestricted access.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Each role is scoped by organization × event × object, enforced on the server — never by a hidden interface
            control alone.
          </Lead>
        </Reveal>

        <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_626px]">
          <RevealGroup className="grid gap-7 sm:grid-cols-2">
            {roles.map((r) => (
              <RevealItem key={r.title} className={`${card} ${cream} p-6`}>
                <h3 className="text-[15.5px] font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="min-h-[239px]">
            <Photo
              src="/images/readiness-checks/access-tennis-backhand.webp"
              alt="Tennis player in white hitting a backhand"
              sizes="(min-width: 1024px) 626px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Footnote>
          Audit events capture actor role, organization, action, object, before/after values and a correlation ID —
          never an unsupported &quot;immutable record&quot; claim.
        </Footnote>
      </div>
    </section>
  );
}
