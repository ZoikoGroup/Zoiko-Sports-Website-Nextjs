import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — the last fact is highlighted in the design. */
const facts = [
  {
    kicker: "Requested",
    title: "Venue Operations requested the start move 12:15 → 12:25 PDT.",
    meta: "Submitted 12:10 PDT",
  },
  { kicker: "Approved", title: "Competition Director approved the change for Riverside League.", meta: "Recorded 12:15 PDT" },
  { kicker: "Applied", title: "Start time updated to 12:25 PDT in the event schedule.", meta: "Effective 12:15 PDT" },
  {
    kicker: "Communicated",
    title: "Update shared with officials, both clubs and the stewarding lead.",
    meta: "Sent 12:16 PDT",
    dark: true,
  },
];

export function RequestDecision() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>A request is not a decision.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Four separate facts carry a schedule change from request to communicated outcome.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <RevealItem
              key={f.kicker}
              className={`group px-6 py-7 transition-colors duration-300 ${
                f.dark ? "bg-[#24163A] text-white" : "bg-white hover:bg-[#fbfaf6]"
              }`}
            >
              <p
                className={`text-[11.5px] font-bold uppercase tracking-[0.12em] ${
                  f.dark ? "text-brand-yellow" : "text-ink/40"
                }`}
              >
                {f.kicker}
              </p>
              <h3 className={`mt-3 text-[15.5px] font-semibold leading-snug ${f.dark ? "text-white" : "text-ink"}`}>
                {f.title}
              </h3>
              <p className={`mt-3 text-[13px] ${f.dark ? "text-white/55" : "text-ink-muted"}`}>{f.meta}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note className="mt-8">
            A venue is not considered to have approved a change merely by requesting it. EX-104 and EX-105 are fictional
            source records.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
