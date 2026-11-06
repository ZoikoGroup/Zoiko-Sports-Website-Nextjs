"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { BallSpinner } from "@/components/ui/BallSpinner";

const MIN_VISIBLE_MS = 1400;
const EASE = [0.76, 0, 0.24, 1] as const;

type Phase = "loading" | "complete" | "done";

/**
 * Full-screen intro loader shown on the first (hard) page load.
 * loading  → spinner + progress bar creeping forward
 * complete → bar fills, content fades
 * done     → navy + yellow curtains wipe upward to reveal the page
 */
export function Preloader() {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const start = performance.now();
    const timers: ReturnType<typeof setTimeout>[] = [];

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      timers.push(
        setTimeout(() => setPhase("complete"), wait),
        setTimeout(() => {
          setPhase("done");
          root.dataset.loaded = "true"; // triggers page `.reveal` animations
          root.style.overflow = "";
        }, wait + 550),
      );
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", finish);
      root.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          id="preloader"
          key="preloader"
          className="fixed inset-0 z-[100]"
          aria-live="polite"
          aria-busy={phase === "loading"}
          exit={{ pointerEvents: "none" }}
        >
          <span className="sr-only">Loading Zoiko Sports</span>

          {/* Yellow under-curtain trails behind the navy one */}
          <motion.div
            className="absolute inset-0 bg-brand-yellow"
            initial={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.14 }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-navy-950"
            initial={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/20 blur-[120px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow/10 blur-[80px]" />

            <motion.div
              className="relative flex flex-col items-center"
              animate={phase === "complete" ? { opacity: 0, y: -24, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <motion.div
                initial={{ scale: 0.6, opacity: 0, rotate: -40 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
              >
                <BallSpinner size={88} />
              </motion.div>

              <motion.div
                className="mt-10 overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              >
                <Image
                  src="/brand/zoiko-sports-logo.png"
                  alt=""
                  width={425}
                  height={144}
                  priority
                  className="h-12 w-auto"
                />
              </motion.div>

              <div className="mt-8 h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full origin-left rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow ${
                    phase === "complete" ? "scale-x-100 transition-transform duration-300" : "preloader-bar"
                  }`}
                />
              </div>

              <motion.p
                className="mt-4 font-heading text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Sports operations software
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
