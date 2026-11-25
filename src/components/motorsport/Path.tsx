"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const stages = [
  {
    label: "01 · Qualify",
    text: "Zoiko Sports reviews fit and market.",
  },
  {
    label: "02 · Scope",
    text: "Participants, workflow and measures agreed in writing.",
  },
  {
    label: "03 · Configure",
    text: "A permission-scoped workflow, reviewed for security and privacy.",
  },
  {
    label: "04 · Operate",
    text: "Recorded coordination activity, with a human-authorized go/no-go.",
  },
  {
    label: "05 · Evaluate",
    text: "Extend, revise or stop — an authorized human decision.",
  },
] as const;

const faqs = [
  {
    q: "Does Zoiko Sports support Motorsport today?",
    a: "No. Motorsport is marked future/gated under \u201cExpand by Evidence.\u201d No released motorsport discipline, market, circuit deployment or feature is established — a public availability claim would require separate evidence and approval.",
  },
  {
    q: "Can it provide live lap timing, telemetry or race results?",
    a: "",
  },
  {
    q: "Can it coordinate organizers, teams and a venue?",
    a: "",
  },
  {
    q: "Does it integrate with timing systems, radios or racing organizations?",
    a: "",
  },
  {
    q: "What happens after a Discuss Your Sport inquiry?",
    a: "",
  },
  {
    q: "What if an event involves young drivers, medical issues or unusual safety requirements?",
    a: "",
  },
] as const;

export default function Path() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      {/* Five-stage path */}
      <section
        id="path"
        className="w-full bg-[#F5F3EE] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            The same five-stage path, regardless of sport.
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            Describing a motorsport event doesn&apos;t skip a stage or guarantee
            acceptance — a written scope comes before anything operates.
          </p>

          <div className="mt-10 grid grid-cols-1 border border-[#E3E0D8] bg-[#F5F3EE] sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage, i) => (
              <div
                key={stage.label}
                className={`px-5 py-5 ${
                  i !== 0 ? "border-t border-[#E3E0D8]" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-[#E3E0D8]" : ""} ${
                  i === 1 ? "sm:border-t-0" : ""
                } ${
                  i !== 0 ? "lg:border-l lg:border-t-0 lg:border-[#E3E0D8]" : ""
                }`}
              >
                <p className="text-[10px] tracking-[0.02em] text-[#8A869B]">
                  {stage.label}
                </p>
                <p className="mt-3 text-[12px] leading-[1.55] text-[#2A1F4D]">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-[#FFC72C] px-5 py-3 text-[12px] font-bold text-[#2A1F4D] transition-colors hover:bg-[#F5BB14]"
            >
              Discuss Your Sport
            </a>
            <p className="text-[10px] leading-[1.5] text-[#8A869B]">
              A request starts a review, it is not confirmation of a pilot or of
              motorsport support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:ml-[calc(100%/3)] lg:text-[34px]">
            Questions about motorsport coordination
          </h2>

          <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
            <div className="relative h-[320px] w-full overflow-hidden rounded-lg sm:h-[380px] lg:h-[340px]">
              <Image
                src="/images/motorsport/5.png"
                alt="Motorcycle racer leaning into a corner on a circuit"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q} className="border-b border-[#E3E0D8]">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <span className="text-[12px] font-semibold leading-[1.5] text-[#2A1F4D]">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[#2A1F4D] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && item.a ? (
                      <div id={`faq-panel-${i}`} className="pb-4">
                        <p className="max-w-[640px] text-[11px] leading-[1.6] text-[#5C5873]">
                          {item.a}
                        </p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
