import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const facts = [
  {
    label: "Fixture start",
    value: "12:15 PDT → 12:25 PDT",
    note: "Changed by the Competition Director after a venue-reported delay.",
  },
  {
    label: "Venue constraint",
    value: "Entry backlog (EX-105)",
    note: "Reported by Venue Operations; the organizer reviews it, but does not resolve it directly.",
  },
  {
    label: "Club notice",
    value: "Delivered 12:16 PDT",
    note: "Clubs are notified of the approved change, not the raw venue exception.",
  },
];

export function ScheduleChange() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">
            A schedule change carries its venue constraint and club notice with it.
          </SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            The organizer&apos;s schedule, the venue&apos;s dependency and the club&apos;s notice are kept as separate,
            linked facts — not merged into one line.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className={`mt-9 overflow-hidden rounded-2xl border ${line} ${cream}`}>
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`grid gap-1.5 px-6 py-5 transition-colors duration-200 hover:bg-[#f0eee6] md:grid-cols-[180px_390px_1fr] md:items-center md:gap-4 ${i > 0 ? "border-t border-[#e7e4da]" : ""}`}
              >
                <dt className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-ink/40">{f.label}</dt>
                <dd className="font-heading text-[15px] font-semibold text-ink">{f.value}</dd>
                <dd className="text-[13.5px] text-ink-muted">{f.note}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <Footnote className="mt-6">
            A venue-reported dependency is never silently applied as an organizer schedule change.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
