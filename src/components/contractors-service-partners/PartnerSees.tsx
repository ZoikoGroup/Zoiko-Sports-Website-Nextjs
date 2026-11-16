import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, altBg, line, ruled, sectionPad, wrap } from "./shared";

const scopes = [
  {
    title: "Event & task scope",
    sees: "The specific event, assignment and accountable organization it has been granted.",
    never: "Other events, fixtures or organizations outside its grant.",
  },
  {
    title: "Document & revision",
    sees: "The current instruction version, and a relevant attachment where separately authorized.",
    never: "Procurement, payment or worker-file documents.",
  },
];

export function PartnerSees() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-2.5 lg:grid-cols-[1fr_420px]`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[740px]">What a scoped partner may see — and what it never sees.</SectionTitle>
            <Lead className="mt-4 text-[15.5px]">
              Access is bound to one event, one role and one organization at a time.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-2">
            {scopes.map((s) => (
              <RevealItem
                key={s.title}
                className={`group h-full rounded-2xl border ${line} bg-white px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
              >
                <h3 className="text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{s.sees}</p>
                <Kicker className="mt-4 text-[11.5px] tracking-[0.04em]">Never sees</Kicker>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-muted">{s.never}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="mt-6 min-h-[360px] lg:mt-0">
          <Photo
            src="/images/contractors-service-partners/sees-football-header.webp"
            alt="Footballer leaping to head the ball against an evening sky"
            sizes="(min-width: 1024px) 420px, 95vw"
            className={`h-full w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
