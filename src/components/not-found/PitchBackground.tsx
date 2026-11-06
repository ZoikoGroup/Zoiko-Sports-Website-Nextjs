"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Pitch markings that draw themselves in, plus drifting brand waves and sparks. */
export function PitchBackground({ ready }: { ready: boolean }) {
  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: ready ? { pathLength: 1, opacity: 1 } : {},
    transition: { duration: 2.2, ease: EASE, delay },
  });

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Glows */}
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[140px]" />
      <div className="absolute bottom-[-200px] right-[-100px] h-[420px] w-[420px] rounded-full bg-brand-yellow/10 blur-[120px]" />

      {/* Pitch markings */}
      <svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <g fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="2">
          <motion.rect x="40" y="40" width="1120" height="620" rx="6" {...draw(0)} />
          <motion.path d="M600 40 V660" {...draw(0.15)} />
          <motion.circle cx="600" cy="350" r="95" {...draw(0.3)} />
          <motion.path d="M40 210 H200 V490 H40" {...draw(0.45)} />
          <motion.path d="M1160 210 H1000 V490 H1160" {...draw(0.45)} />
          <motion.path d="M40 285 H100 V415 H40" {...draw(0.6)} />
          <motion.path d="M1160 285 H1100 V415 H1160" {...draw(0.6)} />
          <motion.path d="M200 290 A 80 80 0 0 1 200 410" {...draw(0.75)} />
          <motion.path d="M1000 290 A 80 80 0 0 0 1000 410" {...draw(0.75)} />
        </g>
        <circle cx="600" cy="350" r="4" fill="white" fillOpacity="0.15" />
      </svg>

      {/* Brand waves */}
      <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[45%] w-full">
        <motion.path
          d="M-20 380 C 360 380, 620 300, 900 250 S 1280 140, 1460 90"
          fill="none"
          stroke="#fecf23"
          strokeOpacity="0.45"
          strokeWidth="12"
          strokeLinecap="round"
          {...draw(0.4)}
        />
        <motion.path
          d="M-20 400 C 380 400, 640 330, 920 285 S 1300 180, 1460 135"
          fill="none"
          stroke="#377eb8"
          strokeOpacity="0.5"
          strokeWidth="8"
          strokeLinecap="round"
          {...draw(0.55)}
        />
        <path
          d="M-20 380 C 360 380, 620 300, 900 250 S 1280 140, 1460 90"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.3"
          strokeWidth="2"
          className="swoosh-flow"
        />
      </svg>

      {/* Drifting sparks */}
      {[
        { left: "12%", top: "22%", d: 0 },
        { left: "82%", top: "18%", d: 1.2 },
        { left: "70%", top: "70%", d: 0.6 },
        { left: "24%", top: "74%", d: 1.8 },
        { left: "48%", top: "12%", d: 2.4 },
      ].map((s) => (
        <motion.span
          key={s.left + s.top}
          className="absolute h-1.5 w-1.5 rounded-full bg-brand-yellow"
          style={{ left: s.left, top: s.top }}
          animate={{ y: [0, -24, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: s.d, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
