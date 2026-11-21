"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "Is my sport currently supported?",
    a: "No sport is published as a supported destination by default. Each sport is reviewed individually, and this page explains the approach and review process under way — not a live product claim for any sport.",
  },
  {
    q: "Will every sport work exactly the same way?",
    a: "No. Core operational disciplines — schedules, readiness tracking, exceptions, and recorded decisions — apply everywhere, but competition structures, venue rules, and participant roles differ by sport.",
  },
  {
    q: "Can this cover multiple sports or events for our organization at once?",
    a: "Yes. Multi-sport or multi-event scope follows the same validation pathway independently for each sport code, while sharing an organization-level administrative view.",
  },
  {
    q: "Does this integrate with our existing scheduling or data systems?",
    a: "Technical boundaries are established during the configure stage. Operational records and human decisions remain distinct from automated match data or external calendar feeds.",
  },
  {
    q: "Who should reach out first?",
    a: "Typically the competition organizer, league administrator, or host venue operator who owns the operational schedule and authorises event-day decisions.",
  },
  {
    q: "What happens after we reach out?",
    a: "We review the proposed event format, participating organizations, and specific operational challenges to determine feasibility and agree scope before any pilot begins.",
  },
];

export function OperatingScopeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative border-t border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Section Heading Centered */}
        <div className="text-center">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            Questions about sports and operating scope
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="mt-12 grid items-start gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] lg:gap-14 xl:gap-16">
          {/* Left Column Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md">
              <Image
                src="/images/OPERATING-MODELS/om5.png"
                alt="Badminton player preparing for shot"
                width={300}
                height={379}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="divide-y divide-[#ded9cb]">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggle(idx)}
                    type="button"
                    className="flex w-full items-center justify-between text-left font-heading text-[15px] sm:text-[15.5px] font-bold text-[#1d1433] transition-colors hover:text-[#377eb8]"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#868096] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#1d1433]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-2.5 pr-6 text-[13.5px] sm:text-[14px] leading-relaxed text-[#5d5670]">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
