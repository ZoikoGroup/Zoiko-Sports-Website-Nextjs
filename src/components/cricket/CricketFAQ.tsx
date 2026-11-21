"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    q: "Is cricket a supported sport today?",
    a: "No cricket-specific workflow has been validated or published yet. This page explains an approach under review — not a confirmed product capability, and it does not imply support for any particular format.",
  },
  {
    q: "Will this show live scores, innings or overs?",
    a: "No. Zoiko Sports is operational software for schedule, ground and readiness coordination, not a live scoring, fan engagement, or ball-by-ball match feed product.",
  },
  {
    q: "Does a ground readiness check mean the ground is safe to play?",
    a: "No. Readiness checks track whether an agreed inspection or handover was completed on time by its assigned owner. They do not constitute an independent safety certification or pitch suitability guarantee.",
  },
  {
    q: "Would organizers, clubs and venue staff all see the same records?",
    a: "Each organization has permissions tailored to its role. For example, a club sees handoffs and decisions concerning its fixtures, while the venue tracks ground-level readiness across sessions.",
  },
  {
    q: "Who should start this conversation?",
    a: "Competition organizers, league directors, or venue operations leads who have authority over fixture scheduling and ground policies typically initiate discussions.",
  },
  {
    q: "What information should we prepare?",
    a: "A clear outline of your competition format, participating clubs, grounds involved, current handoff pain points, and target success measures for the pilot.",
  },
  {
    q: "What happens after we reach out?",
    a: "We review your submission to assess operational fit and schedule requirements. If aligned, we schedule a scoping conversation to define written parameters before any pilot commitment.",
  },
];

export function CricketFAQ() {
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
            Questions about cricket coordination
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="mt-12 grid items-start gap-10 md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] lg:gap-14 xl:gap-16">
          {/* Left Column Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md">
              <Image
                src="/images/cricket/cc5.png"
                alt="Cricket bowler running in during a match"
                width={800}
                height={1000}
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
