"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

/** A bank of stadium floodlights with a soft glow that gently pulses. */
function Floodlights({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <motion.div
        className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(170,200,255,0.55),transparent_65%)]"
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      />
      <div className="relative grid grid-cols-4 gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_4px_rgba(200,220,255,0.9)]" />
        ))}
      </div>
    </div>
  );
}

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#2a0c5e] via-[#24137a] to-[#1b2a8f] text-white">
      {/* Dim crowd/stand shading at the edges */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,4,30,0.55)_100%)]" />

      <Floodlights className="-left-4 top-4 -rotate-12" />
      <Floodlights className="-right-4 top-4 rotate-12" delay={2} />

      {/* Left: sweeping light trails */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 h-full w-[40%]"
      >
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M ${40 + i * 30} 210 Q ${120 + i * 40} ${20 - i * 10} ${400} ${-10 + i * 12}`}
            fill="none"
            stroke={i === 1 ? "#8fb8ff" : "#5b7dff"}
            strokeOpacity={0.5 - i * 0.12}
            strokeWidth={i === 1 ? 3 : 1.5}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: EASE, delay: 0.15 * i }}
          />
        ))}
      </svg>

      {/* Right: pitch markings in perspective */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 200"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-full w-[38%] max-w-[480px]"
        fill="none"
        stroke="#9cc4ff"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      >
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        >
          <path d="M60 200 L170 70 L420 70" />
          <path d="M240 200 L270 70" />
          <ellipse cx="258" cy="128" rx="60" ry="22" />
          <circle cx="258" cy="128" r="2.5" fill="#9cc4ff" />
          <path d="M330 200 L360 110 L420 110" />
        </motion.g>
      </svg>

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
            className="group inline-flex items-center gap-2.5 rounded-lg border border-white/80 px-7 py-3.5 font-heading text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            Contact Our Team
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
