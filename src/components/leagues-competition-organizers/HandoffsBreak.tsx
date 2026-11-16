import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, SectionTitle, altBg, cream, line, ruled, sectionPad, wrap } from "./shared";

const gaps = [
  {
    title: "Schedule drift",
    text: "A revised start time reaches the venue and clubs while downstream plans still reflect the old schedule.",
  },
  {
    title: "Unresolved venue dependency",
    text: "Readiness work stays with the venue. An organizer can see an open check, not certify the venue safe to open.",
  },
  {
    title: "Decision reconstruction",
    text: "After the event, piecing together who requested a change, who approved it and who was told can take longer than the event itself.",
  },
];

const disciplines = [
  { title: "Schedule", text: "Fixture identity, venue assignment and due milestones.", owner: "Organizer owns" },
  { title: "Readiness", text: "Operational checks, owners and due times before kickoff.", owner: "Venue owns" },
  { title: "Exceptions", text: "Event-day issues reported with status and impact.", owner: "Venue reports · Organizer reviews" },
  { title: "Decisions", text: "Schedule changes approved by a named, timestamped human.", owner: "Organizer approves" },
];

export function HandoffsBreak() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Where fixture handoffs break down.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {gaps.map((g, i) => (
            <RevealItem
              key={g.title}
              className={`group h-full rounded-2xl border ${line} bg-white px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
            >
              <p className="text-[12px] font-semibold text-ink/40">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {g.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{g.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <h3 className="mt-10 text-[14px] font-semibold text-ink">One fixture. Four accountable disciplines.</h3>
        </Reveal>

        <RevealGroup className="mt-3 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d) => (
            <RevealItem
              key={d.title}
              className={`h-full border ${line} ${cream} px-5 py-5 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <h4 className="font-heading text-[15px] font-semibold text-ink">{d.title}</h4>
              <p className="mt-1 text-[13.5px] leading-[1.6] text-ink-muted">{d.text}</p>
              <Kicker className="mt-3 text-[11px] tracking-[0.08em]">{d.owner}</Kicker>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
