import { Reveal } from "@/components/ui/Reveal";
import { companyFacts } from "@/data/about";
import { SectionTitle, altBg, sectionPad, wrap } from "./shared";

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
