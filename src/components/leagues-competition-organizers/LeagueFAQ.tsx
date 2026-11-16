"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const leagueFaqs = [
  {
    q: "What is Zoiko Sports for leagues and competition organizers?",
    a: "Zoiko Sports is being developed to help leagues and competition organizers coordinate an event or fixture block with the venues and clubs involved, within the organizations and roles authorized to see it.",
  },
  {
    q: "Does a readiness count like \"14 of 16 checks complete\" mean the venue is safe to open?",
    a: "No. It is a coordination indicator showing the venue's own checks, each with a named owner and due time. Venue safety and opening authority stay with the venue — the count is never a safe-to-open certification.",
  },
  {
    q: "Is a notification sent the same as a club or official acknowledging it?",
    a: "No. Delivery and human acknowledgment are tracked separately for every recipient. An update only shows as acknowledged once an authorized person has actually responded to the current version.",
  },
  {
    q: "Can this expand to cover our whole season or multiple fixtures?",
    a: "Only step by step. A pilot starts with one event or a named, bounded fixture block, and extends further only once evidence and written terms support it — never as an open-ended schedule.",
  },
  {
    q: "How does a pilot work for a league?",
    a: "Agree the venue, participants, workflow, responsibilities and measures before the pilot begins. The pilot then moves through qualify, scope, configure, operate and evaluate.",
  },
  {
    q: "How does our league get started?",
    a: "Identify the venue, the participating organizations, the coordination problem and the measures that would make a pilot worth evaluating. Submitting a request starts a review; it does not confirm a pilot.",
  },
];

export function LeagueFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[361px_1fr] lg:gap-[18px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions from leagues and competition organizers</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/leagues-competition-organizers/faq-volleyball-dig.webp"
            alt="Volleyball player crouching low to dig the ball"
            sizes="361px"
            className="aspect-[360/388] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {leagueFaqs.map((f, i) => {
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
