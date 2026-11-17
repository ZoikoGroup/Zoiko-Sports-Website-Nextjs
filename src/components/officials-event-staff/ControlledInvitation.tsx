import { Reveal } from "@/components/ui/Reveal";
import { Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const faqs = [
  {
    q: "Who can invite?",
    a: "Only the organizer or venue that owns the event — an official or staff member cannot add themselves.",
  },
  {
    q: "What does accepting confirm?",
    a: "Participation in that one event only — never a credential, appointment or employment record.",
  },
  {
    q: "What ends access?",
    a: "Expiry, revocation, or the end of the agreed event — never carried into a future fixture automatically.",
  },
  { q: "What happens on reassignment?", a: "Access is rechecked, not just granted once and left in place." },
];

const stages = ["Invited", "Accepted / Declined", "Active", "Expired / Revoked"];

export function ControlledInvitation() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">A controlled invitation, not a self-service sign-up.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">An official or staff member cannot add themselves to an event.</Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className={`mt-9 overflow-hidden rounded-2xl border ${line} bg-white`}>
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className={`grid gap-1.5 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[425px_1fr] md:gap-4 ${i > 0 ? "border-t border-[#ebe9df]" : ""}`}
              >
                <dt className="text-[13px] font-semibold text-ink/45">{f.q}</dt>
                <dd className="font-heading text-[15px] font-medium text-ink">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <ol className="mt-8 grid grid-cols-2 gap-y-6 border-t-2 border-brand-yellow pt-5 sm:grid-cols-4">
            {stages.map((s, i) => (
              <li key={s}>
                <p className="text-[12px] text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-heading text-[16px] font-semibold text-ink">{s}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
