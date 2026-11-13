"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const solutionFaqs = [
  {
    q: "What is Zoiko Sports Solutions?",
    a: "It is the outcome-led part of Zoiko Sports that helps leagues, clubs and venue operators identify operational coordination problems and explore a suitable first workflow. The initial focus is competition and venue coordination; capabilities remain subject to validated release scope.",
  },
  {
    q: "Can several organizations work on one event?",
    a: "Yes. An organizer, venue and clubs can each contribute to the same event. Access and actions follow each organization, role and event assignment, and participation never merges rights, records or decision authority across organizations.",
  },
  {
    q: "Does Zoiko Sports decide when a venue is safe to open?",
    a: "No. A recorded check or software status is not a venue safety authorization. Safety, sporting and operational decisions stay with the people authorized to make them.",
  },
  {
    q: "How are event-day changes and approvals treated?",
    a: "The issue, the assigned owner and the authorized decision are recorded separately, with the source, actor and time kept on each record — so a reviewer can tell what happened from what was merely proposed.",
  },
  {
    q: "Are updates automatically acknowledged when sent?",
    a: "No. Sent, delivered and acknowledged are tracked as distinct states. A message is never marked complete until a person confirms it.",
  },
  {
    q: "Can Zoiko Sports integrate with our current systems?",
    a: "A pilot can identify which existing systems supply schedule or venue context, what information may be shared and which exchanges are in scope. Any supported approach must be agreed and validated before it is relied on operationally.",
  },
  {
    q: "How would we start a pilot?",
    a: "Start with one event or fixture block. Agree the participating organizations, workflows, data, decision owners, support arrangements and success measures before any live pilot.",
  },
];

export function SolutionsFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-[26px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about Zoiko Sports solutions</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/solution-overview/faq-tennis-forehand.webp"
            alt="Tennis player in a red dress following through on a forehand"
            sizes="340px"
            className="aspect-[340/469] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {solutionFaqs.map((f, i) => {
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
