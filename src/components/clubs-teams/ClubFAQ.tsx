"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const clubFaqs = [
  {
    q: "What is Zoiko Sports for clubs and teams?",
    a: "Zoiko Sports is being developed to help club operations managers, secretaries and event-day leads coordinate preparation for a fixture or event with the relevant organizer and venue teams, within the organizations and roles authorized to see it.",
  },
  {
    q: "What does a venue readiness count like \"14 of 16 checks complete\" mean for my club?",
    a: "It is the venue's own progress on checks it owns. Your club can see the authorized status, but the count is not a safety certification and does not mean the venue is cleared to open — that decision stays with the venue and organizer.",
  },
  {
    q: "Does Zoiko Sports manage our team roster or athlete data?",
    a: "No. The initial focus is event preparation: assigned club contacts, tasks, venue dependencies and recorded decisions. Player roster and athlete data management is not assumed.",
  },
  {
    q: "How does a pilot work for a club?",
    a: "Start with one home event or an agreed, bounded series. The organizations, workflow, responsibilities, operating limits and evaluation measures are agreed before the pilot begins.",
  },
  {
    q: "Can we connect our existing calendar or scheduling tool?",
    a: "Integrations are not assumed. Any connection to an existing tool would be scoped and validated as part of a pilot rather than promised up front.",
  },
  {
    q: "What if our venue or organizer isn’t using Zoiko Sports yet?",
    a: "A club workflow depends on the organizer and venue that own the schedule and readiness decisions. We'd assess whether those organizations can take part before agreeing a pilot.",
  },
  {
    q: "How does our club get started?",
    a: "Tell us which event, organizations and coordination gaps matter. We'll assess whether a bounded pilot is appropriate and agree the workflow and measures before use.",
  },
];

export function ClubFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[361px_1fr] lg:gap-[18px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions from clubs and teams</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/clubs-teams/faq-pole-vault.webp"
            alt="Pole vaulter clearing the bar, arched over a fully bent pole"
            sizes="361px"
            className="aspect-[361/446] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {clubFaqs.map((f, i) => {
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
