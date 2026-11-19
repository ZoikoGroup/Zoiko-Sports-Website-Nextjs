import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, Kicker, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const audiences = [
  {
    title: "Leagues & competition organizers",
    text: "Scheduling and approvals span multiple venues and clubs with no single source of truth.",
    example: "A multi-day league weekend across several venues.",
  },
  {
    title: "Clubs & teams",
    text: "Confirming handoffs and readiness with host venues and officials is manual and easy to miss.",
    example: "A single away fixture or showcase event.",
  },
];

export function WhoShouldStart() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_405px] lg:gap-3`}>
        <div className="flex flex-col justify-center">
          <Reveal className="lg:pr-10">
            <SectionTitle>Who should start this conversation?</SectionTitle>
            <Lead className="mt-4 max-w-[720px] text-[15.5px]">
              The initial focus is the organizations that actually coordinate an event — not a universal claim for
              every sport.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-9 grid gap-3 md:grid-cols-2">
            {audiences.map((a) => (
              <RevealItem
                key={a.title}
                className={`group h-full rounded-md border ${line} ${cream} px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
              >
                <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink-muted">{a.text}</p>
                <div className={`mt-5 border-t ${line} pt-4`}>
                  <Kicker className="text-[10.5px]!">First event example</Kicker>
                  <p className="mt-1.5 text-[13px] font-medium text-ink">{a.example}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15}>
          <Photo
            src="/images/discuss-your-sport/audience-baseball-swing.webp"
            alt="Baseball batter in a pinstripe uniform following through on a swing"
            sizes="(min-width: 1024px) 405px, 95vw"
            className="aspect-[405/340] w-full rounded-md!"
          />
        </Reveal>
      </div>
    </section>
  );
}
