"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, ruled, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const reviewFaqs = [
  {
    q: "What is post-event review in Zoiko Sports?",
    a: "It is the process of comparing agreed event plans with recorded decisions, exceptions, communications and outstanding follow-up, so participating organizations can clarify what happened and what remains open.",
  },
  {
    q: "Who can see a review’s records?",
    a: "Each participating organization sees only the records within its own authorized event, organization and role scope. Sharing one event does not mean sharing one undivided record set.",
  },
  {
    q: "How are decisions and their authority tracked?",
    a: "A decision record keeps who requested the change, who approved it, and the role they held at the time. A record contributor cannot approve a decision by editing a field.",
  },
  {
    q: "What is the difference between delivered and acknowledged?",
    a: "Delivered means a notice reached a channel. Acknowledged means a person affirmatively confirmed it. The two are tracked and shown separately, with the actor and time.",
  },
  {
    q: "Can a reviewed record be corrected later?",
    a: "Yes. A correction is recorded as a separate revision with a diff and reason. Revisions made after a review opens or is signed off are flagged, never silently overwritten.",
  },
  {
    q: "What can be exported from a review?",
    a: "Exports follow the same organization, role and event scope as viewing. What can be exported, and in which format, is agreed as part of the pilot or customer terms.",
  },
  {
    q: "How can a league or venue evaluate this workflow?",
    a: "Scope a pilot around one event. Together we agree the participating organizations, the decisions to reconstruct, the follow-up workflow and the measures — with a baseline — before the pilot begins.",
  },
];

export function ReviewFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[359px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about post-event review</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-8 lg:block">
          <Photo
            src="/images/post-event-review/faq-sprint-start.webp"
            alt="Sprinter driving out of a start on an orange track"
            sizes="359px"
            className="aspect-[358/446] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {reviewFaqs.map((f, i) => {
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
