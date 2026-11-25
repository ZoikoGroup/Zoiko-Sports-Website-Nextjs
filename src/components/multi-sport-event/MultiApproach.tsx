import Image from "next/image";
import { ArrowRight } from "lucide-react";

const focusItems = [
  "A program → sport → event → session hierarchy for one event weekend, with a named owner at each level",
  "Shared venue area handovers and transition windows between sport-specific sessions",
  "Event-day exceptions and the decision that resolves them, kept separate by sport",
  "Approvals, decisions and acknowledgment records tracked separately for each sport and event",
] as const;

const related = [
  {
    eyebrow: "Sport/Event",
    title: "Sports Overview",
    text: "How Zoiko Sports adapts operating workflows to a single sport's own format and rules.",
  },
  {
    eyebrow: "Solutions",
    title: "Multi-Event Operating Model",
    text: "Extending one agreed workflow to a fixture block, within a single sport.",
  },
  {
    eyebrow: "Who we serve",
    title: "Multi-Organization Operations",
    text: "The buyer path for programs operating across organizations, independent of sport.",
  },
] as const;

const handoffs = [
  {
    title: "Program organizer",
    incoming:
      "A previously agreed schedule spanning more than one sport is amended.",
    next: "Confirm each sport-specific decision and secure the program schedule accordingly.",
    note: "A proposed change is recorded, not auto-applied.",
  },
  {
    title: "Sport-specific competition director",
    incoming:
      "A venue area or window change proposed by the program organizer.",
    next: "Approve or decline the change for their own sport and event only.",
    note: "One sport's approval never stands in for another's.",
  },
  {
    title: "Venue duty holder",
    incoming:
      "A handover window between different sports sharing the same venue.",
    next: "Confirm local handover readiness and flag what's outstanding.",
    note: "A completed check is not a safety certification or venue-state authorization.",
  },
] as const;

export default function MultiApproach() {
  return (
    <div className="w-full bg-white text-[#2A1F4D] antialiased">
      {/* Approach, not a published capability */}
      <section
        id="approach"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[640px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            This page describes an approach, not a published capability.
          </h2>
          <p className="mt-5 max-w-[720px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            No validated multi-sport program, mix of disciplines, geography,
            simultaneous venue allocation or shipped combination capability
            exists today. Each sport keeps its own competition authority, rules,
            timelines and officials — a multi-sport program does not merge them
            into one regime. The content below explains how a scoped
            conversation could work, not a scheduling optimizer, results service
            or venue safety authority, and it does not confirm that any sport
            combination is currently supported.
          </p>

          <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-lg border border-[#E3E0D8] md:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col justify-center bg-[#F5F3EE] px-6 py-6 sm:px-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#8A869B]">
                Initial operating focus
              </p>
              <ul className="mt-4 flex flex-col">
                {focusItems.map((item, i) => (
                  <li
                    key={item}
                    className={`py-3 text-[12px] font-medium leading-[1.5] text-[#2A1F4D] ${
                      i !== 0 ? "border-t border-[#E3E0D8]" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[280px] w-full md:h-auto md:min-h-[260px]">
              <Image
                src="/images/multi/2.png"
                alt="Athletes training together in a multi-sport setting"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section
        id="related"
        className="w-full border-y border-[#E3E0D8] bg-[#F5F3EE] py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[640px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            Not the same question as these related pages.
          </h2>
          <p className="mt-5 max-w-[720px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            Multi-Sport Events is about format and discipline overlap
            specifically — different sports, rules and authorities sharing a
            program. It is distinct from the adjacent pages below, which address
            its own job, and none duplicates this one.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-lg border border-[#E3E0D8] bg-white px-6 py-6"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-[14px] font-bold leading-[1.4] text-[#2A1F4D]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.55] text-[#5C5873]">
                  {card.text}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#2A1F4D] transition-opacity hover:opacity-70"
                >
                  Visit page
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating work */}
      <section
        id="operating-work"
        className="w-full bg-white py-16 text-[#1E1A3B] antialiased sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <h2 className="max-w-[640px] text-[28px] font-bold leading-[1.25] tracking-[-0.01em] text-[#2A1F4D] sm:text-[32px] lg:text-[34px]">
            The operating work between sports, events and a shared venue.
          </h2>
          <p className="mt-5 max-w-[720px] text-[13px] leading-[1.65] text-[#3D3857] sm:text-[14px]">
            A multi-sport program touches several independent authorities
            before, during and after competition. These are examples of the kind
            of handoff a scoped conversation could cover — not a description of
            shipped multi-sport features.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {handoffs.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-lg border border-[#E3E0D8] bg-[#F6F5F0] px-6 py-6 shadow-[0_1px_3px_rgba(42,31,77,0.06)]"
              >
                <h3 className="text-[13px] font-bold leading-[1.4] text-[#2A1F4D]">
                  {card.title}
                </h3>

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  Incoming
                </p>
                <p className="mt-1 text-[12px] leading-[1.5] text-[#2A1F4D]">
                  {card.incoming}
                </p>

                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#8A869B]">
                  Accountable next step
                </p>
                <p className="mt-1 text-[12px] leading-[1.5] text-[#2A1F4D]">
                  {card.next}
                </p>

                <p className="mt-5 border-t border-[#ECE9E2] pt-3 text-[10px] italic leading-[1.5] text-[#8A869B]">
                  {card.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
