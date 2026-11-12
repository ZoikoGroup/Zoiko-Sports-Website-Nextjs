import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const reviews = [
  {
    name: "Riverside Invitational",
    state: "Accepted with 1 exclusion",
    text: "Turnstile vendor check marked not applicable for this venue.",
  },
  {
    name: "Example Fixture 2 — not an actual event",
    state: "Not yet reviewed",
    text: "Pattern has not been applied to this fixture.",
  },
];

export function ReuseWorkflow() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">Reuse a proposed workflow, not a completed check or previous approval.</SectionTitle>
          <Lead className="mt-4 max-w-[700px] text-[15.5px]">
            A versioned pattern can be proposed for an event. What it looked like for one fixture must still be confirmed
            for the next.
          </Lead>
        </Reveal>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-[358px_1fr] lg:gap-5">
          <Reveal delay={0.1}>
            <Photo
              src="/images/multi-event-operating-model/reuse-speed-skating.webp"
              alt="Short-track speed skaters leaning into a corner"
              sizes="(min-width: 1024px) 358px, 95vw"
              className="aspect-[358/122] w-full"
            />
          </Reveal>

          <RevealGroup className="grid gap-1 lg:mr-5">
            {reviews.map((r) => (
              <RevealItem
                key={r.name}
                className="grid gap-1.5 border border-[#DEDAD0] px-6 py-4 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[1fr_auto_minmax(0,390px)] md:items-center md:gap-5"
              >
                <p className="font-heading text-[14.5px] font-semibold text-ink">{r.name}</p>
                <p className="text-[13px] font-semibold text-ink-muted">{r.state}</p>
                <p className="text-[13.5px] text-ink-muted">{r.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Footnote>
          Every new check initially unresolved; no status, approval or safety sign-off carries over from the pattern or
          from another event.
        </Footnote>
      </div>
    </section>
  );
}
