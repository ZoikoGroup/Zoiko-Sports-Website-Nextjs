"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    title: "Qualify",
    text: "Confirm the organization, sport/event context, coordination problem, timing, and partner organizations.",
  },
  {
    title: "Scope",
    text: "Define the event or fixture block, participating organizations, roles, workflows, data, integrations, connectivity assumptions, and success measures.",
  },
  {
    title: "Configure",
    text: "Configure only the agreed pilot workflow; establish permissions, owners, support channels, and operating procedures.",
  },
  {
    title: "Operate",
    text: "Run the agreed workflow for the pilot event(s), with support only as defined in the written pilot terms.",
  },
  {
    title: "Evaluate",
    text: "Review agreed measures, exceptions, adoption, operational fit, and expansion requirements; decide whether to extend or stop.",
  },
];

// The tennis and stadium images carry a caption at the bottom; the overlapping
// cards below cover it, matching the design.
const images = [
  { src: "/images/home/sport-stadiums.png", alt: "Stadium bowl under a bright sky" },
  { src: "/images/home/sport-football.png", alt: "Amateur football match" },
  { src: "/images/home/sport-tennis.png", alt: "Covered tennis courts" },
];

const yours = [
  "Executive sponsor and named operations lead",
  "Suitable event or fixture block",
  "Current schedules, checklists, and approval steps",
  "Relevant partner-organization participation",
  "Authorized data and system access where required",
];

const ours = [
  "Named Zoiko pilot owner",
  "Configuration of the agreed workflow",
  "Agreed onboarding materials and sessions",
  "Support within written hours, channels, and escalation terms",
  "Joint evaluation using the agreed measures",
];

const measures = [
  "Percentage of in-scope checks completed by agreed deadlines, with the denominator fixed before the event.",
  "Elapsed time from exception creation to recorded resolution for in-scope exception types.",
  "Percentage of in-scope decisions carrying the required approval fields and source references.",
  "Percentage of intended pilot users who completed the agreed critical workflow at least once.",
  "Number and type of manual workarounds required during the pilot.",
];

export function PilotProcess() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(trackRef, { amount: 0.5 });

  useEffect(() => {
    if (!autoplay || !inView) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % steps.length), 2600);
    return () => clearTimeout(t);
  }, [active, autoplay, inView]);

  const pick = (i: number) => {
    setActive(i);
    setAutoplay(false);
  };

  return (
    <section className="bg-[#f4f2ec] py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-tight tracking-tight text-ink">
            Start with one event. Prove the workflow before expanding.
          </h2>
          <p className="mt-4 max-w-[460px] text-[16px] leading-relaxed text-ink-muted">
            A pilot is a scoped evaluation, not a free trial. Here is exactly what happens after you send a request.
          </p>
        </Reveal>

        {/* Step track */}
        <div ref={trackRef} className="relative mt-12">
          <div className="absolute left-5 right-5 top-5 hidden h-0.5 bg-ink/15 md:block" />
          <motion.div
            className="absolute left-5 top-5 hidden h-0.5 bg-navy-950 md:block"
            animate={{ width: `calc(${(active / (steps.length - 1)) * 100}% - ${(active / (steps.length - 1)) * 40}px)` }}
            transition={{ duration: 0.6, ease: EASE }}
          />
          <ol className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => {
              const selected = i === active;
              return (
                <li key={s.title}>
                  <button
                    onClick={() => pick(i)}
                    onMouseEnter={() => pick(i)}
                    aria-current={selected ? "step" : undefined}
                    className="group text-left"
                  >
                    <motion.span
                      animate={{ scale: selected ? 1.12 : 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={`grid h-10 w-10 place-items-center rounded-full border-2 font-heading text-[13px] font-semibold transition-colors duration-300 ${
                        selected
                          ? "border-navy-950 bg-brand-yellow text-ink shadow-[0_0_0_6px_rgba(254,207,35,0.25)]"
                          : i < active
                            ? "border-navy-950 bg-navy-950 text-white"
                            : "border-navy-950 bg-[#f4f2ec] text-ink"
                      }`}
                    >
                      0{i + 1}
                    </motion.span>
                    <span className="mt-5 block font-heading text-[18px] font-bold text-ink">{s.title}</span>
                    <span
                      className={`mt-2 block text-[13.5px] leading-[1.55] transition-colors duration-300 ${
                        selected ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {s.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Images with overlapping detail cards */}
        <RevealGroup className="mt-14 grid grid-cols-3 gap-3 sm:gap-4">
          {images.map((img) => (
            <RevealItem key={img.src} className="group overflow-hidden rounded-t-2xl">
              <div className="relative h-28 sm:h-44 lg:h-[230px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="relative z-10 -mt-10 grid gap-5 md:grid-cols-2 md:px-4 lg:-mt-12">
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-black/[0.07] bg-[#fbfaf7] p-6 shadow-[0_24px_50px_-24px_rgba(29,20,51,0.3)] transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-[19px] font-bold text-ink">Who brings what</h3>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {[
                  { heading: "Your organization and partners", items: yours },
                  { heading: "Zoiko Sports", items: ours },
                ].map((col) => (
                  <div key={col.heading}>
                    <p className="font-heading text-[13px] font-semibold text-ink">{col.heading}</p>
                    <ul className="mt-3 space-y-2.5">
                      {col.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-[13px] leading-snug text-ink-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-black/[0.07] bg-[#fbfaf7] p-6 shadow-[0_24px_50px_-24px_rgba(29,20,51,0.3)] transition-transform duration-500 hover:-translate-y-1">
              <h3 className="text-[19px] font-bold text-ink">Example evaluation measures</h3>
              <ul className="mt-5 space-y-3">
                {measures.map((m) => (
                  <li key={m} className="flex gap-2.5 text-[13px] leading-snug text-ink-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
