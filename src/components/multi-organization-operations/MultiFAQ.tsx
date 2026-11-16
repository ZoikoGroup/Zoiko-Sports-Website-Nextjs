"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const multiFaqs = [
  {
    q: "What is multi-organization operations in Zoiko Sports?",
    a: "It describes how the organizations involved in one event — an organizer, participating venues and clubs — can coordinate authorized operational information while each organization keeps its own decision authority. The initial focus is organizers, venues and clubs.",
  },
  {
    q: "Are sent event updates treated as acknowledged?",
    a: "No. Delivery and acknowledgment are tracked separately for each organization. An update only counts as acknowledged once an authorized recipient has actually responded — never assumed from a message being sent.",
  },
  {
    q: "Does the platform replace existing scheduling or venue systems?",
    a: "Replacement is not assumed. The initial focus is the coordination between organizations around one event; any connection to existing systems would be scoped and validated as part of a pilot.",
  },
  {
    q: "Does Zoiko Sports certify that an event or venue is safe?",
    a: "No. A recorded check status is a coordination indicator with a named owner and due time. Venue safety, gate opening and emergency decisions stay with the authorized people in each organization.",
  },
  {
    q: "How is data access and privacy handled between organizations?",
    a: "Access is scoped by event, organization and role, time-bounded and revocable. Each organization sees only what its role permits, and an unauthorized request returns a generic denial that never reveals restricted content.",
  },
  {
    q: "How can our league, venue and clubs get started?",
    a: "Identify the organizer, participating venues and clubs, the coordination problem and the measures that would make a pilot worth evaluating. Submitting a request starts a review; it does not confirm a pilot.",
  },
];

export function MultiFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[308px_1fr] lg:gap-[18px]`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about multi-organization operations</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-4 lg:block">
          <Photo
            src="/images/multi-organization-operations/faq-tennis-forehand.webp"
            alt="Tennis player stretching wide into a forehand"
            sizes="308px"
            className="aspect-[308/388] w-full rounded-md!"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {multiFaqs.map((f, i) => {
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
