import { Reveal } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, line, ruled, sectionPad, wrap } from "./shared";

const faqs = [
  {
    q: "Who can propose a grant?",
    a: "Only an authorized sponsor within the organizer or venue — a partner cannot invite itself.",
  },
  {
    q: "What does the invitation show?",
    a: "Event, sponsor, partner organization, permitted role, responsibilities and expiry.",
  },
  {
    q: "What does accepting confirm?",
    a: "Participation only — never task completion, approval or a commercial agreement.",
  },
  { q: "What ends access?", a: "Expiry, revocation, or the end of the agreed event scope." },
];

export function ControlledInvitation() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[760px]">A controlled invitation, not a self-service sign-up.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">A partner cannot invite itself into an event.</Lead>
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
      </div>
    </section>
  );
}
