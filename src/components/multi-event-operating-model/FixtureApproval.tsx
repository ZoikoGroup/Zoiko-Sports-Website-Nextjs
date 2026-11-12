import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, sectionPad, wrap } from "./shared";

/** Fictional sample data — the last fact is highlighted in the design. */
const facts = [
  { kicker: "Requested", text: "Riverside League proposed adding Example Fixture 2 to the program." },
  { kicker: "Approved", text: "Pending — a program coordinator cannot approve on the venue’s behalf." },
  {
    kicker: "Applied",
    text: "Not yet. Example Fixture 2 stays proposed until its own venue and organizer confirm.",
  },
  {
    kicker: "Communicated",
    text: "No update sent. Nothing is shared with other organizations until the event is confirmed.",
    dark: true,
  },
];

export function FixtureApproval() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">An approval recorded for one fixture never authorizes a decision on another.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Proposing to add a fixture to a program still requires its own event-level confirmation.
          </Lead>
        </Reveal>

        <RevealGroup className={`mt-9 grid ${cream} sm:grid-cols-2 lg:grid-cols-4`}>
          {facts.map((f) => (
            <RevealItem
              key={f.kicker}
              className={`px-6 py-7 transition-colors duration-300 ${
                f.dark ? "bg-[#24163A] text-white" : "hover:bg-[#efede6]"
              }`}
            >
              <p
                className={`text-[11.5px] font-bold uppercase tracking-[0.12em] ${
                  f.dark ? "text-brand-yellow" : "text-ink/40"
                }`}
              >
                {f.kicker}
              </p>
              <h3
                className={`mt-3 max-w-[260px] text-[15px] font-medium leading-[1.55] ${f.dark ? "text-white" : "text-ink"}`}
              >
                {f.text}
              </h3>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
