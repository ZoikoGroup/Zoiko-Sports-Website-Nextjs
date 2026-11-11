import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, Lead, SectionTitle, altBg, ruled, pad2, sectionPad, wrap } from "./shared";

const steps = [
  {
    title: "Identify source",
    src: "/images/competition-to-venue/source-taekwondo-kick.webp",
    alt: "Two taekwondo athletes exchanging flying kicks",
  },
  {
    title: "Agree share scope",
    src: "/images/competition-to-venue/scope-judo-throw.webp",
    alt: "Judoka throwing an opponent to the mat",
  },
  {
    title: "Validate mapping",
    src: "/images/competition-to-venue/validate-wrestling.webp",
    alt: "Two wrestlers grappling in a clinch",
  },
];

export function SourceSystems() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">Start with the systems that already hold the plan.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Agree which information can be shared, who maintains it and how changes will be checked before a live
            workflow.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-6 grid gap-y-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <RevealItem key={s.title} className="group">
              <div className="relative aspect-[426/191] overflow-hidden border-b-2 border-[#24163A] bg-black/5">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 427px, 95vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-1.5 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <Footnote className="mt-10">
          No partner logos, API availability or &quot;seamless integration&quot; are claimed absent a validated integration.
        </Footnote>
      </div>
    </section>
  );
}
