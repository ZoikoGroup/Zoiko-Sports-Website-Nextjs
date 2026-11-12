"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const exceptionFaqs = [
  {
    q: "What is exception coordination at a sporting event?",
    a: "It is the process of recording an operational problem, identifying who owns the next action, assessing its event impact, routing any required decision to an authorized person, communicating agreed changes, and recording meaningful responses.",
  },
  {
    q: "Does fixing equipment automatically resolve the event impact?",
    a: "No. A technical restoration and its continuing operational impact are linked but separate records. Each has its own owner and is closed independently — restoring a turnstile does not clear the entry backlog it caused.",
  },
  {
    q: "Does sending an update mean a person acknowledged it?",
    a: "No. Queued, sent and delivered are delivery states. A human acknowledgment is recorded separately for each recipient, so a delivered message is never treated as an acknowledged one.",
  },
  {
    q: "Can organizations connect existing venue or competition systems?",
    a: "Only where an integration is validated for the agreed workflow. Imported information should keep its source identity and update time; no seamless integration is claimed.",
  },
  {
    q: "How would an organization evaluate Zoiko Sports?",
    a: "Start with one event or fixture block. Agree the participating organizations, exception taxonomy, decision authority, communication steps and evaluation measures before the pilot begins.",
  },
  {
    q: "Is Zoiko Sports available for every sport and market?",
    a: "Not yet. Availability depends on the sport, market and the organizations involved, and is confirmed while scoping a pilot.",
  },
];

export function ExceptionFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[346px_1fr] lg:gap-[34px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about coordinating event-day exceptions</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/exception-coordination/faq-surfer.webp"
            alt="Surfer crouching low on a yellow board through white water"
            sizes="346px"
            className="aspect-[346/405] w-full rounded-none!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {exceptionFaqs.map((f, i) => {
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
