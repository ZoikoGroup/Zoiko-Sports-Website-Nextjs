import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { differentiators } from "@/data/about";
import { Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

export function Differentiators() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What makes Zoiko Sports different</SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_302px] lg:gap-8">
          <RevealGroup className="grid gap-x-8 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((d, i) => (
              <RevealItem key={d.title} className="group">
                <span className="grid h-[30px] w-[30px] place-items-center rounded-md bg-[#24163A] text-[12px] font-bold text-brand-yellow transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[16.5px] font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">{d.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="min-h-[340px]">
            <Photo
              src="/images/about/different-basketball.webp"
              alt="Basketball player rising for a dunk in a packed arena"
              sizes="(min-width: 1024px) 302px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
