"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

// NOTE: only the first answer came from the design; review the rest before launch.
const accessFaqs = [
  {
    q: "What does organization-based access mean in sports event management?",
    a: "Each participant sees and acts on only the event information authorized for their organization, role and responsibility. Shared event context does not create blanket visibility into another organization’s records.",
  },
  {
    q: "How are guests and time-limited participants handled?",
    a: "A guest is invited into a specific organization, event and role, with a grant that is designed to expire on an agreed schedule. A guest grant never widens into the inviting organization’s full records.",
  },
  {
    q: "What happens if someone tries a direct link to a record they are not authorized to see?",
    a: "The request is denied with a generic message. The response does not confirm whether the record exists or reveal its title, count or owner.",
  },
  {
    q: "What happens when access is revoked?",
    a: "Permissions are resolved at the moment of each request, so a revoked grant stops applying on the next action. Exports are re-checked at download time and an in-progress or completed export is invalidated.",
  },
  {
    q: "Can access changes be reviewed after the fact?",
    a: "Yes. Access-change history is designed to record who changed access, for which organization and role, and when — reviewable by authorized admins and never sent to marketing analytics.",
  },
  {
    q: "Does a participating organization have to be verified before joining an event?",
    a: "Yes. An organization is added to an event as an authorized participant before its people can act there; how participating organizations are verified is agreed during pilot scoping.",
  },
  {
    q: "Is this access model available today?",
    a: "The access rules, roles and examples on this page are proposed designs, not a statement of deployed or certified security controls. They are evaluated with organizations through a scoped pilot.",
  },
];

export function AccessFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[359px_1fr] lg:gap-7`}>
        {/* Heading sits above the list on desktop, so the photo starts level with the first question */}
        <Reveal className="lg:col-start-2">
          <SectionTitle>Questions about organizations and access</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:row-start-2 lg:mt-8 lg:block">
          <Photo
            src="/images/organizations-access/faq-volleyball.webp"
            alt="Volleyball player leaping to spike the ball"
            sizes="359px"
            className="aspect-[359/445] w-full"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-start-2 lg:row-start-2">
          <ul>
            {accessFaqs.map((f, i) => {
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
