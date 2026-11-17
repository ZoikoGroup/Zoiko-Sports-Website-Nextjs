import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, dark, Kicker, Lead, line, ruled, SampleTag, sectionPad, SectionTitle, wrap } from "./shared";

const views = [
  {
    label: "Organizer · Riverside League",
    title: "The full schedule and approval authority.",
    text: "Publishes and approves the competition schedule the other organizations plan against.",
  },
  {
    label: "Venue · Northfield Arena",
    title: "Its own readiness checks and exceptions.",
    text: "Records check status and raises event-day exceptions within its own scope.",
  },
  {
    label: "Club · Participating Team",
    title: "Updates and decisions addressed to it.",
    text: "Acknowledges venue- and schedule-related updates affecting its own participation.",
  },
];

export function OneEvent() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4 max-w-[700px]">One event. Clear responsibilities across organizations.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Riverside Invitational · Northfield Arena · September 26, 2026. The same event, with a different scoped view
            for each organization.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {views.map((v) => (
            <RevealItem
              key={v.label}
              className={`group h-full border ${line} bg-white px-6 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <Kicker className="text-[11px]">{v.label}</Kicker>
              <h3 className="mt-3 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {v.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{v.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <p className={`mt-8 rounded-2xl ${dark} px-6 py-5 text-[13.5px] leading-[1.65] text-white/75`}>
            Shared operating context does not mean unrestricted access or shared decision authority. People and
            organizations keep the responsibilities assigned to them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
