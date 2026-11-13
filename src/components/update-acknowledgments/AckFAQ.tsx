"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const ackFaqs = [
  {
    q: "Is sending an update the same as receiving an acknowledgment?",
    a: "No. A sent update is a communication attempt. Delivery evidence, where supported, indicates a channel outcome. An acknowledgment requires a recorded action by an authorized person.",
  },
  {
    q: "What happens when an update is corrected or withdrawn?",
    a: "A correction is issued as a new version that supersedes the old one. Acknowledgments recorded against the earlier version are kept as history, and required recipients must acknowledge the current version again.",
  },
  {
    q: "Can clubs see other organizations’ acknowledgment status?",
    a: "No. Access is scoped to each participating organization, event and role. A club sees updates addressed to it and its own acknowledgment state — not other clubs’ responses or recipient lists.",
  },
  {
    q: "Does Zoiko Sports guarantee delivery or offline operation?",
    a: "No. Delivery evidence depends on the supported channel, and no offline mode is promised. When evidence is missing or partial, the status says so rather than assuming delivery or acknowledgment.",
  },
  {
    q: "How would an organization evaluate this workflow?",
    a: "Start with one event or fixture block. Agree the participants, update requirements, channels, response expectations and evaluation measures before live use.",
  },
];

export function AckFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-[17px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about update acknowledgments</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/update-acknowledgments/faq-figure-skater.webp"
            alt="Figure skater in a red costume gliding with arms outstretched"
            sizes="360px"
            className="aspect-[360/348] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {ackFaqs.map((f, i) => {
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
