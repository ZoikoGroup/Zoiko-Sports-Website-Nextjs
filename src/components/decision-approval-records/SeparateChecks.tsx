import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, ruled, card, pad2, sectionPad, wrap } from "./shared";

const checks = [
  {
    title: "Proposed ≠ Authorized",
    text: "A 12:10 PDT venue request to delay entry is a proposal. Only the 12:15 PDT Competition Director decision authorizes it.",
  },
  {
    title: "Authorized ≠ Applied",
    text: "An approved decision and a confirmed schedule update are recorded and verified independently of each other.",
  },
];

export function SeparateChecks() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5`}>
        <div className="flex flex-col">
          <Reveal>
            <SectionTitle className="max-w-[740px]">Three separate checks before everyone acts on the same plan.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Each distinction avoids a specific, avoidable ambiguity during event-day changes.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-2.5 md:mt-auto md:grid-cols-2 md:pt-10">
            {checks.map((c, i) => (
              <RevealItem key={c.title} className={`${card} bg-white p-6 sm:p-7`}>
                <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
                <h3 className="mt-3 text-[16px] font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 max-w-[340px] text-[14px] leading-[1.65] text-ink-muted">{c.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[300px]">
          <Photo
            src="/images/decision-approval-records/checks-surfer.webp"
            alt="Surfer carving off the lip of a wave"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
