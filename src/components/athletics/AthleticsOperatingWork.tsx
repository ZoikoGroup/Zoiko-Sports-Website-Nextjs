"use client";

import React from "react";

interface OperatingRoleCard {
  title: string;
  incoming: string;
  nextStep: string;
  footnote: string;
}

const OPERATING_ROLES: readonly OperatingRoleCard[] = [
  {
    title: "Competition organizer / meet director",
    incoming: "An event’s session schedule or venue-area changes.",
    nextStep:
      "Confirm the updated schedule with every affected club and venue.",
    footnote: "A proposed change is recorded, not auto-applied.",
  },
  {
    title: "Venue / area operations",
    incoming:
      "Readiness checks due ahead of a session window, including track, field and equipment handover.",
    nextStep: "Confirm owned checks and flag what’s outstanding.",
    footnote: "A completed check is not a safety certification.",
  },
  {
    title: "Club / team operations",
    incoming: "A notification about a session, timing or access change.",
    nextStep: "Acknowledge receipt so the sender has a record.",
    footnote: "Sent is not the same as received or acknowledged.",
  },
] as const;

export default function AthleticsOperatingWork() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        {/* Header Block */}
        <div className="mb-10 max-w-[660px] lg:mb-12">
          <h2 className="mb-4 text-[28px] leading-[1.18] font-bold tracking-[-0.02em] text-[#241E46] sm:text-[34px] lg:text-[36px]">
            The operating work between events and
            <br className="hidden sm:inline" /> venues.
          </h2>

          <p className="text-[14px] leading-[1.65] font-normal text-[#5A5D72] sm:text-[14.5px]">
            An athletics event touches several organizations before, during and
            after competition. These are examples of the kind of handoff a
            scoped conversation could cover — not a description of shipped
            athletics features.
          </p>
        </div>

        {/* 3-Column Connected Cards Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-0">
          {OPERATING_ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col justify-between rounded-[14px] border border-[#E6E2D8] bg-white px-7 py-7 shadow-[0_1px_2px_rgba(30,26,59,0.03)] sm:px-8 sm:py-8"
            >
              <div>
                <h3 className="mb-5 text-[16.5px] leading-[1.3] font-bold tracking-[-0.01em] text-[#241E46]">
                  {role.title}
                </h3>

                {/* Incoming */}
                <div className="mb-5">
                  <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.11em] text-[#8E909E] uppercase">
                    INCOMING
                  </div>
                  <p className="text-[13.5px] leading-[1.55] font-normal text-[#4D5064]">
                    {role.incoming}
                  </p>
                </div>

                {/* Accountable Next Step */}
                <div className="mb-6">
                  <div className="mb-1.5 text-[10.5px] font-semibold tracking-[0.11em] text-[#8E909E] uppercase">
                    ACCOUNTABLE NEXT STEP
                  </div>
                  <p className="text-[13.5px] leading-[1.55] font-normal text-[#4D5064]">
                    {role.nextStep}
                  </p>
                </div>
              </div>

              {/* Bottom Divider & Italic Footnote */}
              <div className="border-t border-[#ECE8DF] pt-4">
                <p className="text-[12px] leading-[1.45] italic text-[#8A8C9B]">
                  {role.footnote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
