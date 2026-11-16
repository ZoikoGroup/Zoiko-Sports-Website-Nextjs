import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Photo, SectionTitle, cream, line, sectionPad, wrap } from "./shared";

const problems = [
  {
    title: "Fragmented task information",
    text: "A service partner's task context often lives in separate emails, spreadsheets and calls instead of one accountable source.",
  },
  {
    title: "Unclear accountable organization",
    text: "A contractor's response can be mistaken for the organizer or venue's own decision unless authority is explicitly separated.",
  },
];

export function WhyHard() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-0.5 lg:grid-cols-[1fr_426px]`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-10">
            <SectionTitle className="max-w-[700px]">Why cross-organization coordination gets hard.</SectionTitle>
          </Reveal>

          <RevealGroup className="mt-9 grid flex-1 gap-0.5 md:grid-cols-2">
            {problems.map((p, i) => (
              <RevealItem
                key={p.title}
                className={`group h-full rounded-2xl border ${line} ${cream} px-7 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <p className="text-[12px] font-semibold text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="mt-6 min-h-[306px] lg:mt-0">
          <Photo
            src="/images/contractors-service-partners/hard-hammer-throw.webp"
            alt="Hammer thrower straining as he winds up inside the throwing cage"
            sizes="(min-width: 1024px) 426px, 95vw"
            className={`h-full w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
