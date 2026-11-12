import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const facts = [
  {
    q: "How much does a pilot cost?",
    a: "Fees, if applicable, are agreed in writing during scoping. No price is published without approval.",
  },
  {
    q: "Which markets are supported?",
    a: "Supported markets are confirmed during review. Your country is not a guarantee of eligibility.",
  },
  {
    q: "How long does a pilot run?",
    a: "Duration is proposed during scoping and fixed in the written agreement — never assumed.",
  },
  {
    q: "What support is included?",
    a: "Support channels, hours and escalation are documented in the pilot terms, not implied by this page.",
  },
  {
    q: "Can we stop without further commitment?",
    a: "Yes. Stopping at the Evaluate stage is a legitimate outcome with no default extension.",
  },
];

export function CostFacts() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What it will cost, where and when.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Fees, markets, duration and support are agreed in writing — not published as general facts.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <RevealItem key={f.q} className="group border-t-2 border-[#24163A] pt-3.5">
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {f.q}
              </h3>
              <p className="mt-1.5 max-w-[290px] text-[14px] leading-[1.6] text-ink-muted">{f.a}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
