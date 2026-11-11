import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const roles = [
  { title: "Organizer", text: "Sees the full competition schedule and requested changes within its own events." },
  { title: "Venue", text: "Sees fixture dependencies affecting its own site; owns and updates its own checks." },
];

export function ScopedAccess() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_427px] lg:gap-0.5`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-12">
            <SectionTitle className="max-w-[740px]">
              A shared event context does not make every record visible to every person.
            </SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Access and actions depend on the participating organization, assigned role and event scope — enforced on
              the server, not a hidden interface control.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-0.5 md:mt-auto md:grid-cols-2 md:pt-10">
            {roles.map((r) => (
              <RevealItem key={r.title} className={`${card} ${cream} p-6`}>
                <h3 className="text-[15.5px] font-semibold text-ink">{r.title}</h3>
                <p className="mt-3 max-w-[320px] text-[14px] leading-[1.65] text-ink-muted">{r.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[300px]">
          <Photo
            src="/images/competition-to-venue/access-hurdler.webp"
            alt="Hurdler clearing a hurdle on a red running track"
            sizes="(min-width: 1024px) 427px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
