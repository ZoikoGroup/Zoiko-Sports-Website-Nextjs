"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, sectionPad, SectionTitle, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const venueFaqs = [
  {
    q: "What is Zoiko Sports for venue operators?",
    a: "Zoiko Sports is being developed to help venue directors, venue operations managers and safety/operations teams coordinate readiness checks, exceptions and decisions tied to an organizer’s event, within the organizations and roles authorized to see it.",
  },
  {
    q: "What happens if an equipment issue occurs on event day?",
    a: "Your venue records it as a technical exception with an owner. If the repair leaves a continuing impact — such as an entry backlog — that impact is recorded separately, and any schedule-impact review is requested from the organizer rather than decided by the venue.",
  },
  {
    q: "Does Zoiko Sports certify our venue as safe or authorize gates to open?",
    a: "No. A recorded check status is a coordination indicator only. Safety certification and the decision to open stay with your venue's authorized people and established procedures.",
  },
  {
    q: "Does this manage crowd safety, medical or safeguarding procedures?",
    a: "No. Crowd safety, medical and safeguarding procedures remain with the responsible organizations and their real-world processes. Zoiko Sports does not replace those decision makers.",
  },
  {
    q: "How does a pilot work for a venue?",
    a: "Start with one event at your venue, or an agreed block of fixtures where evidence supports it. The organizations, workflow, responsibilities, operating limits and evaluation measures are agreed before the pilot begins.",
  },
  {
    q: "Can we connect our existing venue systems?",
    a: "Integrations are not assumed. Any connection to existing venue systems would be scoped and agreed as part of a pilot, only where it is implemented and validated.",
  },
  {
    q: "What if our organizer isn’t using Zoiko Sports yet?",
    a: "Get in touch. The venue workflow is built around an organizer's schedule, so we would discuss with you whether a pilot can include the relevant organizer workflow in scope.",
  },
];

export function VenueFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[358px_1fr] lg:gap-[18px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions from venue operators</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/venue-operators/faq-javelin-approach.webp"
            alt="Heptathlete in a yellow top drawing the javelin back on her approach"
            sizes="358px"
            className="aspect-[357/446] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {venueFaqs.map((f, i) => {
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
