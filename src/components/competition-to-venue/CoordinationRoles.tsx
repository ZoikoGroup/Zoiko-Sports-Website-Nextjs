import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, card, sectionPad, wrap } from "./shared";

const participants = [
  {
    title: "Leagues & organizers",
    text: "Coordinate the fixture and hold approval authority.",
    prompt: "“Which fixture decisions must be communicated?”",
  },
  {
    title: "Venue operators",
    text: "Align organizer timings with venue-owned operating work.",
    prompt: "“Which preparations and exceptions depend on the schedule?”",
  },
  {
    title: "Clubs & teams",
    text: "Receive and acknowledge relevant updates.",
    prompt: "“Which updates do our team leads need to acknowledge?”",
  },
];

export function CoordinationRoles() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Find your part in the coordination.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {participants.map((p) => (
            <RevealItem key={p.title} className={`${card} bg-white p-6 sm:p-7`}>
              <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 max-w-[360px] text-[14.5px] leading-[1.65] text-ink-muted">{p.text}</p>
              <p className="mt-3 max-w-[360px] text-[13px] italic leading-[1.6] text-ink/40">Bring to pilot: {p.prompt}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
