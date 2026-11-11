import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const participants = [
  {
    title: "Leagues & competition organizers",
    text: "Coordinate dependencies across the venue and the competition plan.",
    note: "Decision authority stays with the organizer.",
  },
  {
    title: "Clubs & teams",
    text: "Know assigned preparation and update obligations for your own organization.",
    note: "No implied access beyond your scope.",
  },
  {
    title: "Venue operators",
    text: "Assign and evidence agreed readiness checks in context of the event schedule.",
    note: "Organizer records stay private unless shared.",
  },
];

export function Participation() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Built for how each organization participates.</SectionTitle>
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
