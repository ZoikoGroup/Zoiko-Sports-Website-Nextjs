import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { principles, visionMission } from "@/data/about";
import { Photo, wrap } from "./shared";

export function VisionMission() {
  return (
    <section className="bg-[#24163A] py-16 text-white lg:py-24">
      <div className={wrap}>
        <RevealGroup className="grid gap-6 lg:grid-cols-2">
          {visionMission.map((v) => (
            <RevealItem
              key={v.label}
              className="rounded-2xl border border-white/15 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-brand-yellow/50 sm:p-9"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-yellow">{v.label}</p>
              <p className="mt-4 font-heading text-[clamp(1.1rem,1.6vw,1.3rem)] font-semibold leading-[1.6]">{v.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_296px] lg:gap-8">
          <RevealGroup className="grid gap-x-8 sm:grid-cols-2 xl:grid-cols-3">
            {principles.map((p) => (
              <RevealItem key={p.title} className="border-t border-white/15 py-6">
                <h3 className="text-[15.5px] font-semibold">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-white/60">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="lg:pt-0">
            <Photo
              src="/images/about/principles-rugby.webp"
              alt="Rugby player kicking a ball off a kicking tee"
              sizes="(min-width: 1024px) 296px, 95vw"
              className="aspect-[295/235] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
