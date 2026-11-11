"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const decisionFaqs = [
  {
    q: "What are decision and approval records in sports event operations?",
    a: "They connect a proposed change with the authorized person who responded, their role and organization, the recorded time, the reason and relevant supporting information. The resulting schedule update and communication to other organizations are separate steps.",
  },
  {
    q: "How do venue operations and competition organizers coordinate a change?",
    a: "Venue Operations submits a request with the operational condition and reason behind it. The competition organizer’s authorized role reviews the linked evidence and records a decision; applying and communicating the change are tracked separately.",
  },
  {
    q: "Is a delivered update the same as acknowledgment?",
    a: "No. A queued notice, a delivered message and a human acknowledgment are tracked as distinct, attributable events for each recipient.",
  },
  {
    q: "Can one organization see another organization’s private records?",
    a: "No. Shared event participation does not grant universal access. Search, filters and records are scoped server-side by organization, role and event.",
  },
  {
    q: "Can a past approval record be corrected?",
    a: "Yes, but a correction is recorded alongside the original with its own actor, time and reason — the original is never written over.",
  },
  {
    q: "Does Zoiko Sports make venue safety or sporting decisions?",
    a: "No. A recorded approval does not replace competition, venue, safety or emergency authority. Decisions stay with the people accountable for them.",
  },
  {
    q: "Can this integrate with an existing competition or venue system?",
    a: "Only where an integration is validated for the agreed workflow. Imported information should keep its source identity and update time; no seamless integration is claimed.",
  },
  {
    q: "How would our organization get started?",
    a: "Start with one event. Define the participating organizations, decision roles, change types, evidence and measures before a pilot begins.",
  },
];

export function DecisionFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[359px_1fr] lg:gap-6`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about decision and approval records</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/decision-approval-records/faq-kickboxer.webp"
            alt="Kickboxer in gloves raising a knee against a teal backdrop"
            sizes="359px"
            className="aspect-[359/503] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {decisionFaqs.map((f, i) => {
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
                        <p className="max-w-[880px] pb-5 text-[14.5px] leading-[1.7] text-ink-muted">{f.a}</p>
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
