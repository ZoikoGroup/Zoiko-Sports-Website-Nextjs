"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "Is Tennis & Racket Sports available from Zoiko Sports today?",
    a: "No. Tennis & Racket Sports is marked future/gated under \"Expand by Evidence.\" No racket-sport product release, supported discipline, format or market is established yet — a public availability claim would require separate evidence and approval.",
  },
  {
    q: "Can Zoiko Sports create draws, assign courts, score matches or track rankings?",
    a: "No. Zoiko Sports coordinates operational workflows between tournament organizers, venue operators and clubs (match windows, readiness, exceptions and decisions). It does not generate draws, handle live scoring, or manage player ranking points.",
  },
  {
    q: "Could a pilot consider singles, doubles or a multi-court tournament?",
    a: "Yes. Any format can be evaluated during scoping, provided the participating organizations, court allocations, and operational decision paths are agreed in writing.",
  },
  {
    q: "What if our venue has intermittent network access?",
    a: "Network and operating constraints are reviewed during technical validation to establish offline contingency procedures and reconciliation rules before any live match-day deployment.",
  },
  {
    q: "What happens after a Discuss Your Sport inquiry?",
    a: "We review your event parameters, organizations involved, and operational requirements. If viable, we schedule a scoping session to establish clear terms before any pilot is confirmed.",
  },
  {
    q: "What if our racket discipline is not listed?",
    a: "Squash, table tennis, padel, pickleball and other disciplines can be scoped under the same five-stage path on their own evidence and operational merit.",
  },
];

export function TennisRacketFAQ() {
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
            Questions about tennis &amp; racket sports coordination
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="mt-12 grid items-start gap-10 md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] lg:gap-14 xl:gap-16">
          {/* Left Column Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md">
              <Image
                src="/images/Tennis-Racket-Sports/tr4.png"
                alt="Tennis player preparing for forehand on blue court"
                width={800}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 360px"
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
