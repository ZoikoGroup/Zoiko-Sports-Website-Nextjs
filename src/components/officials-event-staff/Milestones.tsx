import { Reveal } from "@/components/ui/Reveal";
import { altBg, cream, Footnote, Kicker, Lead, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const milestones = [
  {
    name: "Officials confirmation",
    owner: "Riverside League · Officials Coordinator",
    when: "Due Sep 25, 2026",
    context: "Confirms which officials are available for the fixture — not a credential or appointment record.",
  },
  {
    name: "Officials briefing",
    owner: "Riverside League",
    when: "10:15 PDT · Sep 26, 2026",
    context: "Pre-event briefing milestone for officials and event-day staff.",
  },
  {
    name: "Event start (scheduled)",
    owner: "Riverside League",
    when: "12:15 PDT · Sep 26, 2026",
    context: "Organizer-set kickoff, later revised in the event-day example below.",
  },
];

const cols = "md:grid-cols-[1fr_1fr_0.8fr_1.2fr]";

export function Milestones() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[780px]">Officials-confirmation and briefing milestones, with an owner.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A milestone names an organization and a time — it is not a roster, an appointment, or an attendance claim.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-hidden rounded-2xl border ${line} bg-white`}>
            <div className={`hidden gap-4 border-b ${line} ${cream} px-4 py-4 md:grid ${cols}`}>
              {["Milestone", "Owner organization", "When", "Context"].map((h) => (
                <Kicker key={h} className="text-[11px]">
                  {h}
                </Kicker>
              ))}
            </div>
            {milestones.map((m, i) => (
              <div
                key={m.name}
                className={`grid gap-1.5 px-4 py-6 text-[13.5px] transition-colors duration-200 hover:bg-[#fbfaf6] md:items-center md:gap-4 ${cols} ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
              >
                <p className="font-heading text-[14.5px] font-semibold text-ink">{m.name}</p>
                <p className="text-ink-muted">{m.owner}</p>
                <p className="font-heading font-semibold text-ink">{m.when}</p>
                <p className="leading-[1.6] text-ink-muted">{m.context}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Footnote>Riverside League and Northfield Arena are fictional specimen organizations used to illustrate the model.</Footnote>
        </Reveal>
      </div>
    </section>
  );
}
