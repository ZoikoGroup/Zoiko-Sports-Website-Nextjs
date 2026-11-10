import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, altBg, card, cream, dark, pad2, ruled, sectionPad, wrap } from "./shared";

const participants = [
  {
    title: "Venue operators",
    text: "Maintain venue-owned checks and request timing impacts without exposing private organizer records.",
  },
  { title: "Leagues & competition organizers", text: "See venue dependencies and retain fixture decision authority." },
  { title: "Clubs & teams", text: "Receive and acknowledge relevant venue-related updates." },
];

const pilotStages = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

export function Participation() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Built around how each organization participates.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {participants.map((p) => (
            <RevealItem key={p.title} className={`${card} ${cream} p-6 sm:p-7`}>
              <h3 className="text-[17px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 max-w-[360px] text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className={`mt-10 rounded-2xl ${dark} p-6 sm:p-8`}>
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-yellow">
            Start with one event and one venue coordination problem
          </p>
          <p className="mt-4 max-w-[620px] text-[14px] leading-[1.7] text-white/70">
            Agree the event, participating organizations, owners, permissions, connectivity assumptions and evidence
            needed to evaluate the pilot before it begins.
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
