import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, SectionTitle, altBg, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const outcomes = [
  {
    kicker: "Review sign-off",
    title: "Review in progress — 1 open follow-up",
    text: "Attested by the Riverside League Competition Director, role-at-time verified. Reopening requires the same authority.",
  },
  {
    kicker: "Remaining follow-up",
    title: "1 open item · FU-031",
    text: "Replace Turnstile 4 reader, owned by Northfield Arena Venue Operations — remains open independent of sign-off.",
  },
];

const evidence = ["EX-104 record", "EX-105 record", "DEC-021 decision", "Acknowledgment log", "FU-031 task"];

export function ConcludeReview() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">Concluding a review is not the same as closing every task.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 md:grid-cols-2">
          {outcomes.map((o) => (
            <RevealItem
              key={o.kicker}
              className="border border-[#DEDAD0] bg-white px-6 py-7 transition-colors duration-300 hover:border-brand-yellow"
            >
              <Kicker className="font-semibold">{o.kicker}</Kicker>
              <h3 className="mt-3 text-[16px] font-semibold text-ink">{o.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{o.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-8 rounded-2xl border border-[#DEDAD0] bg-white p-6 sm:p-7">
          <h3 className="text-[14px] font-semibold text-ink">Evidence available in this scope</h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {evidence.map((e) => (
              <li
                key={e}
                className="cursor-default rounded-full border border-[#DEDAD0] bg-white px-3.5 py-2 text-[13px] text-ink/80 transition-colors duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink"
              >
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12.5px] text-ink/45">
            This view reflects records available within the selected review scope. It may not include all event
            information.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
