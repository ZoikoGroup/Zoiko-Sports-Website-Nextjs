import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CompetitionCTA() {
  return (
    <section className="group/cta relative isolate overflow-hidden bg-[#24163A] text-white">
      <Image
        src="/images/footer/cta-stadium-banner.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover transition-transform duration-[2500ms] ease-out group-hover/cta:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(20,8,60,0.45),transparent_75%)]" />

      <div className="container-page relative py-16 text-center lg:py-[90px]">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-tight tracking-tight">
            Plan one event. Align the organizations delivering it.
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-white/80">
            Scope the fixture workflow, participants and success measures before the pilot begins.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/pilot"
            className="group relative inline-flex items-center overflow-hidden rounded-lg bg-brand-yellow px-7 py-3.5 font-heading text-[15px] font-semibold text-ink shadow-[0_14px_36px_-12px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
            <span className="relative">Scope a Pilot</span>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/80 px-7 py-3.5 font-heading text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            Contact Zoiko Sports
            <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
