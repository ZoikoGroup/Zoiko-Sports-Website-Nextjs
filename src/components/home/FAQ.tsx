"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const faqs = [
  {
    q: "What is Zoiko Sports?",
    a: "Zoiko Sports is a sports operations technology platform from Zoiko Tech Inc., a Zoiko Group company. Its initial commercial focus is coordinating competition and venue operations across the organizations responsible for delivering events.",
  },
  {
    q: "Who is it for?",
    a: "Organizations that share responsibility for delivering an event: leagues and competition organizers, clubs, and venue operators. Officials, event staff, and service partners can take part where they are included in a pilot.",
  },
  {
    q: "How is access handled across organizations?",
    a: "Access is scoped to the participating organizations and authorized roles. Shared context doesn’t mean everyone sees everything — each organization works with the information it is authorized to use for the event.",
  },
  {
    q: "Does it work with poor venue connectivity?",
    a: "Venue connectivity is planned, not assumed. Connectivity requirements and the operating procedure for interruptions are agreed during scoping, before a live-event pilot.",
  },
  {
    q: "Can it connect to our current systems?",
    a: "The pilot agreement identifies what is imported, integrated, or handled manually. Describe the systems involved during scoping; no connector is promised until it has been validated.",
  },
  {
    q: "Who owns the data?",
    a: "Data ownership, permissions, retention, and processing terms are set out in the pilot agreement and Data Processing Addendum. The Trust Center explains how Zoiko Sports approaches data handling.",
  },
  {
    q: "What does a pilot cost?",
    a: "A pilot is a scoped evaluation, not a free trial. Commercial terms depend on the agreed scope — the event or fixture block, participating organizations, workflow, and support — and are confirmed in writing before the pilot starts.",
  },
  {
    q: "Is this a live scores, fan, or betting product?",
    a: "No. Zoiko Sports is operations software for the organizations that deliver events. It coordinates schedules, readiness, exceptions, and decisions; it is not a live scores, fan engagement, or betting product.",
  },
  {
    q: "How do we get started?",
    a: "Send a pilot request with one event or fixture block in mind. We qualify the request, then scope participants, workflow, responsibilities, and evaluation measures with you before anything goes live.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="bg-[#efece5] py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
        <Reveal>
          <h2 className="text-[clamp(2rem,3.6vw,2.6rem)] font-bold leading-tight tracking-tight text-ink">
            Buyer questions
          </h2>
          <p className="mt-3 max-w-[280px] text-[16px] leading-relaxed text-ink-muted">
            Straight answers on access, connectivity, data, and cost.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="border-t border-black/[0.09]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              return (
                <li key={f.q} className="border-b border-black/[0.09]">
                  <button
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`font-heading text-[16.5px] font-semibold transition-colors duration-300 ${
                        isOpen ? "text-ink" : "text-ink/85 group-hover:text-brand-blue"
                      }`}
                    >
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink transition-colors duration-300 ${
                        isOpen ? "bg-brand-yellow" : "group-hover:bg-white"
                      }`}
                    >
                      <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </motion.span>
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
                        <p className="max-w-[640px] pb-6 text-[15px] leading-[1.7] text-ink-muted">{f.a}</p>
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
