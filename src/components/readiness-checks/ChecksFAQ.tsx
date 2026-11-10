"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const checksFaqs = [
  {
    q: "What are readiness checks for sports events?",
    a: "They are agreed operational confirmations or tasks tied to an event, with an owner, due time and recorded state. A governed workflow may also include sources, evidence and review. A completed check does not automatically approve an event or venue.",
  },
  {
    q: "Can venue, club and competition teams see the same checks?",
    a: "Only where a check is expressly shared. Each organization sees the checks within its own organization, event and role scope; shared event context does not mean unrestricted access.",
  },
  {
    q: "What happens if evidence is missing or a check changes after completion?",
    a: "Missing evidence stays a visible state rather than being assumed. If a completed check changes, it is reopened with the reason, the person who changed it and a new revision — the earlier value is not overwritten.",
  },
  {
    q: "Is a completed check the same as an approved decision?",
    a: "No. A recorded check is information for the responsible people. Operational, competition, venue, medical and safeguarding decisions remain separate and are made by authorized duty holders.",
  },
  {
    q: "Can Zoiko Sports send readiness reminders and acknowledgments?",
    a: "Delivery and acknowledgment states are proposed only where supported by implementation, and are never assumed across every channel. Sending an update is tracked separately from someone acknowledging it.",
  },
  {
    q: "Does the product work without connectivity at a venue?",
    a: "This page does not claim offline operation. Connectivity requirements and the fallback procedure for interruptions are agreed during pilot scoping, before any live event.",
  },
  {
    q: "How can our organization evaluate readiness checks with Zoiko Sports?",
    a: "Start with one event or fixture block. Agree the participating organizations, in-scope checks and sources, approval and duty boundaries, and the success measures before live operation.",
  },
];

export function ChecksFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[359px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Readiness Checks: common questions</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-8 lg:block">
          <Photo
            src="/images/readiness-checks/faq-tennis-forehand.webp"
            alt="Tennis player hitting a forehand on a clay court"
            sizes="359px"
            className="aspect-[358/446] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {checksFaqs.map((f, i) => {
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
