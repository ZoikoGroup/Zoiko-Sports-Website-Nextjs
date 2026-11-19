"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { altBg, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const rugbyFaqs = [
  {
    q: "Is rugby a supported sport today?",
    a: "No rugby-specific workflow has been validated or published yet. This page explains an approach under review — not a confirmed product capability, and it does not imply support for any particular code.",
  },
  {
    q: "Who should start this conversation?",
    a: "The organizations that actually coordinate a fixture — leagues and competition organizers, or clubs and teams. Each retains the decisions its role requires.",
  },
  {
    q: "What information should we prepare?",
    a: "Keep it high-level: the rugby code or format, the competition, match timing, the types of organizations involved and the coordination challenge. Don’t include player medical, safeguarding or other sensitive participant information.",
  },
  {
    q: "Does this cover officials, referees or governing-body compliance?",
    a: "No. Refereeing, match officiating and governing-body compliance stay with the responsible bodies and their systems. Officials may take part only within an individually approved pilot scope.",
  },
  {
    q: "Can this cover a full season, multiple pitches or fixtures?",
    a: "A pilot starts with one fixture, or an agreed fixture block where evidence supports it. Wider scope across a season or several pitches is only considered after evaluation, not assumed.",
  },
  {
    q: "What happens after we reach out?",
    a: "Your request goes through the same five-stage path as any sport: Qualify, Scope, Configure, Operate and Evaluate. A written scope is agreed before anything operates, and a pilot can stop at any gate.",
  },
];

export function RugbyFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[364px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about rugby coordination</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/rugby/faq-rugby-break.webp"
            alt="Rugby player in green breaking through a tackle with the ball"
            sizes="364px"
            className="aspect-[364/383] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {rugbyFaqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={f.q} className="border-b border-[#ebe9df]">
                  <button
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-[18px] text-left"
                  >
                    <span className="font-heading text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-ink/40 transition-transform duration-300 ${isOpen ? "rotate-180 text-ink" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[900px] pb-5 text-[14.5px] leading-[1.7] text-ink-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
