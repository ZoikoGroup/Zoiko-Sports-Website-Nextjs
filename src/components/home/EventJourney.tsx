"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";

const EASE = [0.16, 1, 0.3, 1] as const;

type Tone = "due" | "done" | "open";
type Row = { when: string; title: string; owner: string; status: string; tone: Tone };

const stages: { name: string; summary: string; window: string; rows: Row[] }[] = [
  {
    name: "Plan",
    summary: "Establish event, venue, organizations, milestones, and owners.",
    window: "Sep 22 to 25 • Owners assigned for every milestone",
    rows: [
      { when: "Sep 24", title: "Competition schedule", owner: "Riverside League / Competition Director", status: "Due Sep 24", tone: "due" },
      { when: "Sep 24", title: "Venue access plan", owner: "Northfield Arena / Venue Operations", status: "Due Sep 24", tone: "due" },
      { when: "Sep 25", title: "Officials confirmation", owner: "Riverside League / Officials Coordinator", status: "Due Sep 25", tone: "due" },
      { when: "Sep 25", title: "Stewarding plan", owner: "Northfield Arena / Safety Officer", status: "Due Sep 25", tone: "due" },
    ],
  },
  {
    name: "Prepare",
    summary: "Review readiness, close checks, and route approvals.",
    window: "Sep 25 to 26 • Readiness checks closing before gates open",
    rows: [
      { when: "Sep 25", title: "Venue access plan approved", owner: "Northfield Arena / Venue Operations", status: "Complete", tone: "done" },
      { when: "Sep 25", title: "Officials travel confirmed", owner: "Riverside League / Officials Coordinator", status: "Complete", tone: "done" },
      { when: "Sep 26", title: "Stewarding briefing", owner: "Northfield Arena / Safety Officer", status: "Due 10:00", tone: "due" },
      { when: "Sep 26", title: "Turnstile and entry checks", owner: "Northfield Arena / Venue Operations", status: "Due 10:30", tone: "due" },
    ],
  },
  {
    name: "Coordinate",
    summary: "Handle event-day exceptions without losing responsibility or decision context.",
    window: "Sep 26 • Event-day exceptions handled with owners and context",
    rows: [
      { when: "11:52", title: "EX-104 Turnstile 4 offline", owner: "Northfield Arena / Venue Operations", status: "Resolved", tone: "done" },
      { when: "12:10", title: "EX-105 Entry backlog", owner: "Northfield Arena / Venue Operations", status: "Resolved", tone: "done" },
      { when: "12:15", title: "Start moved to 12:25 PDT", owner: "Riverside League / Competition Director", status: "Approved", tone: "done" },
      { when: "12:18", title: "Change acknowledged", owner: "Officials, both clubs, stewarding lead", status: "Acknowledged", tone: "done" },
    ],
  },
  {
    name: "Review",
    summary: "Separate recorded decisions from follow-up work.",
    window: "Sep 27 to 30 • Recorded decisions separated from follow-up work",
    rows: [
      { when: "Sep 27", title: "Decision record reviewed", owner: "Riverside League / Competition Director", status: "Recorded", tone: "done" },
      { when: "Sep 28", title: "Turnstile maintenance follow-up", owner: "Northfield Arena / Venue Operations", status: "Open", tone: "open" },
      { when: "Sep 29", title: "Entry procedure update", owner: "Northfield Arena / Safety Officer", status: "Open", tone: "open" },
      { when: "Sep 30", title: "Post-event review closed", owner: "Riverside League / Operations Lead", status: "Due Sep 30", tone: "due" },
    ],
  },
];

const toneClass: Record<Tone, string> = {
  due: "bg-[#ebe8e0] text-ink",
  done: "bg-emerald-50 text-emerald-700",
  open: "bg-amber-50 text-amber-700",
};

export function EventJourney() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const stage = stages[active];

  const go = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  return (
    <section id="workflow" className="bg-[#efece5] py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="max-w-[480px] text-[clamp(2rem,3.6vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-ink">
            Follow one event from plan to review.
          </h2>
          <p className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-ink-muted">
            Move through the Riverside Invitational at your own pace. Each stage shows the records an organization
            would see at that point.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-10">
          {/* Stage list */}
          <Reveal delay={0.05}>
            <ol className="relative grid gap-2 sm:grid-cols-2 lg:grid-cols-1" aria-label="Event stages">
              {stages.map((s, i) => {
                const selected = i === active;
                const done = i < active;
                return (
                  <li key={s.name}>
                    <button
                      onClick={() => go(i)}
                      aria-current={selected ? "step" : undefined}
                      className="group relative flex w-full gap-3 rounded-2xl p-3.5 text-left transition-colors duration-300 hover:bg-white/60"
                    >
                      {selected && (
                        <motion.span
                          layoutId="journey-active"
                          className="absolute inset-0 rounded-2xl border-2 border-navy-950 bg-[#fbfaf7]"
                          transition={{ type: "spring", stiffness: 400, damping: 36 }}
                        />
                      )}
                      <span
                        className={`relative grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[11px] font-semibold transition-colors duration-300 ${
                          selected
                            ? "border-navy-950 bg-navy-950 text-white"
                            : done
                              ? "border-brand-blue bg-brand-blue text-white"
                              : "border-ink/30 text-ink-muted"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span className="relative">
                        <span className="block font-heading text-[16px] font-semibold text-ink">{s.name}</span>
                        <span className="mt-1 block text-[13px] leading-snug text-ink-muted">{s.summary}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* Stage detail */}
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-3xl border border-black/[0.07] bg-[#fbfaf7] shadow-[0_30px_60px_-30px_rgba(29,20,51,0.25)]">
              <div className="relative h-[120px] overflow-hidden sm:h-[150px]">
                <motion.div
                  key={active}
                  initial={{ scale: 1.12 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/home/journey-banner.webp"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 860px, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="p-5 sm:p-7">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={stage.name}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -30 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[12.5px] font-semibold text-brand-blue">Stage 0{active + 1} of 04</p>
                        <h3 className="mt-2 text-[26px] font-bold text-ink">{stage.name}</h3>
                      </div>
                      <SampleBadge />
                    </div>
                    <p className="mt-2 text-[14.5px] text-ink-muted">{stage.window}</p>

                    <ul className="mt-6 divide-y divide-black/[0.07] border-t border-black/[0.07]">
                      {stage.rows.map((row, i) => (
                        <motion.li
                          key={row.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: EASE }}
                          className="grid grid-cols-[64px_1fr_auto] items-center gap-4 py-4 transition-colors hover:bg-black/[0.015]"
                        >
                          <span className="text-[13px] font-semibold text-ink">{row.when}</span>
                          <span>
                            <span className="block font-heading text-[15px] font-semibold text-ink">{row.title}</span>
                            <span className="mt-0.5 block text-[12.5px] text-ink-muted">{row.owner}</span>
                          </span>
                          <span className={`rounded-md px-2.5 py-1 text-[11.5px] font-semibold ${toneClass[row.tone]}`}>
                            {row.status}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => go(active - 1)}
                    disabled={active === 0}
                    className="rounded-lg border-2 border-navy-950 px-5 py-2.5 font-heading text-[14px] font-semibold text-navy-950 transition-all duration-300 hover:bg-navy-950 hover:text-white disabled:pointer-events-none disabled:opacity-30"
                  >
                    Previous stage
                  </button>
                  <button
                    onClick={() => go(active + 1)}
                    disabled={active === stages.length - 1}
                    className="rounded-lg bg-navy-950 px-5 py-3 font-heading text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(29,20,51,0.7)] disabled:pointer-events-none disabled:opacity-30"
                  >
                    Next stage
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 flex gap-3 rounded-2xl bg-navy-950 px-6 py-5 text-[14px] leading-relaxed text-white/80">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
            <span>
              <strong className="font-semibold text-brand-yellow">Authority stays with your people.</strong> Zoiko
              Sports coordinates operational information and records decisions. Authorized event personnel and
              participating organizations retain responsibility for sporting, venue, safety, security, medical,
              safeguarding, and emergency decisions.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
