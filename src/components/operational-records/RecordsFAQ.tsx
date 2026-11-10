"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const recordsFaqs = [
  {
    q: "What are operational records in sports event management?",
    a: "They are event-linked entries describing schedules, readiness work, exceptions, requests, decisions, updates and follow-up activity. The design goal is to retain the source, responsible organization, timing and context for authorized review.",
  },
  {
    q: "Can a record be corrected after it is entered?",
    a: "Yes. A correction is recorded as a new version that links to the entry it replaces, with the person, role and time of the change. The earlier version is not silently overwritten.",
  },
  {
    q: "Is a record the same as an approved decision?",
    a: "No. A record describes what was reported, by whom and when. A decision is a separate record of an authorized person's response, which may cite one or more supporting records.",
  },
  {
    q: "How are late updates or conflicting sources handled?",
    a: "An import never silently overwrites a newer local value. A conflicting source is held for review by an authorized reviewer rather than auto-resolved, and both values stay visible until it is resolved.",
  },
  {
    q: "Can records and their history be exported?",
    a: "Export rights follow the same organization, role and event scope as viewing. What can be exported, and in which format, is agreed as part of the pilot or customer terms.",
  },
  {
    q: "Does this mean Zoiko Sports works offline?",
    a: "No. This page does not claim offline operation. Record timing distinguishes when something applied from when it was recorded; how entries are captured where connectivity is limited is agreed during pilot scoping.",
  },
  {
    q: "How can a league or venue evaluate Operational Records?",
    a: "Scope a pilot around one event. Together we agree the sources, participating organizations, correction ownership and the evaluation measures that would make the pilot worth expanding.",
  },
];

export function RecordsFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[359px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about operational records</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-8 lg:block">
          <Photo
            src="/images/operational-records/faq-javelin.webp"
            alt="Javelin thrower stretching into a throw on an athletics track"
            sizes="359px"
            className="aspect-[359/446] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {recordsFaqs.map((f, i) => {
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
                        <p className="max-w-[860px] pb-5 text-[14.5px] leading-[1.7] text-ink-muted">{f.a}</p>
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
