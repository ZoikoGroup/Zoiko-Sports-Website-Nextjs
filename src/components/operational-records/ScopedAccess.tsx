import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

const accessRoles = [
  {
    title: "Record Contributor",
    text: "Enters or imports a source record into the event; cannot approve a decision by editing it.",
  },
  {
    title: "Responsible Owner",
    text: "The organization accountable for a record's current state and any open follow-up.",
  },
  {
    title: "Reviewer",
    text: "Resolves a proposed correction or a source conflict; separate from the person who requested it.",
  },
];

export function ScopedAccess() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_298px] lg:gap-7">
          <div>
            <Reveal>
              <SectionTitle>Shared event, scoped records.</SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                Access is evaluated against the acting organization, the event, and the specific record and action —
                never a blanket view of everything tied to the event.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-7 md:grid-cols-3">
              {accessRoles.map((r) => (
                <RevealItem key={r.title} className={`${card} bg-white p-6`}>
                  <h3 className="text-[15.5px] font-semibold text-ink">{r.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="min-h-[277px]">
            <Photo
              src="/images/operational-records/scope-pitcher.webp"
              alt="Baseball pitcher following through after a throw"
              sizes="(min-width: 1024px) 298px, 95vw"
              className="h-full w-full border border-[#DEDAD0]"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note variant="dashed" className="mt-8">
            Denied example: a club requesting another club&apos;s record list receives &quot;Related record
            unavailable&quot; — never a reason that reveals what exists.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
