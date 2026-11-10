import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, altBg, sectionPad, wrap } from "./shared";

const companyFacts = [
  { q: "What is the company called?", a: "Zoiko Sports is the public-facing masterbrand." },
  { q: "Who owns and operates Zoiko Sports?", a: "Zoiko Tech Inc., a Zoiko Group company." },
  { q: "Where is Zoiko Sports headquartered?", a: "Sacramento, California, United States." },
  {
    q: "Where is the European headquarters?",
    a: "167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom.",
  },
  {
    q: "What category is Zoiko Sports in?",
    a: "Global sports technology, with an initial focus on sports operations software.",
  },
  {
    q: "Is Zoiko Sports designed globally?",
    a: "Yes — for multi-sport, multi-organization and multi-jurisdiction use, subject to market readiness.",
  },
  {
    q: "What is the current commercial entry point?",
    a: "A scoped pilot around one event or fixture block, typically an organizer and venue.",
  },
];

export function CompanyInfo() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Company information</SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
            {companyFacts.map((f, i) => (
              <div
                key={f.q}
                className={`grid gap-1.5 px-6 py-4 transition-colors duration-200 hover:bg-[#faf9f5] md:grid-cols-[400px_1fr] md:gap-6 md:py-5 ${
                  i > 0 ? "border-t border-[#ebe9df]" : ""
                }`}
              >
                <dt className="text-[13px] font-medium text-ink/45">{f.q}</dt>
                <dd className="font-heading text-[15px] font-medium text-ink">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
