"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, card, ruled, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

const groups = [
  {
    label: "Plan & Prepare",
    text: "Align the competition plan with venue responsibilities before the event.",
    items: [
      { title: "Competition-to-Venue Coordination", text: "Align organizer schedules with venue responsibilities.", href: "/solutions/competition-to-venue" },
      { title: "Event Readiness", text: "Bring due checks and ownership into one operational view.", href: "/solutions/event-readiness" },
    ],
  },
  {
    label: "Event Day",
    text: "Keep the issue, the assigned owner and the authorized decision distinct.",
    items: [
      { title: "Exception Coordination", text: "Assign and track operational exceptions.", href: "/solutions/exception-coordination" },
      { title: "Decision & Approval Records", text: "Record who approved what, in which role, and when.", href: "/solutions/decision-approval-records" },
    ],
  },
  {
    label: "Review & Scale",
    text: "Review recorded decisions and open follow-up work before extending further.",
    items: [
      { title: "Post-Event Review", text: "Review recorded decisions and open follow-up work.", href: "/solutions/post-event-review" },
      { title: "Multi-Event Operating Model", text: "Extend an agreed workflow across a fixture block.", href: "/solutions/multi-event-operating-model" },
    ],
  },
];

const filters = ["All", ...groups.map((g) => g.label)];

export function FindSolution() {
  const [active, setActive] = useState("All");
  const visible = groups.filter((g) => active === "All" || g.label === active);

  return (
    <section id="find-solution" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">Find a solution by the problem you need to solve.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Start with the workflow that causes the most friction. Each pilot is defined around a specific event,
            participating organizations and agreed measures.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2.5" role="group" aria-label="Filter solutions by stage">
          {filters.map((f) => {
            const on = active === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2.5 font-heading text-[13.5px] font-semibold transition-all duration-300 ${
                  on
                    ? "border-brand-yellow bg-brand-yellow text-ink shadow-[0_8px_20px_-10px_rgba(254,207,35,0.9)]"
                    : "border-[#DEDAD0] bg-[#efede6] text-ink/80 hover:border-brand-yellow/70 hover:text-ink"
                }`}
              >
                {f}
              </button>
            );
          })}
        </Reveal>

        <div className="mt-8 grid gap-1 lg:grid-cols-[1fr_413px]">
          <div className="space-y-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((g) => (
                <motion.div
                  key={g.label}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ink/40">{g.label}</p>
                  <p className="mt-1.5 text-[14px] text-ink-muted">{g.text}</p>
                  <div className="mt-3 grid gap-1 sm:grid-cols-2">
                    {g.items.map((it) => (
                      <Link key={it.href} href={it.href} className={`${card} group block bg-white px-6 py-7`}>
                        <h3 className="flex items-center gap-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                          {it.title}
                          <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
                        </h3>
                        <p className="mt-2.5 text-[14px] leading-[1.6] text-ink-muted">{it.text}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Starts level with the first row of cards, below the first group's label */}
          <Reveal delay={0.2} className="hidden lg:block lg:pt-[52px]">
            <Photo
              src="/images/solution-overview/solutions-baseball-batter.webp"
              alt="Baseball batter in a pinstriped uniform following through on a swing"
              sizes="413px"
              className="h-full min-h-[300px] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
