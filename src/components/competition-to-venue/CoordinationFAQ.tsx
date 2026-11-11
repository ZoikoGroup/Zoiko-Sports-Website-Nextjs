"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const coordinationFaqs = [
  {
    q: "What is competition-to-venue coordination?",
    a: "It means aligning the organizer’s event or fixture plan with the venue tasks, responsibilities, approved changes and follow-up work that depend on it. Zoiko Sports is building an operating approach for this cross-organization coordination; actual supported workflows depend on validated product and pilot scope.",
  },
  {
    q: "Who decides whether a competition start time changes?",
    a: "The competition organizer’s authorized decision maker. A venue can document a timing impact and request a change; the approval, and the published schedule revision, are recorded separately with their own actor and time.",
  },
  {
    q: "How are information and records shared between organizations?",
    a: "Only where permitted for the event. Access is scoped by participating organization, assigned role and event, and enforced on the server. A shared event identifier does not grant access to unrelated records.",
  },
  {
    q: "Can Zoiko Sports connect to existing scheduling or venue systems?",
    a: "Not by default. Where an integration is validated for the agreed workflow, imported information should keep its source identity, update time and ownership. No partner logos, API availability or seamless integration are claimed.",
  },
  {
    q: "How are event-day changes and acknowledgments handled?",
    a: "A change request, the authorized decision and each recipient’s delivery and acknowledgment are tracked as separate, time-stamped records. Approval does not automatically close the venue work that depends on it.",
  },
  {
    q: "Is this available for every sport or every country?",
    a: "No universal availability is claimed. Supported sports, regions and workflows depend on validated product capability and the agreed pilot scope.",
  },
  {
    q: "What happens after we request a pilot?",
    a: "Start with one event and one coordination gap. Agree the participating organizations, owners, permissions, connectivity assumptions and the evidence needed to evaluate the pilot before it begins.",
  },
];

export function CoordinationFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[356px_1fr] lg:gap-6`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          {/* One line on wide screens; font scales with the viewport so it never overflows the column */}
          <SectionTitle className="xl:whitespace-nowrap xl:text-[length:min(2.25rem,2.6vw)]">
            Questions about competition-to-venue coordination
          </SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/competition-to-venue/faq-basketball-dribble.webp"
            alt="Basketball player driving to the basket with the ball"
            sizes="356px"
            className="aspect-[356/487] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {coordinationFaqs.map((f, i) => {
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
