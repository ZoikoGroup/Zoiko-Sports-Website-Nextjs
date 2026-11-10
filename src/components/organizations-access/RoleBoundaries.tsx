import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

const roles = [
  {
    title: "Competition Director",
    text: "Controls authorized competition decisions for the agreed event.",
    cannot: "Cannot: approve venue safety or access another organization’s private records.",
  },
  {
    title: "Venue Operations Director",
    text: "Manages authorized venue-side roles, tasks and coordination.",
    cannot: "Cannot: decide a competition start time solely by venue role.",
  },
  {
    title: "Club Operations Lead",
    text: "Coordinates own club readiness and approved shared event participation.",
    cannot: "Cannot: see another club’s private roster or records.",
  },
];

export function RoleBoundaries() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_298px] lg:gap-7">
          <div className="flex flex-col">
            <Reveal>
              <SectionTitle>A role grants the minimum this responsibility requires.</SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                A role cannot extend beyond its selected organization and event scope. Every proposed role carries an
                explicit boundary on what it cannot do.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-7 md:mt-auto md:grid-cols-3 md:pt-10">
              {roles.map((r) => (
                <RevealItem key={r.title} className={`${card} flex flex-col bg-white p-6`}>
                  <h3 className="text-[15.5px] font-semibold text-ink">{r.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
                  <p className="mt-3 text-[13px] leading-[1.6] text-ink/45">{r.cannot}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="min-h-[350px]">
            <Photo
              src="/images/organizations-access/roles-sprint-start.webp"
              alt="Sprinter settling into the starting blocks"
              sizes="(min-width: 1024px) 298px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note className="mt-8">
            Effective permissions are always resolved by the server at the moment of each request — a role label on
            screen is never the source of access truth.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
