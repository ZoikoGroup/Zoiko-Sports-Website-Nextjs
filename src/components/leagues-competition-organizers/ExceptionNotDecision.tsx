import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const record = [
  { label: "Requested by", value: "Venue Operations · Northfield Arena · 12:10 PDT" },
  { label: "Approved by", value: "Competition Director · Riverside League" },
  { label: "Approved at", value: "12:15 PDT" },
  { label: "Change", value: "Start time 12:15 → 12:25 PDT" },
  { label: "Reason", value: "Entry backlog (EX-105), following EX-104" },
  { label: "Source refs", value: "EX-104, EX-105" },
];

export function ExceptionNotDecision() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>An exception is not a decision.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Who has the authority to move the start time — and the recorded reason why.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[720px_1fr]">
          <Reveal delay={0.1}>
            <dl className={`overflow-hidden rounded-2xl border ${line} ${cream}`}>
              {record.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex flex-col gap-1 px-6 py-4 transition-colors duration-200 hover:bg-[#f0eee6] sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${i > 0 ? "border-t border-[#e7e4da]" : ""}`}
                >
                  <dt className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-ink/40">{r.label}</dt>
                  <dd className="font-heading text-[14.5px] font-semibold text-ink sm:text-right">{r.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="min-h-[280px]">
            <Photo
              src="/images/leagues-competition-organizers/exception-football-strike.webp"
              alt="Footballer in a training top striking the ball on a practice pitch"
              sizes="(min-width: 1024px) 540px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Footnote className="mt-6">
            Request, review, competition decision and notification are kept as four separate, timestamped steps — never
            collapsed into one.
          </Footnote>
        </Reveal>
      </div>
    </section>
  );
}
