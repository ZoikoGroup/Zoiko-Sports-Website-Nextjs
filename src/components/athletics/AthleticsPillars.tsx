import Image from "next/image";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    label: "01 · Schedule",
    text: "Event window, track/field areas and the organizations responsible for each part.",
  },
  {
    label: "02 · Readiness",
    text: "Track, field and equipment checks, owners and due times — tracked as status, not certification.",
  },
  {
    label: "03 · Exceptions",
    text: "What changed on event day, who owns it, and what was decided.",
  },
] as const;

const steps = [
  {
    label: "01 · Plan",
    title:
      "Session windows, track/field areas, participating organizations and owners agreed ahead of competition day.",
    example:
      "Example: Riverside League and Northfield Arena confirm scope for one meet session block.",
  },
  {
    label: "02 · Prepare",
    title:
      "Owned track, field and equipment checks tracked against a due time — pending is not failed.",
    example:
      "14 of 16 checks complete at 08:50. East runway inspection due 09:00 · Venue Ops.",
  },
  {
    label: "03 · Coordinate",
    title:
      "An event-day exception, a human decision, and a tracked acknowledgment.",
    example:
      "11:52 turnstile offline (EX-104) → 12:07 restored → 12:10 entry backlog (EX-105) → 12:15 Competition Director approves a hold 12:15–12:25 → 12:16/12:18 acknowledged.",
  },
  {
    label: "04 · Review",
    title: "Follow-up ownership without an inferred result impact.",
    example:
      "Sep 27 09:00 review. Turnstile reader follow-up assigned to Venue Ops, due Oct 2.",
  },
] as const;

export default function AthleticPillars() {
  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      <section
        id="pillars"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_1fr] lg:gap-0">
            <div className="flex flex-col">
              <h2 className="max-w-[680px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
                Four operating pillars, reused across every sport.
              </h2>
              <p className="mt-5 max-w-[620px] text-[14px] leading-[1.6] text-[#3D3857] sm:text-[15px]">
                This is the same operating logic described across Zoiko Sports —
                its applicability to an athletics event is conditional on the
                review above, not assumed.
              </p>

              <div className="mt-10 grid grid-cols-1 border border-[#E3E0D8] bg-[#F5F3EE] sm:grid-cols-3 lg:mt-auto lg:pt-0">
                {pillars.map((item, i) => (
                  <div
                    key={item.label}
                    className={`px-5 py-5 ${
                      i !== 0
                        ? "border-t border-[#E3E0D8] sm:border-l sm:border-t-0"
                        : ""
                    }`}
                  >
                    <p className="text-[11px] tracking-[0.02em] text-[#8A869B]">
                      {item.label}
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.55] text-[#2A1F4D]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[320px] w-full overflow-hidden border border-[#E3E0D8] sm:h-[380px] lg:h-auto lg:min-h-[300px]">
              <Image
                src="/images/athletics/3.png"
                alt="Athlete throwing a discus"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="workflow"
        className="w-full border-t border-[#E3E0D8] bg-[#F5F3EE] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <span className="inline-block rounded-full bg-[#EAE8E1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#7C788C]">
            Illustrative workflow · Fictional sample data
          </span>

          <h2 className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            <span>Plan</span>
            <ArrowRight
              className="h-6 w-6 sm:h-7 sm:w-7"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span>Prepare</span>
            <ArrowRight
              className="h-6 w-6 sm:h-7 sm:w-7"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span>Coordinate</span>
            <ArrowRight
              className="h-6 w-6 sm:h-7 sm:w-7"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span>Review.</span>
          </h2>

          <p className="mt-4 max-w-[640px] text-[14px] leading-[1.6] text-[#3D3857] sm:text-[15px]">
            The event type is intentionally unspecified in the example below —
            it shows the pattern of one event lifecycle, not an
            athletics-specific product capability.
          </p>

          <div className="mt-10 grid grid-cols-1 border border-[#E3E0D8] bg-white sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={`flex flex-col px-5 py-5 ${
                  i !== 0 ? "border-t border-[#E3E0D8] lg:border-t-0" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-[#E3E0D8]" : ""} ${
                  i === 2 ? "sm:border-t lg:border-t-0" : ""
                } ${i === 1 ? "sm:border-t-0" : ""} ${
                  i !== 0 ? "lg:border-l lg:border-[#E3E0D8]" : ""
                }`}
              >
                <p className="text-[11px] tracking-[0.02em] text-[#8A869B]">
                  {step.label}
                </p>
                <p className="mt-4 text-[13px] leading-[1.55] text-[#2A1F4D]">
                  {step.title}
                </p>
                <div className="mt-4 border-t border-[#ECE9E2] pt-4">
                  <p className="text-[12px] leading-[1.65] text-[#8A869B]">
                    {step.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[11px] leading-[1.5] text-[#8A869B]">
            Example owners, times and statuses are fictional and sport-neutral —
            not evidence of an athletics feature.
          </p>
        </div>
      </section>
    </div>
  );
}
