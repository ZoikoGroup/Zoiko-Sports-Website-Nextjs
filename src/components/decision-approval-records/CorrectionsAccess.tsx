import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

const controls = [
  { title: "History & corrections", text: "A later correction is recorded alongside the original, never written over it." },
  { title: "Permissions model", text: "View, request, approve and export rights are scoped by organization and event." },
  { title: "Record-level access", text: "Shared event participation does not grant universal access to every record." },
  { title: "Data rights & export", text: "Retention, export and access follow the agreed pilot or customer terms." },
];

export function CorrectionsAccess() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_380px] lg:gap-14`}>
        <div>
          <Reveal>
            <SectionTitle>Corrections and access stay accountable.</SectionTitle>
            <Lead className="mt-4 max-w-[800px] text-[15.5px]">
              A platform spanning organizations must be explicit about what can change, who can see it, and what happens
              when something needs correcting.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((c) => (
              <RevealItem
                key={c.title}
                className="border-l-2 border-transparent transition-all duration-300 hover:border-brand-yellow hover:pl-3"
              >
                <h3 className="text-[15.5px] font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 max-w-[260px] text-[14px] leading-[1.6] text-ink-muted">{c.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2}>
          <Photo
            src="/images/decision-approval-records/corrections-tennis-backhand.webp"
            alt="Tennis player hitting a two-handed backhand"
            sizes="(min-width: 1024px) 380px, 95vw"
            className="aspect-[380/293] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
