import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, sectionPad, wrap } from "./shared";

const audiences = [
  { title: "Leagues & competition organizers", text: "Coordinate the fixture and approval authority." },
  { title: "Clubs", text: "Receive and acknowledge relevant competition updates." },
  { title: "Venue operators", text: "Align organizer timings with venue-owned operating work." },
];

const pilotStages = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

export function Participation() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Built around how each organization participates.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-3 md:grid-cols-3">
          {audiences.map((a) => (
            <RevealItem
              key={a.title}
              className="rounded-2xl border border-[#DEDAD0] bg-[#f6f4ee] p-6 pb-9 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:bg-white sm:p-7 sm:pb-10"
            >
              <h3 className="text-[17px] font-semibold text-ink">{a.title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-muted">{a.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 rounded-2xl bg-[#24163A] p-7 text-white sm:p-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-yellow">
            Start with one competition event or fixture block
          </p>
          <p className="mt-4 max-w-[640px] text-[14.5px] leading-[1.75] text-white/75">
            Agree the participating organizer, clubs and venue, the schedule or change workflow to assess, responsible
            roles, operating constraints and success measures before the pilot begins.
          </p>
          <ol className="mt-5 grid max-w-[780px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-5">
            {pilotStages.map((s, i) => (
              <li key={s} className="group relative border-t border-white/15 pt-4">
                {/* Yellow fill that sweeps across the rule on hover */}
                <span className="absolute -top-px left-0 h-px w-0 bg-brand-yellow transition-all duration-500 group-hover:w-full" />
                <p className="text-[11.5px] text-white/50">{String(i + 1).padStart(2, "0")}</p>
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
