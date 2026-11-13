import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, cream, pad2, ruled, sectionPad, wrap } from "./shared";

const steps = [
  { title: "Read current update", text: "View the current approved instruction and its version." },
  { title: "Confirm identity & version", text: "The authenticated recipient confirms which version they are responding to." },
  { title: "Acknowledge", text: "An explicit, named action — never inferred from opening a link." },
  { title: "Review receipt", text: "Actor, role, version and timestamp are captured with the action." },
];

export function AffirmVersion() {
  return (
    <section id="acknowledgment-process" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <span className="inline-flex rounded-full border border-[#DEDAD0] bg-white px-3 py-1.5 text-[10.5px] font-semibold uppercase leading-none tracking-[0.08em] text-ink/50">
            Illustrative specimen · Not a working control
          </span>
          <SectionTitle className="mt-4">How does a recipient affirm this version?</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            An intentional, attributable action — never an inferred reading. No acknowledgment control is active on this
            marketing page.
          </Lead>
        </Reveal>

        <RevealGroup
          className={`mt-9 grid gap-x-8 gap-y-6 border-t-2 border-brand-yellow ${cream} px-5 py-7 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {steps.map((s, i) => (
            <RevealItem key={s.title}>
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink/40">Step {pad2(i + 1)}</p>
              <h3 className="mt-3 text-[15px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 max-w-[260px] text-[13px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-8 aspect-[1280/297] min-h-[180px] w-full">
          <Photo
            src="/images/update-acknowledgments/affirm-volleyball-dive.webp"
            alt="Volleyball player diving full length to dig the ball"
            sizes="(min-width: 1320px) 1280px, 95vw"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
