"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const multiEventFaqs = [
  {
    q: "What is a multi-event operating model?",
    a: "It is a way of applying an agreed coordination workflow across a defined set of fixtures, while keeping readiness, approvals and exceptions specific to each event.",
  },
  {
    q: "Can every organization in a program see every event?",
    a: "No. Being part of a program does not grant visibility into every event. Each organization sees only the events and records its agreed role permits, checked event by event.",
  },
  {
    q: "Can organizations compare fixtures in a program?",
    a: "Yes, but only for the events they are authorized to see. Unknown values are shown as unknown — never treated as zero or estimated.",
  },
  {
    q: "Is a multi-event operating model the same as automated scheduling?",
    a: "No. It coordinates an agreed workflow across fixtures. Schedule changes are proposed, approved and recorded per event by the people accountable for them; nothing is silently applied to another fixture.",
  },
  {
    q: "Can a program include events from more than one organizer?",
    a: "Where agreed during scoping, yes. Each event keeps its own organizer, venue and decision authority; a program coordinator cannot approve on another organization’s behalf.",
  },
  {
    q: "Is every sport or market supported?",
    a: "Not yet. Availability depends on the sport, market and the organizations involved, and is confirmed while scoping a pilot.",
  },
];

export function MultiEventFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[346px_1fr] lg:gap-[34px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about coordinating a fixture block</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/multi-event-operating-model/faq-table-tennis.webp"
            alt="Table tennis player in pink ready to play a backhand"
            sizes="346px"
            className="aspect-[346/397] w-full rounded-none!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {multiEventFaqs.map((f, i) => {
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
