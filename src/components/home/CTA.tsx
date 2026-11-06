"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#22113f] text-white">
      <Image
        src="/images/home/serve-venues.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-[0.12] mix-blend-luminosity"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#22113f] via-[#22113f]/90 to-[#22113f]/70" />

      {/* Brand waves */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full w-full"
      >
        <motion.path
          d="M-20 292 C 420 292, 700 250, 960 205 S 1290 105, 1460 50"
          fill="none"
          stroke="#fecf23"
          strokeOpacity="0.55"
          strokeWidth="14"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.path
          d="M-20 312 C 440 312, 720 272, 980 230 S 1300 135, 1460 85"
          fill="none"
          stroke="#377eb8"
          strokeOpacity="0.6"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        <path
          d="M-20 292 C 420 292, 700 250, 960 205 S 1290 105, 1460 50"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.35"
          strokeWidth="2"
          className="swoosh-flow"
        />
      </svg>

      <div className="container-page flex flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between lg:py-24">
        <Reveal>
          <h2 className="max-w-[420px] text-[clamp(2rem,3.6vw,2.7rem)] font-bold leading-[1.1] tracking-tight">
            Bring your next event into one operating workflow.
          </h2>
          <p className="mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-white/70">
            Tell us about one event or fixture block and the organizations involved. We’ll scope whether a pilot is a
            good fit.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href="#pilot-request"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand-yellow px-7 py-4 font-heading text-[16px] font-semibold text-ink shadow-[0_14px_36px_-10px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {/* Shine sweep on hover */}
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
            <span className="relative">Scope a pilot</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
