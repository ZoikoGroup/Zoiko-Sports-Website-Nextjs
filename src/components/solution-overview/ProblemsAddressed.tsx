import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, cream, sectionPad, wrap } from "./shared";

const problems = [
  {
    title: "Schedule drift",
    text: "Fixture changes don’t reliably reach every venue and club, so venue teams prepare against an outdated plan.",
    remedy: "Keep one agreed schedule context for the organizations that depend on it.",
  },
  {
    title: "Unresolved readiness work",
    text: "Readiness checks live in spreadsheets and messages, so nobody can see what is actually still open.",
    remedy: "Track checks, owners and due times in one place.",
  },
  {
    title: "Unclear event-day response",
    text: "An issue surfaces but ownership and the decision that follows stay informal.",
    remedy: "Separate the issue, the assigned owner and the authorized decision.",
  },
];

export function ProblemsAddressed() {
  return (
    <section id="frictions" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-1 lg:grid-cols-[1fr_306px]`}>
        <div className="lg:pt-6">
          <Reveal>
            <SectionTitle>What problems does Zoiko Sports address?</SectionTitle>
            <Lead className="mt-4 max-w-[720px]">
              Zoiko Sports focuses first on the coordination gaps between competition schedules, venue preparations and
              the organizations responsible for delivery. The aim is to connect authorized operational context and make
              responsibilities and recorded decisions easier to follow.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-1 md:grid-cols-3">
            {problems.map((p) => (
              <RevealItem
                key={p.title}
                className={`group flex h-full flex-col border border-[#DEDAD0] ${cream} px-6 py-7 transition-colors duration-300 hover:border-brand-yellow/70`}
              >
                <h3 className="text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-ink-muted">{p.text}</p>
                <div className="mt-4 border-t border-[#e2dfd5] pt-3">
                  <Kicker className="text-[10.5px] tracking-[0.08em]">Remedy</Kicker>
                  <p className="mt-1 text-[13.5px] font-semibold leading-[1.55] text-ink">{p.remedy}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="hidden lg:block">
          <Photo
            src="/images/solution-overview/problems-baseball-pitcher.webp"
            alt="Baseball pitcher stretching both arms overhead in his wind-up"
            sizes="306px"
            className="h-full min-h-[405px] w-full rounded-none! border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
