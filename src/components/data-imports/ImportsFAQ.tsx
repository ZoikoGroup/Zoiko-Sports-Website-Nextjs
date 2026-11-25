"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker, Lead, sectionPad, SectionTitle, soft, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: the design only shows the questions; these answers are drafted from the page copy — review before launch.
const faqs = [
  {
    q: "What is Zoiko Sports Data Imports?",
    a: "It explains how existing records may be considered during a defined pilot scope. It describes an assessment approach, not a self-service import product.",
  },
  {
    q: "Can I upload a CSV or spreadsheet to Zoiko Sports?",
    a: "No specific file format or self-service upload is represented as supported. A bounded import is only included when the record category, permission, format and operating mode are approved in the written pilot scope.",
  },
  {
    q: "Which systems can connect to Zoiko Sports?",
    a: "No connector or automatic sync is claimed. The systems involved are described during pilot scoping, and any exchange method is assessed before it is agreed.",
  },
  {
    q: "Does importing a schedule automatically change the competition calendar?",
    a: "No. Imported information remains supplied information. A technically valid row does not approve a fixture change — that decision stays with an authorized person.",
  },
  {
    q: "Can a league provide venue readiness approvals?",
    a: "No. Each organization must have appropriate authority for the information it provides. Local readiness checks stay with the venue that controls them.",
  },
  {
    q: "What happens if source records contain errors?",
    a: "Invalid identifiers, missing time zones or conflicting records would require correction rather than being silently attached to another organization's event.",
  },
  {
    q: "Does file validation mean the event or venue is safe?",
    a: "No. A clean parse does not prove that information is true or authorized, and a completed exchange does not declare a venue ready or safe.",
  },
  {
    q: "Can a pilot work without importing existing data?",
    a: "Yes. A pilot can start with a defined workflow and agreed manual information where that is the safest, clearest option.",
  },
];

export function ImportsFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={`${soft} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="mx-auto max-w-[780px] text-center">
          <Kicker>Common questions</Kicker>
          <SectionTitle className="mt-4">Clear boundaries before data moves.</SectionTitle>
          <Lead className="mt-5">
            These answers describe the assessment posture of this page. They do not announce a self-service import
            product.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-[900px]">
          <ul className="border-t border-[#E6E2D8]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={f.q} className="border-b border-[#E6E2D8]">
                  <button
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center gap-6 py-[26px] text-left sm:gap-8"
                  >
                    <span className="w-6 shrink-0 text-[10.5px] font-semibold tracking-[0.12em] text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-heading text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-4 w-4 shrink-0 text-ink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
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
                        <p className="max-w-[760px] pb-6 pl-12 pr-10 text-[14.5px] leading-[1.7] text-ink-muted sm:pl-14">
                          {f.a}
                        </p>
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
