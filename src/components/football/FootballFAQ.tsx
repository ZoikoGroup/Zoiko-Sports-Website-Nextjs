"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, sectionPad, SectionTitle, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const footballFaqs = [
  {
    q: "Is football/soccer a supported sport today?",
    a: "No football/soccer-specific workflow has been validated or published. This page explains an approach under review — not a confirmed product capability.",
  },
  {
    q: "What information should we prepare?",
    a: "Keep it high-level: the competition format, fixture timing, the types of organizations involved, the coordination challenge, and whether partner organizations are involved. Don’t include athlete medical, safeguarding or other sensitive participant information.",
  },
  {
    q: "Does this replace federation rules, officiating or compliance systems?",
    a: "No. Federation rules, officiating and compliance stay with the bodies and systems responsible for them. Zoiko Sports is not a federation-compliance product.",
  },
  {
    q: "Who decides whether a venue is safe to open or a kickoff can change?",
    a: "The authorized people in the responsible organizations, using their established procedures. Zoiko Sports can record a request and decision; it does not certify venue safety or change a kickoff on its own.",
  },
  {
    q: "Can this cover a full season or multiple fixtures?",
    a: "A pilot starts with one fixture, or an agreed fixture block where evidence supports it. Wider scope is only considered after evaluation, not assumed.",
  },
  {
    q: "What happens after we reach out?",
    a: "Your request goes through the same five-stage path as any sport: Qualify, Scope, Configure, Operate and Evaluate. A written scope is agreed before anything operates, and a pilot can stop at any gate.",
  },
];

export function FootballFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[352px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about football/soccer coordination</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/football/faq-football-chest.webp"
            alt="Player in a blue shirt leaping to chest the ball on a sports field"
            sizes="352px"
            className="aspect-[352/388] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {footballFaqs.map((f, i) => {
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
