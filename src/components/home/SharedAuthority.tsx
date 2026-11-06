"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";

const controls = [
  {
    title: "Organization and role access",
    text: "Scope access to the participating organizations and authorized roles.",
    rows: ["requested", "approved"],
  },
  {
    title: "Approval authority",
    text: "Record who approved a decision, in which role, and when it was recorded.",
    rows: ["approved", "recorded"],
  },
  {
    title: "Source context",
    text: "Show the recorded source reference and latest update time for supported operational records.",
    rows: ["reason", "sources"],
  },
  {
    title: "Notification state",
    text: "Distinguish an update being queued, delivered, failed, and acknowledged.",
    rows: ["notification", "completion"],
  },
];

const record = [
  { id: "decision", label: "Decision", value: "Start moved from 12:15 to 12:25 PDT" },
  { id: "reason", label: "Reason", value: "Entry backlog remained after the turnstile restart" },
  { id: "requested", label: "Requested by", value: "Venue Operations • Northfield Arena" },
  { id: "approved", label: "Approved by", value: "Competition Director • Riverside League" },
  { id: "recorded", label: "Recorded", value: "September 26, 2026 • 12:15 PDT" },
  { id: "sources", label: "Source references", value: "EX-104 Turnstile outage • EX-105 Entry backlog" },
  {
    id: "notification",
    label: "Notification state at 12:16",
    value: "Officials and both clubs acknowledged • stewarding lead acknowledgment pending",
  },
  { id: "completion", label: "Completion", value: "Stewarding lead acknowledged at 12:18 PDT" },
];

export function SharedAuthority() {
  const [active, setActive] = useState(0);
  const highlighted = controls[active].rows;

  return (
    <section className="bg-[#efece5] py-20 lg:py-28">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <h2 className="text-[clamp(2rem,3.6vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-ink">
              Share the operation.
              <br />
              Keep authority explicit.
            </h2>
            <p className="mt-4 max-w-[460px] text-[16px] leading-relaxed text-ink-muted">
              Shared context doesn’t mean everyone sees everything. Select a control to see where it shows up in a
              recorded decision.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul role="radiogroup" aria-label="Controls" className="mt-10 border-t border-black/[0.08]">
              {controls.map((c, i) => {
                const selected = i === active;
                return (
                  <li key={c.title} className="border-b border-black/[0.08]">
                    <button
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="group flex w-full gap-4 py-5 text-left"
                    >
                      <span
                        className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 transition-all duration-300 ${
                          selected
                            ? "scale-110 border-ink bg-brand-yellow text-ink"
                            : "border-ink/40 text-ink/50 group-hover:border-ink"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>
                        <span
                          className={`block font-heading text-[16.5px] font-semibold transition-colors ${
                            selected ? "text-ink" : "text-ink/80 group-hover:text-ink"
                          }`}
                        >
                          {c.title}
                        </span>
                        <span className="mt-1 block text-[13.5px] leading-snug text-ink-muted">{c.text}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40}>
          <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-[#fbfaf7] shadow-[0_40px_80px_-30px_rgba(29,20,51,0.35)] lg:mt-14">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-navy-950 px-6 py-5 text-white">
              <p className="font-heading text-[16px] font-semibold">Decision record</p>
              <p className="text-[12px] text-white/60">Riverside Invitational • Sep 26, 2026</p>
            </div>
            <dl>
              {record.map((row) => {
                const on = highlighted.includes(row.id);
                return (
                  <motion.div
                    key={row.id}
                    animate={{ backgroundColor: on ? "#fdf3cc" : "rgba(251,250,247,0)" }}
                    transition={{ duration: 0.35 }}
                    className="relative grid grid-cols-[minmax(120px,0.8fr)_1.4fr] gap-4 border-t border-black/[0.06] px-6 py-4"
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-1 origin-top bg-brand-yellow"
                      animate={{ scaleY: on ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <dt className="text-[13px] text-ink-muted">{row.label}</dt>
                    <dd className="font-heading text-[14px] font-semibold leading-snug text-ink">{row.value}</dd>
                  </motion.div>
                );
              })}
            </dl>
            <div className="border-t border-black/[0.06] px-6 py-4">
              <SampleBadge />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
