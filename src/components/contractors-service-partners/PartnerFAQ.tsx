"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const partnerFaqs = [
  {
    q: "Who are Contractors & Service Partners in Zoiko Sports?",
    a: "Organizations that may contribute to an agreed event workflow alongside an organizer, club or venue. Navigation places them under Coordination Partners and marks participation as gated — not a separate initial buyer segment or an automatically available vendor service.",
  },
  {
    q: "Does accepting a task mean the venue is safe to open?",
    a: "No. Accepting or completing a task records the partner's response to its own assignment. Venue safety and opening authority stay with the venue and organizer, and are never delegated to a task status.",
  },
  {
    q: "Does Zoiko Sports validate supplier insurance or credentials?",
    a: "No. Credentialing, insurance, licensing and background checks remain with the responsible organizations. The platform does not verify or certify them.",
  },
  {
    q: "What happens if a service partner has no connectivity?",
    a: "No offline mode is promised. Delivery and acknowledgment are shown as they are actually recorded, so a missing response stays visible as pending rather than being assumed — the accountable organization follows up through its own agreed procedures.",
  },
  {
    q: "Does Zoiko Sports replace supplier contracts or purchasing tools?",
    a: "No. Purchase orders, invoices, pricing and worker files are out of scope. A task brief carries its owner, due time and current version — not commercial terms.",
  },
  {
    q: "How would a buyer include contractors in a pilot?",
    a: "An organizer or venue sponsors a named partner for one event or a bounded set of tasks. The sponsor, partner organization, role, permitted data and success measures are agreed before the pilot begins.",
  },
  {
    q: "Who owns contributed task and event data?",
    a: "Event records stay with the accountable organizer or venue that owns them. A partner's access is limited to its granted scope and ends with expiry, revocation or the end of the agreed event scope.",
  },
];

export function PartnerFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[361px_1fr] lg:gap-[18px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about contractors and service partners</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/contractors-service-partners/faq-badminton-lunge.webp"
            alt="Badminton player lunging low to return a shuttle"
            sizes="361px"
            className="aspect-[361/469] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {partnerFaqs.map((f, i) => {
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
