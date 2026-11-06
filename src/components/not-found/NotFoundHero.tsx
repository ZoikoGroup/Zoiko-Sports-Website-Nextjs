"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "motion/react";
import { useState, type MouseEvent } from "react";
import { ArrowRight, Building2, Compass, House, LifeBuoy, ShieldCheck, Users } from "lucide-react";
import { BallSpinner } from "@/components/ui/BallSpinner";
import { usePageReady } from "@/hooks/usePageReady";
import { PitchBackground } from "./PitchBackground";

const EASE = [0.16, 1, 0.3, 1] as const;

const quickLinks = [
  { label: "Platform", text: "The operating model", href: "/platform", icon: Compass },
  { label: "Who We Serve", text: "Leagues, clubs & venues", href: "/who-we-serve", icon: Users },
  { label: "Trust Center", text: "Security & privacy", href: "/trust", icon: ShieldCheck },
  { label: "Company", text: "About Zoiko Sports", href: "/company", icon: Building2 },
  { label: "Contact", text: "Talk to the team", href: "/contact", icon: LifeBuoy },
];

const copy: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.55 + i * 0.1 } }),
};

export function NotFoundHero() {
  const ready = usePageReady();
  const [kicks, setKicks] = useState(0);

  // Mouse parallax: digits drift against the cursor, the ball with it
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const digitX = useSpring(useTransform(mx, [-0.5, 0.5], [18, -18]), { stiffness: 70, damping: 18 });
  const digitY = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 70, damping: 18 });
  const ballX = useSpring(useTransform(mx, [-0.5, 0.5], [-26, 26]), { stiffness: 70, damping: 18 });
  const tilt = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 70, damping: 18 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const state = ready ? "show" : "hidden";

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative isolate flex min-h-[calc(100dvh-76px)] items-center overflow-hidden bg-gradient-to-b from-[#1d0c38] via-[#230c44] to-[#2a1250] py-20 text-white"
    >
      <PitchBackground ready={ready} />

      <div className="container-page text-center">
        <motion.p
          custom={0}
          variants={copy}
          initial="hidden"
          animate={state}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-brand-yellow backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-yellow" />
          </span>
          Error 404 · Out of bounds
        </motion.p>

        {/* 4 [ball] 4 */}
        <h1 className="sr-only">Page not found</h1>
        <div
          aria-hidden="true"
          className="mt-4 flex items-center justify-center font-heading text-[clamp(7rem,24vw,15rem)] font-bold leading-none tracking-tighter"
        >
          <motion.span style={{ x: digitX, y: digitY, rotate: tilt }} className="inline-block">
            <motion.span
              className="inline-block bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, x: -120, rotate: -18 }}
              animate={ready ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
            >
              4
            </motion.span>
          </motion.span>

          {/* The ball: drops in, bounces forever, and can be kicked */}
          <motion.span style={{ x: ballX }} className="relative mx-[0.1em] inline-flex flex-col items-center">
            <motion.span
              initial={{ y: "-120vh" }}
              animate={ready ? { y: 0 } : {}}
              transition={{ type: "spring", stiffness: 90, damping: 11, delay: 0.25 }}
              className="block"
            >
              <span className="ball-bounce block origin-bottom">
                <motion.button
                  type="button"
                  aria-label="Kick the ball"
                  onClick={() => setKicks((k) => k + 1)}
                  animate={{ rotate: kicks * 540, y: kicks ? [0, -90, 0] : 0 }}
                  transition={{
                    rotate: { type: "spring", stiffness: 60, damping: 12 },
                    y: { duration: 0.7, ease: [0.2, 0.7, 0.4, 1] },
                  }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.92 }}
                  // Button inherits the digits' font size, so the ball's "em" size scales with the 4s
                  className="block cursor-pointer rounded-full"
                >
                  <BallSpinner size="0.72em" />
                </motion.button>
              </span>
            </motion.span>
            <span className="ball-shadow mt-[0.06em] block h-[0.05em] w-[0.6em] rounded-[50%] bg-black/60 blur-[6px]" />
          </motion.span>

          <motion.span style={{ x: digitX, y: digitY, rotate: tilt }} className="inline-block">
            <motion.span
              className="inline-block bg-gradient-to-b from-white to-white/55 bg-clip-text text-transparent drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, x: 120, rotate: 18 }}
              animate={ready ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.18 }}
            >
              4
            </motion.span>
          </motion.span>
        </div>

        <motion.h2
          custom={1}
          variants={copy}
          initial="hidden"
          animate={state}
          className="mx-auto mt-2 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight tracking-tight"
        >
          This page went <span className="text-brand-yellow">out of bounds.</span>
        </motion.h2>
        <motion.p
          custom={2}
          variants={copy}
          initial="hidden"
          animate={state}
          className="mx-auto mt-4 max-w-xl text-[16.5px] leading-relaxed text-white/70"
        >
          The page you’re looking for may have moved, been retired, or never made the team sheet. Let’s get you back
          in play.
        </motion.p>

        <motion.div
          custom={3}
          variants={copy}
          initial="hidden"
          animate={state}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand-yellow px-7 py-4 font-heading text-[16px] font-semibold text-ink shadow-[0_14px_36px_-10px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-hover"
          >
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/50 transition-all duration-700 group-hover:left-[120%]" />
            <House className="relative h-4 w-4" />
            <span className="relative">Back to home</span>
          </Link>
          <Link
            href="/pilot"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/5 px-7 py-4 font-heading text-[16px] font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Scope a Pilot
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.p
          custom={4}
          variants={copy}
          initial="hidden"
          animate={state}
          className="mt-14 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/45"
        >
          Or pick up play here
        </motion.p>
        <motion.ul
          initial="hidden"
          animate={state}
          variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 1.05 } } }}
          className="mx-auto mt-5 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
        >
          {quickLinks.map(({ label, text, href, icon: Icon }) => (
            <motion.li
              key={href}
              variants={{
                hidden: { opacity: 0, y: 18, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
              }}
            >
              <Link
                href={href}
                className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/60 hover:bg-white/[0.08] hover:shadow-[0_18px_40px_-18px_rgba(254,207,35,0.5)]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-ink">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="flex items-center gap-1 font-heading text-[15px] font-semibold">
                    {label}
                    <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="mt-0.5 block text-[12.5px] text-white/55">{text}</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
