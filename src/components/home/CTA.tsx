"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="group/cta relative isolate overflow-hidden bg-[#24137a] text-white">
      {/* Stadium background, with a slow zoom on hover */}
      <Image
        src="/images/home/new-banner.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover transition-transform duration-[2500ms] ease-out group-hover/cta:scale-105"
      />
      {/* Light centre shade so the copy stays readable */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(20,8,60,0.45),transparent_75%)]" />

      <div className="container-page relative py-14 text-center lg:py-16">
        <Reveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
            Connect Every Side of <span className="text-brand-yellow">Sport.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[16px] leading-relaxed text-white/85">
            Explore a more connected future for sports operations, performance, competition, and fan engagement.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/platform"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg bg-brand-yellow px-7 py-3.5 font-heading text-[16px] font-semibold text-ink shadow-[0_14px_36px_-12px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {/* Shine sweep on hover */}
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
            <span className="relative">Explore the Platform</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-lg border border-white/80 px-7 py-3.5 font-heading text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            Contact Our Team
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
