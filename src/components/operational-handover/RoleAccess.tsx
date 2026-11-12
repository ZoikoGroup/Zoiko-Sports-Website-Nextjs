import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SectionTitle, card, cream, pad2, sectionPad, wrap } from "./shared";

const roles = [
  { title: "Organizer", text: "Sees requests it sent and the status of its own events." },
  { title: "Venue", text: "Sees handovers addressed to its organization and event scope only." },
  { title: "Club", text: "Sees only the approved updates relevant to its own participation." },
];

const boundaries = [
  { title: "Current systems", text: "Source system type and data owner, where connected." },
  { title: "Interruptions", text: "Offline and unknown-status handling, validated per pilot." },
  { title: "Data rights", text: "Retention and export rights controlled by the data owner." },
];

export function RoleAccess() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_449px] lg:gap-16">
          <Reveal>
            <SectionTitle className="max-w-[760px]">
              The person requesting and the person receiving see only what their organization and role allow.
            </SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Deny by default. Access checks apply to direct API, search, export, cache and counts — on every server
              operation.
            </Lead>
          </Reveal>

          <Reveal delay={0.2}>
            <Photo
              src="/images/operational-handover/access-high-jump.webp"
              alt="High jumper arching backwards over the bar"
              sizes="(min-width: 1024px) 449px, 95vw"
              className="aspect-[449/230] w-full"
            />
          </Reveal>
        </div>

        <RevealGroup className="mt-4 grid md:grid-cols-3">
          {roles.map((r) => (
            <RevealItem key={r.title} className={`${card} ${cream} p-6`}>
              <h3 className="text-[15.5px] font-semibold text-ink">{r.title}</h3>
              <p className="mt-2 max-w-[340px] text-[14px] leading-[1.6] text-ink-muted">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-11 grid gap-y-6 border-t-2 border-[#24163A] pt-4 md:grid-cols-3">
          {boundaries.map((b, i) => (
            <RevealItem key={b.title} className="group">
              <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-2 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {b.title}
              </h3>
              <p className="mt-1 text-[14px] text-ink-muted">{b.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote className="mt-10">
          No partner logos, &quot;real-time&quot; or 100% sync claims are made absent validated integration evidence.
        </Footnote>
      </div>
    </section>
  );
}
