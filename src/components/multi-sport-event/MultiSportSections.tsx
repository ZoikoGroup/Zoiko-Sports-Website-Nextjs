"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DATA_EXCHANGE_MODES = [
  {
    title: "Manual exchange",
    description:
      "Share schedules, venue area requirements or exceptions directly during scoping, per sport.",
    footer: "AVAILABLE BY DEFAULT",
  },
  {
    title: "Approved import",
    description:
      "A defined, reviewed file or feed format for existing systems.",
    footer: "ASSESSED PER PILOT",
  },
] as const;

const FIVE_STAGES = [
  {
    step: "01",
    label: "Qualify",
    description: "Zoiko Sports reviews fit, sport mix and market.",
  },
  {
    step: "02",
    label: "Scope",
    description: "Participants, workflow and measures agreed in writing.",
  },
  {
    step: "03",
    label: "Configure",
    description:
      "A permission-scoped workflow, reviewed for security and privacy.",
  },
  {
    step: "04",
    label: "Operate",
    description:
      "Recorded coordination activity, with a human-authorized go/no-go.",
  },
  {
    step: "05",
    label: "Evaluate",
    description: "Extend, revise or stop — an authorized human decision.",
  },
] as const;

const MULTI_SPORT_FAQS = [
  {
    question: "Does Zoiko Sports support multi-sport events today?",
    answer:
      "No. Multi-Sport Events is marked future/gated under “Expand by Evidence.” No validated combination of sports, markets or released multi-sport workflow is established — a public availability claim would require separate evidence and approval.",
  },
  {
    question: "Does it automatically resolve clashes between sports?",
    answer:
      "No. Any schedule or shared-area clash identified during coordination is surfaced for human review and decision rather than automatically resolved.",
  },
  {
    question: "Can a completed venue check mean an area is safe to open?",
    answer:
      "No. A recorded readiness or venue check tracks operational status and ownership — it is not a safety certification or authorization to open an area.",
  },
  {
    question:
      "How would organizers, clubs and venue staff communicate across sports?",
    answer:
      "In a scoped multi-sport review, each organization’s role, handoff, exception path and acknowledgment expectations are defined explicitly rather than assumed.",
  },
  {
    question:
      "Does it integrate with calendars, scoring vendors or venue systems?",
    answer:
      "No shared calendar system, results/scoring vendor, venue platform or sport-federation relationship is assumed; data exchange starts with manual exchange by default and any import format is assessed per pilot.",
  },
  {
    question:
      "What happens after a Discuss Your Sport inquiry mentions more than one sport?",
    answer:
      "The inquiry routes to a shared review across the relevant sport mix and market fit — it does not confirm a pilot or support for any sport combination.",
  },
  {
    question:
      "How should we describe youth, medical or sensitive multi-sport requirements?",
    answer:
      "Describe the coordination boundaries and governance expectations at a high level during scoping so security, privacy and oversight needs can be reviewed before any workflow is configured.",
  },
] as const;

export default function MultiSportSections() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full bg-white text-[#1E1A3B] antialiased">
      {/* Section 1: Work with the information you already have */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Heading, Subcopy & 2 Cards */}
            <div className="lg:col-span-7">
              <h2 className="mb-3 text-[26px] leading-[1.18] font-bold tracking-[-0.02em] text-[#241E46] sm:text-[32px] lg:text-[34px]">
                Work with the information you already have.
              </h2>

              <p className="mb-7 max-w-[610px] text-[13px] leading-[1.58] font-normal text-[#5A5D72] sm:text-[13.5px]">
                No shared calendar system, results/scoring vendor, venue
                platform or sport-federation relationship is assumed. Data
                exchange is assessed per sport during scoping.
              </p>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {DATA_EXCHANGE_MODES.map((mode) => (
                  <div
                    key={mode.title}
                    className="flex min-h-[146px] flex-col justify-between rounded-[10px] border border-[#E6E2D8] bg-[#FAF9F6] p-5"
                  >
                    <div>
                      <h3 className="mb-1.5 text-[13.5px] leading-[1.35] font-bold text-[#241E46]">
                        {mode.title}
                      </h3>
                      <p className="text-[12px] leading-[1.52] font-normal text-[#5A5D72]">
                        {mode.description}
                      </p>
                    </div>

                    <div className="mt-4 text-[9.5px] font-semibold tracking-[0.11em] text-[#8E909E] uppercase">
                      {mode.footer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[12px] bg-[#EAE8E3]">
                <img
                  src="/images/multi/6.png"
                  alt="Athletes training together with kettlebells"
                  className="aspect-[16/10.5] h-auto w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The same five-stage path, regardless of how many sports */}
      <section className="w-full bg-[#F7F5F0] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="mb-8 max-w-[680px]">
            <h2 className="mb-3 text-[26px] leading-[1.18] font-bold tracking-[-0.02em] text-[#241E46] sm:text-[32px] lg:text-[34px]">
              The same five-stage path, regardless of how
              <br />
              many sports.
            </h2>

            <p className="text-[13px] leading-[1.58] font-normal text-[#5A5D72] sm:text-[13.5px]">
              Describing a multi-sport program doesn’t skip a stage or guarantee
              acceptance — a written scope, naming every sport involved, comes
              before anything operates.
            </p>
          </div>

          {/* 5 Connected Stage Boxes */}
          <div className="grid grid-cols-1 divide-y divide-[#E6E2D8] overflow-hidden rounded-[8px] border border-[#E6E2D8] bg-[#FAF9F6] sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
            {FIVE_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="flex min-h-[126px] flex-col justify-start p-4 sm:p-5"
              >
                <div className="mb-2.5 flex items-center gap-1.5 text-[10px] font-medium tracking-[0.11em] text-[#8E909E] uppercase">
                  <span>{stage.step}</span>
                  <span>·</span>
                  <span>{stage.label}</span>
                </div>

                <p className="text-[11.5px] leading-[1.5] font-normal text-[#4D5064]">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button + Inline Footnote */}
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#"
              className="inline-flex h-[38px] w-fit items-center justify-center rounded-[5px] bg-[#FFD60A] px-5 text-[12px] font-semibold text-[#111827] shadow-[0_2px_10px_rgba(255,214,10,0.22)] transition-colors duration-200 hover:bg-[#FFE033] focus:outline-none focus:ring-2 focus:ring-[#FFD60A]/60"
            >
              Discuss Your Sport
            </a>

            <p className="text-[10.5px] leading-[1.45] text-[#8E909E]">
              A request starts a review; it is not confirmation of a pilot or of
              any sport combination being supported.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Questions about multi-sport coordination */}
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Portrait Image */}
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-[12px] bg-[#EAE8E3]">
                <img
                  src="/images/multi/7.png"
                  alt="Two athletes outdoors in blue activewear"
                  className="aspect-[3/3.75] h-auto w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Heading & Accordion */}
            <div className="lg:col-span-8">
              <h2 className="mb-6 text-[24px] leading-[1.2] font-bold tracking-[-0.02em] text-[#241E46] sm:text-[28px] lg:text-[30px]">
                Questions about multi-sport coordination
              </h2>

              <div className="divide-y divide-[#ECE8DF] border-b border-[#ECE8DF]">
                {MULTI_SPORT_FAQS.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={faq.question} className="py-3.5">
                      <button
                        type="button"
                        onClick={() => handleToggle(index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 text-left transition-colors hover:text-[#111827] focus:outline-none"
                      >
                        <span className="text-[12.5px] leading-[1.45] font-semibold text-[#241E46] sm:text-[13px]">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 shrink-0 text-[#8E909E] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pt-2 pr-6 text-[12px] leading-[1.58] font-normal text-[#5A5D72]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
