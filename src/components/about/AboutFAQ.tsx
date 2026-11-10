"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, sectionPad, wrap } from "./shared";

// NOTE: only the first answer came from the design; review the rest before launch.
const aboutFaqs = [
  {
    q: "What is Zoiko Sports?",
    a: "Zoiko Sports is a global sports technology platform being built to connect competition and venue operations first, then progressively support a broader governed sports operating and intelligence layer.",
  },
  {
    q: "How does Zoiko Sports handle approvals?",
    a: "Approvals are recorded against the acting user, organization, role and time where the workflow supports it. Approval history preserves changes and corrections rather than overwriting them, and authority for real-world decisions stays with the authorized people and organizations.",
  },
  {
    q: "Does Zoiko Sports use AI?",
    a: "AI may assist with analysis and workflow over time. Authoritative records, permissions and responsibility remain governed outside the model, and AI capability is only described publicly once it is implemented, tested and governed.",
  },
  {
    q: "What is the One Sports Graph?",
    a: "It is an internal name for the long-term direction: a governed data model that connects sports entities and events—competitions, fixtures, venues, clubs, organizations and decisions—rather than leaving them isolated in product silos. Public use of the name is gated by brand and architecture approval.",
  },
  {
    q: "How does Zoiko Sports protect data between organizations?",
    a: "Access is scoped to organization, role and event responsibility. Shared context does not mean universal visibility—each participating organization works with the information it is authorized to use.",
  },
  {
    q: "Who owns data contributed to Zoiko Sports?",
    a: "Data ownership, permissions, retention and processing terms are set out in the pilot agreement and Data Processing Addendum. The Trust Center explains how Zoiko Sports approaches data handling.",
  },
  {
    q: "Where is Zoiko Sports based?",
    a: "Zoiko Sports is operated by Zoiko Tech Inc., a Zoiko Group company, headquartered in Sacramento, California, with a European headquarters in London, United Kingdom.",
  },
  {
    q: "How can an organization start?",
    a: "Scope a pilot around one event or fixture block. We agree the participating organizations, the workflow to connect, responsibilities and the measures that would make the pilot worth expanding.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`border-t border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[336px_1fr] lg:gap-11`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions people ask about Zoiko Sports</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-8 lg:block">
          <Photo
            src="/images/about/faq-surfer.webp"
            alt="Surfer carving a turn through white water"
            sizes="336px"
            className="aspect-[336/503] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {aboutFaqs.map((f, i) => {
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
