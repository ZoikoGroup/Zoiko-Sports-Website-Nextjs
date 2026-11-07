"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Wifi } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";

const EASE = [0.16, 1, 0.3, 1] as const;

type Status = "Not sent" | "Queued" | "Delivered" | "Acknowledged";
type Step = {
  time: string;
  label: string;
  title: string;
  meta: string;
  meaning: string;
  start: string;
  ex104: string;
  ex105: string;
  decision: string;
  acks: [Status, Status, Status, Status];
};

const steps: Step[] = [
  {
    time: "11:52", label: "Offline", title: "Turnstile 4 offline",
    meta: "Exception EX-104 created • owner: Venue Operations • status: active",
    meaning: "Issue recorded; no event decision implied.",
    start: "12:15", ex104: "Active", ex105: "Not raised", decision: "None",
    acks: ["Not sent", "Not sent", "Not sent", "Not sent"],
  },
  {
    time: "12:07", label: "Restored", title: "Turnstile 4 restored",
    meta: "EX-104 updated • owner: Venue Operations • status: resolved",
    meaning: "The device is back in service; the queue it caused may not be.",
    start: "12:15", ex104: "Resolved", ex105: "Not raised", decision: "None",
    acks: ["Not sent", "Not sent", "Not sent", "Not sent"],
  },
  {
    time: "12:10", label: "Backlog", title: "Entry backlog raised",
    meta: "Exception EX-105 created • owner: Venue Operations • linked to EX-104",
    meaning: "A related issue is recorded separately, with its own owner and status.",
    start: "12:15", ex104: "Resolved", ex105: "Active", decision: "None",
    acks: ["Not sent", "Not sent", "Not sent", "Not sent"],
  },
  {
    time: "12:15", label: "Decision", title: "Start moved to 12:25 PDT",
    meta: "Requested by Venue Operations • approved by Competition Director • recorded 12:15",
    meaning: "The decision carries its requester, approver, role, and source references.",
    start: "12:25", ex104: "Resolved", ex105: "Active", decision: "Approved",
    acks: ["Queued", "Queued", "Queued", "Queued"],
  },
  {
    time: "12:16", label: "Shared", title: "Change shared with participating organizations",
    meta: "Updates sent to officials, both clubs, and the stewarding lead",
    meaning: "Officials and both clubs acknowledged; the stewarding lead has not yet.",
    start: "12:25", ex104: "Resolved", ex105: "Active", decision: "Approved",
    acks: ["Acknowledged", "Acknowledged", "Acknowledged", "Delivered"],
  },
  {
    time: "12:18", label: "Complete", title: "All acknowledgments recorded",
    meta: "Stewarding lead acknowledged at 12:18 PDT • EX-105 resolved",
    meaning: "The record shows what changed, who approved it, and who confirmed it.",
    start: "12:25", ex104: "Resolved", ex105: "Resolved", decision: "Approved",
    acks: ["Acknowledged", "Acknowledged", "Acknowledged", "Acknowledged"],
  },
];

const ackParties = ["Officials", "Home club", "Away club", "Stewarding lead"];

const pill = (value: string) => {
  if (["Active"].includes(value)) return "bg-amber-100 text-amber-800";
  if (["Resolved", "Approved", "Acknowledged"].includes(value)) return "bg-emerald-100 text-emerald-800";
  if (["Queued", "Delivered"].includes(value)) return "bg-sky-100 text-sky-800";
  return "bg-[#ebe8e0] text-ink-muted";
};

/** Value that briefly flashes and slides in whenever it changes. */
function Live({ value, className = "" }: { value: string; className?: string }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={value}
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: EASE }}
        className={`inline-block rounded-md px-2 py-0.5 text-[11.5px] font-semibold ${pill(value)} ${className}`}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

export function EventDayTimeline() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const progress = ((active + 1) / steps.length) * 100;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
      {/* Atmospheric stadium backdrop */}
      <Image
        src="/images/home/serve-leagues.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 scale-110 object-cover opacity-30 blur-md"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/80 via-[#2a1650]/85 to-navy-950" />

      <div className="container-page">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="max-w-[480px] text-[clamp(2rem,3.6vw,2.9rem)] font-bold leading-[1.1] tracking-tight">
              When event day changes the plan.
            </h2>
            <p className="mt-4 max-w-[480px] text-[16px] leading-relaxed text-white/70">
              Step through 26 minutes at Northfield Arena. Watch the record build as each organization acts.
            </p>
          </div>
          <SampleBadge tone="dark" />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <Reveal delay={0.05}>
            {/* Progress */}
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-yellow"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: EASE }}
              />
            </div>

            <div role="tablist" aria-label="Timeline" className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {steps.map((s, i) => {
                const selected = i === active;
                return (
                  <button
                    key={s.time}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    className={`relative rounded-lg border px-2 py-2.5 text-center transition-colors duration-300 ${
                      selected
                        ? "border-transparent text-ink"
                        : i < active
                          ? "border-white/25 text-white/80 hover:bg-white/5"
                          : "border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="timeline-active"
                        className="absolute inset-0 rounded-lg bg-brand-yellow shadow-[0_8px_24px_-8px_rgba(254,207,35,0.8)]"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative block font-heading text-[15px] font-semibold">{s.time}</span>
                    <span className="relative block text-[11px]">{s.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.time}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <p className="font-heading text-[34px] font-bold text-brand-yellow">
                    {step.time} <span className="text-[13px] font-medium text-white/60">PDT</span>
                  </p>
                  <h3 className="mt-2 text-[21px] font-bold">{step.title}</h3>
                  <p className="mt-4 text-[14px] text-white/70">{step.meta}</p>
                  <p className="mt-4 border-t border-white/10 pt-4 text-[13.5px] text-white/80">
                    <strong className="font-semibold text-white">What this means:</strong> {step.meaning}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setActive((i) => Math.max(0, i - 1))}
                disabled={active === 0}
                className="rounded-lg border border-white/25 px-5 py-2.5 font-heading text-[14px] font-semibold text-white transition-all hover:bg-white/10 disabled:opacity-30"
              >
                Earlier
              </button>
              <button
                onClick={() => setActive((i) => Math.min(steps.length - 1, i + 1))}
                disabled={active === steps.length - 1}
                className="rounded-lg bg-brand-yellow px-5 py-2.5 font-heading text-[14px] font-semibold text-ink shadow-[0_10px_24px_-10px_rgba(254,207,35,0.9)] transition-all hover:-translate-y-0.5 hover:bg-brand-yellow-hover disabled:opacity-30"
              >
                Next change
              </button>
            </div>
          </Reveal>

          {/* Live record */}
          <Reveal delay={0.15} y={40}>
            <div className="rounded-2xl bg-[#fbfaf7] p-6 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <p className="font-heading text-[16px] font-semibold">
                Record at{" "}
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={step.time}
                    className="inline-block"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    {step.time}
                  </motion.span>
                </AnimatePresence>{" "}
                PDT
              </p>

              <dl className="mt-4 divide-y divide-black/[0.07] border-t border-black/[0.07] text-[14px]">
                <div className="flex items-center justify-between py-4">
                  <dt className="text-ink-muted">Scheduled start</dt>
                  <dd className="flex items-baseline gap-2">
                    {step.start !== "12:15" && <span className="text-[15px] text-ink-muted line-through">12:15</span>}
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={step.start}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="inline-block font-heading text-[26px] font-bold"
                      >
                        {step.start}
                      </motion.span>
                    </AnimatePresence>
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-ink-muted">EX-104 Turnstile 4</dt>
                  <dd><Live value={step.ex104} /></dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-ink-muted">EX-105 Entry backlog</dt>
                  <dd><Live value={step.ex105} /></dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-ink-muted">Start-time decision</dt>
                  <dd><Live value={step.decision} /></dd>
                </div>
                <div className="py-4">
                  <dt className="text-ink-muted">Acknowledgments</dt>
                  <dd className="mt-3 grid gap-2 sm:grid-cols-2">
                    {ackParties.map((party, i) => (
                      <div key={party} className="flex items-center justify-between gap-2 rounded-lg bg-[#efece5] px-3 py-2 text-[12.5px]">
                        <span className="text-ink">{party}</span>
                        <Live value={step.acks[i]} />
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
              <p className="text-[12px] text-ink-muted">Sent or delivered is not treated as acknowledged.</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 flex max-w-[620px] gap-3 rounded-2xl border border-dashed border-white/25 px-6 py-5 text-[13.5px] leading-relaxed text-white/70">
            <Wifi className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
            <span>
              <strong className="font-semibold text-white">Venue connectivity is planned, not assumed.</strong>{" "}
              Connectivity requirements and the operating procedure for interruptions are agreed before a live-event
              pilot.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
