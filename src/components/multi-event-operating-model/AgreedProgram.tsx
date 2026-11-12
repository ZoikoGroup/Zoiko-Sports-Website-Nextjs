import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, Photo, SampleTag, SectionTitle, sectionPad, wrap } from "./shared";

const pillTone = {
  Included: "bg-[#dcecd8] text-[#2f5a2a]",
  Proposed: "bg-[#fdeeb0] text-[#6b5200]",
  Excluded: "bg-[#efede6] text-ink/70",
};

/** Fictional sample data — illustrative only. */
const fixtures: { name: string; state: keyof typeof pillTone; text: string }[] = [
  { name: "Riverside Invitational", state: "Included", text: "Northfield Arena · Riverside League confirmed." },
  { name: "Example Fixture 2 — not an actual event", state: "Proposed", text: "Venue and organizer not yet confirmed." },
  {
    name: "Example Fixture 3 — not an actual event",
    state: "Excluded",
    text: "Awaiting organizer confirmation before inclusion.",
  },
];

export function AgreedProgram() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4 max-w-[640px]">One agreed program. Distinct event responsibilities.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Adding an event to a program proposes it for coordination. It does not transfer ownership, access or
            approval authority.
          </Lead>
        </Reveal>

        <div className="mt-9 grid items-start gap-10 lg:grid-cols-[517px_1fr]">
          <Reveal delay={0.1}>
            <Photo
              src="/images/multi-event-operating-model/program-rugby-maul.webp"
              alt="Two rugby players locked together in a tackle"
              sizes="(min-width: 1024px) 517px, 95vw"
              className="aspect-[517/374] w-full border border-[#DEDAD0]"
            />
          </Reveal>

          <RevealGroup className="overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
            {fixtures.map((f, i) => (
              <RevealItem
                key={f.name}
                className={`grid gap-2 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] sm:grid-cols-[1fr_auto] sm:items-center sm:gap-x-5 xl:grid-cols-[1fr_auto_220px] ${
                  i > 0 ? "border-t border-[#ebe9df]" : ""
                }`}
              >
                <p className="font-heading text-[15px] font-semibold text-ink">{f.name}</p>
                <span
                  className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] ${pillTone[f.state]}`}
                >
                  {f.state}
                </span>
                <p className="text-[13.5px] leading-[1.5] text-ink-muted sm:col-span-2 xl:col-span-1">{f.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Footnote>
          Shared program fields (scope, name, window) differ from per-event facts (venue, owner, readiness) — reassessed
          independently for each fixture.
        </Footnote>
      </div>
    </section>
  );
}
