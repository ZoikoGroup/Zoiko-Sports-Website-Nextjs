import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Note, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

/** Fictional sample data — the middle card is highlighted in the design. */
const parties = [
  {
    kicker: "Sending organization",
    title: "Riverside League / Competition Operations",
    text: "Drafts and submits the request",
  },
  {
    kicker: "Handover scope",
    title: "Access-plan review · HO-F01",
    text: "Riverside Invitational · Northfield Arena",
    dark: true,
  },
  {
    kicker: "Receiving organization",
    title: "Northfield Arena / Venue Operations",
    text: "Accepts, clarifies or declines",
  },
];

export function TaskScope() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">
            Sharing a task does not give every participant access to every event record.
          </SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {parties.map((p) => (
            <RevealItem
              key={p.kicker}
              className={
                p.dark
                  ? "rounded-2xl bg-[#24163A] p-5 text-white transition-transform duration-300 hover:-translate-y-1"
                  : `${card} ${cream} p-5`
              }
            >
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${
                  p.dark ? "text-brand-yellow" : "text-ink/40"
                }`}
              >
                {p.kicker}
              </p>
              <h3 className={`mt-2 text-[16px] font-semibold ${p.dark ? "text-white" : "text-ink"}`}>{p.title}</h3>
              <p className={`mt-1.5 text-[13.5px] ${p.dark ? "text-white/60" : "text-ink-muted"}`}>{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note variant="cream" className="mt-9">
            A third-party spectator or club role never defaults to receiver or editor. Membership and role are evaluated
            server-side, not only from a visible dropdown.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
