import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const participants = [
  {
    title: "League / competition organizer",
    text: "Authorize changes while preserving the recorded reason and evidence.",
    note: "Decision authority stays with the organizer.",
  },
  {
    title: "Venue operator",
    text: "Request changes driven by on-site conditions without assuming competition authority.",
    note: "A request is not an approval.",
  },
  {
    title: "Club",
    text: "See only the outcomes you are authorized to receive, with a clear acknowledgment expectation.",
    note: "No implied access beyond your scope.",
  },
];

export function Participation() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Built around how each organization participates.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {participants.map((p) => (
            <RevealItem key={p.title} className={`${card} ${cream} p-6 sm:p-7`}>
              <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 max-w-[360px] text-[14.5px] leading-[1.65] text-ink-muted">{p.text}</p>
              <p className="mt-4 text-[13px] text-ink/45">{p.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
