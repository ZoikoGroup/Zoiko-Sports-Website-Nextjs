import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, altBg, cream, line, ruled, sectionPad, wrap } from "./shared";

const requests = [
  {
    label: "Venue requests",
    text: "Delay the start by 15 minutes to clear the entry backlog (EX-105).",
    source: "Northfield Arena · 12:10 PDT",
  },
  {
    label: "Organizer holds",
    text: "Keep the current window pending the steward-count approval due at 10:00 PDT.",
    source: "Riverside League · 12:12 PDT",
  },
];

export function TwoRequests() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[780px]">Two organizations, two requests. Neither wins automatically.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Competing updates are shown side by side as facts, pending the authorized decision maker.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-2">
          {requests.map((r) => (
            <RevealItem
              key={r.label}
              className={`h-full rounded-2xl border ${line} ${cream} px-6 pb-8 pt-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <Kicker className="text-[11px]">{r.label}</Kicker>
              <p className="mt-1.5 font-heading text-[15.5px] font-semibold leading-[1.5] text-ink">{r.text}</p>
              <p className="mt-2 text-[13px] text-ink-muted">{r.source}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <p className={`mt-7 rounded-2xl border ${line} bg-white px-6 py-5 text-[13.5px] text-ink-muted`}>
            Neither request applies on its own. The Competition Director&apos;s 12:15 PDT decision is the only record that
            changes the schedule.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
