import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SampleTag, SectionTitle, altBg, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const scopes = [
  {
    kicker: "Organizer",
    title: "Riverside League · Competition Operations",
    text: "Acts within assigned organizer and event roles. Can approve the competition schedule and start-time changes; cannot access venue or club private records.",
  },
  {
    kicker: "Venue",
    title: "Northfield Arena · Venue Operations",
    text: "Manages venue-specific checks and exceptions within this event. Cannot decide a competition start time or see another venue’s records.",
  },
  {
    kicker: "Club",
    title: "Cedarfield Athletic Club · Club Operations",
    text: "Receives only the event records shared with this club. Cannot see another club’s private roster or records. (Fictional addition.)",
  },
];

export function ThreeScopes() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One event, three organizations, three different scopes.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Riverside Invitational · Northfield Arena · September 26, 2026. The same event ID is not a universal
            permission grant.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid border-l border-t border-[#DEDAD0] md:grid-cols-3">
          {scopes.map((s) => (
            <RevealItem
              key={s.title}
              className="group relative border-b border-r border-[#DEDAD0] bg-white px-6 py-7 transition-colors duration-300 hover:bg-[#fbfaf6]"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-yellow transition-transform duration-500 group-hover:scale-x-100" />
              <Kicker className="font-semibold">{s.kicker}</Kicker>
              <h3 className="mt-3 text-[16.5px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
