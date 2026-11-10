import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, card, cream, dark, pad2, ruled, sectionPad, wrap } from "./shared";

const participants = [
  { title: "Leagues & competition organizers", text: "Coordinate the check register and organizer-side decisions." },
  { title: "Clubs & teams", text: "See and confirm the checks assigned to their own organization." },
  { title: "Venue operators", text: "Maintain venue-owned checks without exposing private organizer records." },
];

const pilotStages = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

export function Participation() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Built around how each organization participates.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {participants.map((p) => (
            <RevealItem key={p.title} className={`${card} ${cream} p-6 sm:p-7`}>
              <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 max-w-[340px] text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className={`mt-10 rounded-2xl ${dark} p-6 sm:p-8`}>
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-yellow">
            Start with one event. Agree the checks before expanding.
          </p>
          <p className="mt-4 max-w-[620px] text-[14px] leading-[1.7] text-white/70">
            Define participating organizations, in-scope checks and sources, approval and duty boundaries, support
            procedures and success measures before live operation.
          </p>
          <ol className="mt-6 grid grid-cols-2 gap-y-5 border-t border-white/15 pt-5 sm:grid-cols-3 lg:grid-cols-5">
            {pilotStages.map((s, i) => (
              <li key={s} className="group">
                <p className="text-[11.5px] text-white/45">{pad2(i + 1)}</p>
                <p className="mt-1 font-heading text-[15px] font-semibold transition-colors duration-300 group-hover:text-brand-yellow">
                  {s}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
