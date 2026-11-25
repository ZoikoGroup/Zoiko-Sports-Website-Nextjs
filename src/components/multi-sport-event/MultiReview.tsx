import Image from "next/image";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    label: "01 · Schedule",
    text: "Program, sport, event and session windows, each with a named owner and system.",
  },
  {
    label: "02 · Readiness",
    text: "Per-sport, per-area checks, not unison — tracked as status, not certification.",
  },
  {
    label: "03 · Exceptions",
    text: "What changed on event day, which sport is affected, and what was decided.",
  },
  {
    label: "04 · Decisions",
    text: "Who requested, who approved for which sport, and the record that's kept.",
  },
] as const;

const questions = [
  {
    title: "Sport coordination and competition authority",
    text: "Which sports, competition rule owner's rounds and officials are involved, and who can approve changes for each.",
  },
  {
    title: "Venue/zone sharing and local authority",
    text: "Which hall, field, court or ground actually shared, the access/throwdown rules, and the local duty holder.",
  },
  {
    title: "Program and event timing",
    text: "Session and window overlaps, transitions, and how manual conflict resolution between sports.",
  },
  {
    title: "Mixed-sport approval model",
    text: "Independent athlete additions per sport, session approvers for each sport, and who can authorize at once.",
  },
  {
    title: "Versioned updates and positive acknowledgment",
    text: "Version-stamped changes, with record, and the positive acknowledgment of each affected sport's organizer.",
  },
  {
    title: "Review and follow-up across sports",
    text: "Per-event corrective resolutions, open requirements, and which owners hold each one separately by sport.",
  },
] as const;

const steps = [
  {
    label: "01 · Plan",
    title:
      "Program, sport, event and session windows agreed with participating organizations and owners ahead of competition day.",
    example:
      "Example: Riverside League and Northfield Arena confirm scope for one multi-sport session block.",
  },
  {
    label: "02 · Prepare",
    title:
      "Owned venue, field and equipment checks tracked against a due time — pending is not failed.",
    example:
      "14 of 16 checks complete at 08:50. East venue inspection due 09:00 · Venue Ops.",
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

export default function MultiReview() {
  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      {/* Four operating pillars */}
      <section
        id="pillars"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[520px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Four operating pillars, reused across every sport.
          </h2>
          <p className="mt-5 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            This is the same operating logic described across Zoiko Sports — its
            applicability to a multi-sport program is conditional on the review
            above, not assumed.
          </p>

          <div className="mt-10 grid grid-cols-1 border border-[#E3E0D8] bg-[#F5F3EE] sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, i) => (
              <div
                key={item.label}
                className={`px-5 py-5 ${
                  i !== 0 ? "border-t border-[#E3E0D8]" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-[#E3E0D8]" : ""} ${
                  i === 1 ? "sm:border-t-0" : ""
                } ${
                  i !== 0 ? "lg:border-l lg:border-t-0 lg:border-[#E3E0D8]" : ""
                }`}
              >
                <p className="text-[10px] tracking-[0.02em] text-[#8A869B]">
                  {item.label}
                </p>
                <p className="mt-3 text-[12px] leading-[1.55] text-[#2A1F4D]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research questions */}
      <section
        id="research"
        className="w-full border-y border-[#E3E0D8] bg-[#F5F3EE] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <span className="inline-block rounded-full bg-[#EAE8E1] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#7C788C]">
            Research questions · Not shipped features
          </span>

          <h2 className="mt-5 max-w-[560px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            What a multi-sport review would need to establish.
          </h2>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            A proof for one sport combination or venue never validates another.
            These are open questions for a qualified review — not a checklist of
            supported capability.
          </p>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[3fr_1fr]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {questions.map((q) => (
                <div
                  key={q.title}
                  className="rounded-lg border border-[#E3E0D8] bg-white px-5 py-5 shadow-[0_1px_3px_rgba(42,31,77,0.06)]"
                >
                  <h3 className="text-[12px] font-bold leading-[1.4] text-[#2A1F4D]">
                    {q.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-[1.55] text-[#5C5873]">
                    {q.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative h-[320px] w-full overflow-hidden rounded-xl lg:h-auto lg:min-h-[300px]">
              <Image
                src="/images/multi/3.png"
                alt="Athletes training together in a gym"
                fill
                sizes="(min-width: 1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="w-full bg-[#FFFFFF] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <span className="inline-block rounded-full bg-[#EAE8E1] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#7C788C]">
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

          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            The sport and any pairing are intentionally unspecified below — it
            shows the pattern of one event lifecycle, not a multi-sport product
            capability.
          </p>

          <div className="mt-10 grid grid-cols-1 border border-[#E3E0D8] bg-[#F5F3EE] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={`flex flex-col px-5 py-5 ${
                  i !== 0 ? "border-t border-[#E3E0D8]" : ""
                } ${i % 2 === 1 ? "sm:border-l sm:border-[#E3E0D8]" : ""} ${
                  i === 1 ? "sm:border-t-0" : ""
                } ${
                  i !== 0 ? "lg:border-l lg:border-t-0 lg:border-[#E3E0D8]" : ""
                }`}
              >
                <p className="text-[10px] tracking-[0.02em] text-[#8A869B]">
                  {step.label}
                </p>
                <p className="mt-4 text-[12px] leading-[1.55] text-[#2A1F4D]">
                  {step.title}
                </p>
                <div className="mt-4 border-t border-[#E3E0D8] pt-4">
                  <p className="text-[11px] leading-[1.65] text-[#8A869B]">
                    {step.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[10px] italic leading-[1.5] text-[#8A869B]">
            Fictional — sport-neutral. Example owners, times and statuses are
            fictional and sport-neutral — not evidence of a multi-sport feature.
          </p>
        </div>
      </section>
    </div>
  );
}
