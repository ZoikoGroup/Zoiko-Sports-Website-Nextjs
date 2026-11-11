"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const readinessFaqs = [
  {
    q: "What is event readiness coordination?",
    a: "It is the agreed process of identifying an event’s preparation checks, assigning responsible people or organizations, tracking due times and recording dependencies that require human review. Zoiko Sports is being designed around that coordinated workflow; any available functionality depends on validated product and pilot scope.",
  },
  {
    q: "What would appear on a readiness checklist?",
    a: "The checks agreed for the event, each with an owning organization, an event-local due time, its current check state and any approval it depends on. What is included is agreed with the participating organizations during pilot scoping.",
  },
  {
    q: "Is a completed check the same as an approved decision?",
    a: "No. Completion is a record that the owner submitted an update. Any required approval is a separate human action by an authorized role, and no completion state certifies a venue or authorizes operations.",
  },
  {
    q: "Does Zoiko Sports offer live or offline event-readiness tracking?",
    a: "No live or offline capability is assumed. Connectivity arrangements are scoped and agreed before live-event usage, within the validated pilot scope.",
  },
  {
    q: "Can event readiness connect with existing venue systems?",
    a: "Only where an integration is validated for the agreed workflow. Source references should remain attributable, and no record is silently overwritten.",
  },
  {
    q: "What if a check is overdue, disputed or its owner changes?",
    a: "The check stays open and visible to the authorized teams with its owner and due time. Changes of owner or status are recorded alongside the earlier state rather than written over it.",
  },
  {
    q: "How could an organization evaluate Zoiko Sports?",
    a: "Start with one event. Agree the participating organizations, checks, owners, dates and measures before a pilot begins.",
  },
];

export function ReadinessFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[358px_1fr] lg:gap-6`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about event readiness coordination</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/event-readiness/faq-tennis-forehand.webp"
            alt="Tennis player leaping into a forehand on a blue hard court"
            sizes="358px"
            className="aspect-[358/469] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {readinessFaqs.map((f, i) => {
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
