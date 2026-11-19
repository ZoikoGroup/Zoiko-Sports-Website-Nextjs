import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const options = [
  {
    title: "Manual exchange",
    text: "Share schedules, venue requirements or exceptions directly during scoping.",
    status: "Available by default",
  },
  {
    title: "Approved import",
    text: "A defined, reviewed file or feed format for existing systems.",
    status: "Assessed per pilot",
  },
  {
    title: "Validated integration",
    text: "A built, security-reviewed connector to a named system.",
    status: "Not yet available",
  },
];

export function ExistingInformation() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Work with the information you already have.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            No connector, feed or vendor relationship is assumed. Data exchange is assessed during scoping.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-0.5 md:grid-cols-3">
          {options.map((o) => (
            <RevealItem
              key={o.title}
              className={`group flex h-full flex-col rounded-2xl border ${line} bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
            >
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {o.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink-muted">{o.text}</p>
              <Kicker className="mt-auto pt-4 text-[10.5px]!">{o.status}</Kicker>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
