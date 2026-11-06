"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";

const EASE = [0.16, 1, 0.3, 1] as const;
const AUTO_ADVANCE_MS = 5000;

const pillars = [
  {
    title: "Schedule",
    text: "Keep the competition schedule, venue assignment, milestones, and responsible organizations in view.",
    tags: ["Venue", "Time", "Milestones"],
    sample: "Northfield Arena • Gates 11:30 • Officials briefing 10:15",
  },
  {
    title: "Readiness",
    text: "Track each readiness check with an owner, a due time, and a status every participating organization can see.",
    tags: ["Owner", "Due time", "Status"],
    sample: "Venue access plan • Northfield Arena / Venue Operations • Due Sep 24",
  },
  {
    title: "Exceptions",
    text: "Record operational issues as they happen, assign an owner, and keep their impact visible until resolved.",
    tags: ["Owner", "Impact", "Resolution"],
    sample: "EX-104 Turnstile 4 offline • Owner: Venue Operations • Active",
  },
  {
    title: "Decisions",
    text: "Capture who requested a change, who approved it, in which role, and when it was recorded.",
    tags: ["Requested by", "Approved by", "Recorded"],
    sample: "Start moved 12:15 → 12:25 PDT • Approved by Competition Director",
  },
];

export function FourPillars() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });

  // Gently cycle through the pillars while visible, until the visitor picks one.
  useEffect(() => {
    if (!autoplay || !inView) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % pillars.length), AUTO_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [active, autoplay, inView]);

  const pillar = pillars[active];

  return (
    <section className="bg-[#f4f2ec] py-20 lg:py-24">
      <div className="container-page">
        <Reveal className="text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-tight tracking-tight text-ink">
            One operating picture, organized around four things.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] text-ink-muted">
            Every organization works from the same event spine. Select a pillar to see what it holds.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={ref}
            className="mx-auto mt-12 max-w-[1000px] rounded-3xl border border-black/[0.07] bg-[#fbfaf7] p-5 shadow-[0_30px_60px_-30px_rgba(29,20,51,0.2)] sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-heading text-[15px] font-semibold text-ink">Event: Riverside Invitational</p>
              <SampleBadge />
            </div>

            {/* Pillar selector */}
            <div className="relative mt-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 60"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-14 w-full -translate-y-1/2 md:block"
              >
                <motion.path
                  d="M0 40 C 200 40, 260 18, 500 22 S 800 5, 1000 20"
                  fill="none"
                  stroke="#fecf23"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: EASE }}
                />
                <motion.path
                  d="M0 46 C 200 46, 260 26, 500 30 S 800 14, 1000 28"
                  fill="none"
                  stroke="#377eb8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
                />
              </svg>

              <div role="tablist" aria-label="Operating pillars" className="relative grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
                {pillars.map((p, i) => {
                  const selected = i === active;
                  return (
                    <button
                      key={p.title}
                      role="tab"
                      id={`pillar-tab-${i}`}
                      aria-selected={selected}
                      aria-controls="pillar-panel"
                      onClick={() => {
                        setActive(i);
                        setAutoplay(false);
                      }}
                      className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border px-5 py-4 text-left transition-colors duration-300 ${
                        selected
                          ? "border-transparent text-white"
                          : "border-black/10 bg-[#f6f4ee] text-ink hover:border-black/20 hover:bg-white"
                      }`}
                    >
                      {selected && (
                        <motion.span
                          layoutId="pillar-active"
                          className="absolute inset-0 -z-0 bg-navy-950"
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        />
                      )}
                      <span className={`relative text-[12px] font-semibold ${selected ? "text-brand-yellow" : "text-ink-muted"}`}>
                        0{i + 1}
                      </span>
                      <span className="relative font-heading text-[16px] font-semibold">{p.title}</span>

                      {/* Autoplay progress */}
                      {selected && autoplay && inView && (
                        <motion.span
                          key={`progress-${active}`}
                          className="absolute bottom-0 left-0 h-[3px] bg-brand-yellow"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-black/[0.08] pt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pillar.title}
                  id="pillar-panel"
                  role="tabpanel"
                  aria-labelledby={`pillar-tab-${active}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="grid gap-8 md:grid-cols-[1.15fr_1fr]"
                >
                  <div>
                    <h3 className="text-[26px] font-bold text-ink">{pillar.title}</h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-ink-muted">{pillar.text}</p>
                    <p className="mt-3 flex items-center gap-2 text-[13px] text-ink-muted">
                      <Lock className="h-3.5 w-3.5" />
                      All four are scoped to the participating organization and role.
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-[13px] font-semibold text-ink">In the Riverside Invitational sample</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {pillar.tags.map((tag, i) => (
                        <motion.li
                          key={tag}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 300, damping: 20 }}
                          className="rounded-md bg-[#e9e6f2] px-3 py-1.5 text-[13px] font-medium text-ink"
                        >
                          {tag}
                        </motion.li>
                      ))}
                    </ul>
                    <p className="mt-4 text-[13.5px] text-ink-muted">{pillar.sample}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
