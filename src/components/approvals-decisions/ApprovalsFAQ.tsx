"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

// NOTE: only the first answer came from the design; review the rest before launch.
const approvalsFaqs = [
  {
    q: "Who can approve an event schedule change?",
    a: "An authorized role tied to the event’s agreed governance — such as a competition director — not whoever submitted the request.",
  },
  {
    q: "What happens if a request is rejected?",
    a: "The rejection is recorded with the deciding role, time and reason. The requesting organization is informed, and a revised request can be submitted as a new, separately recorded action.",
  },
  {
    q: "Who can see the source evidence linked to a decision?",
    a: "Evidence follows the same access model as the decision: visibility is scoped by organization, role and event responsibility, as agreed for the pilot.",
  },
  {
    q: "Does Zoiko Sports replace venue or competition authority?",
    a: "No. Authorized people and organizations retain authority for operational, safety and competition decisions. Zoiko Sports records and connects the context around those decisions; a software status never certifies a venue as safe.",
  },
  {
    q: "What does \"Illustrative workflow\" mean on this page?",
    a: "The records, names, requests and counts shown are fictional specimen data used to explain the proposed workflow. They do not describe a real event or customer.",
  },
  {
    q: "How can our organization start?",
    a: "Scope a pilot around one event or fixture block. Together we define the participating organizations, decision roles, change types, evidence and the measures that would make the pilot worth expanding.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function ApprovalsFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[352px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about approvals and decisions</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-8 lg:block">
          <Photo
            src="/images/approvals-decisions/faq-javelin.webp"
            alt="Javelin thrower stretching into a throw on an athletics track"
            sizes="352px"
            className="aspect-[352/365] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {approvalsFaqs.map((f, i) => {
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
