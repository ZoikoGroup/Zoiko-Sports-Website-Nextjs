import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { divider, Lead, sectionPad, SectionTitle, wrap } from "./shared";

const questions = [
  {
    q: "Which markets are supported?",
    a: "Supported markets are confirmed during a written pilot scope — your country is not a guarantee of eligibility.",
  },
  {
    q: "What formats or providers are compatible?",
    a: "No named provider or file format is verified yet. Any protocol pattern is a hypothesis until it is tested and supported in writing.",
  },
  {
    q: "What proof is available today?",
    a: "Only source-safe, dated and approved examples are shown. No customer logo or unsupported metric appears on this page.",
  },
  {
    q: "What happens if evidence expires?",
    a: "A claim with expired evidence is withdrawn along with its links and references — never left live as a stale promise.",
  },
];

export function AvailabilityProof() {
  return (
    <section className={`bg-white ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[760px]">
          <SectionTitle>Availability, support and proof — only with a signed owner.</SectionTitle>
          <Lead className="mt-3">
            Markets, onboarding, fees and evidence require written pilot terms. None of the below is a commitment.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {questions.map((x) => (
            <RevealItem key={x.q} className="group border-t-2 border-ink pt-5">
              <h3 className="font-heading text-[14.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {x.q}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{x.a}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
