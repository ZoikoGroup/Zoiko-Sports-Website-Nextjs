"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

// NOTE: only the first answer came from the design; review the rest before launch.
const competitionFaqs = [
  {
    q: "What is competition operations software?",
    a: "It helps competition organizers plan and coordinate the fixtures, assigned responsibilities, schedule changes and recorded decisions involved in delivering a sporting event. Zoiko Sports is being developed with an initial focus on connecting organizer-side work to relevant club and venue context.",
  },
  {
    q: "How do we know an update was acknowledged?",
    a: "Publication, queuing, delivery and human acknowledgment are tracked as separate events. A delivered message is not treated as an acknowledgment until the recipient confirms it.",
  },
  {
    q: "Can the platform decide if a venue is safe to open?",
    a: "No. The authorized venue team retains control of local operational and safety decisions. A schedule or check status in Zoiko Sports is never a venue safety certification.",
  },
  {
    q: "Does Zoiko Sports replace our competition scheduling tools?",
    a: "Not by default. Pilot scoping identifies the source schedules and approved data exchange; Zoiko Sports connects existing systems rather than assuming replacement.",
  },
  {
    q: "What happens if venue connectivity is interrupted?",
    a: "Connectivity requirements and the fallback procedure for interruptions are agreed during pilot scoping, before any live event.",
  },
  {
    q: "How does a competition organizer start?",
    a: "Start with one competition event or fixture block. Agree the participating organizer, clubs and venue, the workflow to assess, responsible roles and success measures before the pilot begins.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function CompetitionFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[356px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about competition operations</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-8 lg:block">
          <Photo
            src="/images/competition-operations/faq-pole-vault.webp"
            alt="Pole vaulter swinging upward on a bending pole"
            sizes="356px"
            className="aspect-[356/411] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {competitionFaqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={f.q} className="border-b border-[#DEDAD0]">
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
