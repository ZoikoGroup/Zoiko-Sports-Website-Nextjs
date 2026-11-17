import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, cream, Kicker, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const lanes = [
  {
    label: "Request",
    text: "Venue Operations or an official can request a review — this does not change the schedule.",
  },
  {
    label: "Approve",
    text: "Only the Competition Director’s organizer role can approve a competition schedule change.",
  },
  {
    label: "Acknowledge",
    text: "An official or staff member confirms they received and understood a specific instruction revision.",
  },
  {
    label: "Act",
    text: "Authorized duty holders keep real-world sporting, safety, security and medical responsibility.",
  },
];

export function SeparateLanes() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">Request, approve, acknowledge and act stay in separate lanes.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {lanes.map((l) => (
            <RevealItem
              key={l.label}
              className={`h-full border ${line} ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <Kicker className="text-[11px]">{l.label}</Kicker>
              <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">{l.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
