"use client";

import React from "react";

const OPERATING_FOCUS_ITEMS = [
  "Event-day session schedule and track/field area dependencies for one meet or fixture block",
  "Track, field and equipment readiness checks tied to an owner and a due time",
  "Event-day exceptions and the decision that resolves them",
  "Approvals, decisions and acknowledgment records for one event or meet block",
] as const;

export default function AthleticsApproach() {
  return (
    <section className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        {/* Header Block */}
        <div className="mb-10 max-w-[660px] lg:mb-12">
          <h2 className="mb-4 text-[28px] leading-[1.18] font-bold tracking-[-0.02em] text-[#241E46] sm:text-[34px] lg:text-[36px]">
            This page describes an approach, not a published
            <br className="hidden sm:inline" /> capability.
          </h2>

          <p className="text-[14px] leading-[1.65] font-normal text-[#5A5D72] sm:text-[14.5px]">
            Track, field, road, cross-country, relay and other athletics event
            types are not yet validated on Zolko Sports. Each discipline has its
            own session, area and format model, and none is validated here. The
            content below explains how a scoped conversation could work — it is
            not a timing, results or fan-engagement product, and it does not
            confirm that any athletics discipline is currently supported.
          </p>
        </div>

        {/* Bottom Two-Column Split */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          {/* Left Card: Initial Operating Focus */}
          <div className="flex flex-col justify-between rounded-[14px] bg-[#F7F5F0] px-7 py-7 sm:px-9 sm:py-8">
            <div className="border-b border-[#E5E1D8] pb-4">
              <span className="text-[10.5px] font-semibold tracking-[0.12em] text-[#7D7F8E] uppercase">
                INITIAL OPERATING FOCUS
              </span>
            </div>

            <ul className="divide-y divide-[#E5E1D8]">
              {OPERATING_FOCUS_ITEMS.map((item) => (
                <li
                  key={item}
                  className="py-4 text-[13.5px] leading-[1.48] font-semibold text-[#241E46] last:pb-1 sm:text-[14px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Media Card */}
          <div className="relative min-h-[280px] overflow-hidden rounded-[14px] bg-[#EAE8E3] sm:min-h-[320px]">
            <img
              src="/images/athletics/2.png"
              alt="Hurdler clearing a hurdle during a track event"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
