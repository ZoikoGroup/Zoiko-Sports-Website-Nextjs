import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, sectionPad, wrap } from "./shared";

const contrasts = [
  {
    technical: "Row validation",
    authority: "Event decision",
    text: "A technically valid row does not approve a fixture change.",
  },
  {
    technical: "Import completed",
    authority: "Venue authority",
    text: "A completed exchange does not declare a venue ready or safe.",
  },
  {
    technical: "Update delivered",
    authority: "Acknowledgment",
    text: "Delivery does not record a person's acknowledgment.",
  },
];

export function HumanAuthority() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_652px] lg:gap-20`}>
        <Reveal>
          <Kicker>Human authority</Kicker>
          <h2 className="mt-4 max-w-[380px] text-[clamp(1.9rem,3.6vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-ink">
            Technical acceptance is not operational approval.
          </h2>
          <Lead className="mt-5 max-w-[400px]">
            Imported information remains supplied information. It cannot make a venue, competition, or acknowledgment
            decision on behalf of an authorized person.
          </Lead>
        </Reveal>

        <RevealGroup className="grid gap-3">
          {contrasts.map((c) => (
            <RevealItem
              key={c.technical}
              className={`group rounded-xl border ${line} bg-white px-6 py-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)]`}
            >
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <p className="font-heading text-[14.5px] font-semibold text-ink">{c.technical}</p>
                <span aria-label="does not equal" className="text-[15px] font-semibold text-[#9a86c8]">
                  ≠
                </span>
                <p className="font-heading text-[14.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {c.authority}
                </p>
              </div>
              <p className="mt-3.5 text-[13px] leading-[1.6] text-ink-muted">{c.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
