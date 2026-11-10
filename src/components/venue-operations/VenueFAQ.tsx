"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const venueFaqs = [
  {
    q: "What is Zoiko Sports Venue Operations?",
    a: "It is the proposed venue-side part of the Zoiko Sports operating model, focused on agreed event checks, responsible organizations, schedule dependencies, operational exceptions and review. Public feature claims must match what is validated for the selected pilot or release.",
  },
  {
    q: "Can venue teams manage event-day equipment incidents?",
    a: "The proposed workflow records an equipment issue and its operational impact as separate records, each with an owner and timestamps, so a restored device does not automatically close a continuing impact.",
  },
  {
    q: "Can a venue change the competition start time?",
    a: "No. A venue can document a timing impact and request a change. The competition’s authorized decision maker approves or declines it, and the published schedule revision is recorded separately.",
  },
  {
    q: "Can clubs and organizers see all venue records?",
    a: "No. Each role is scoped by organization, event and object. Organizers see expressly shared venue readiness for their own event; clubs see only checks and updates assigned to them.",
  },
  {
    q: "Does Zoiko Sports replace our existing venue systems?",
    a: "Not by default. Where an integration is validated for the agreed workflow, imported information should keep its source identity and ownership. No automatic multi-system coverage is claimed.",
  },
  {
    q: "How can we evaluate Zoiko Sports for a venue?",
    a: "Start with one event and one venue coordination problem. Agree the participating organizations, owners, permissions, connectivity assumptions and the evidence needed to evaluate the pilot before it begins.",
  },
];

export function VenueFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[359px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions venue teams ask</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-8 lg:block">
          <Photo
            src="/images/venue-operations/faq-javelin-wave.webp"
            alt="Javelin thrower waving to the crowd as he walks onto the track"
            sizes="359px"
            className="aspect-[358/411] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {venueFaqs.map((f, i) => {
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
