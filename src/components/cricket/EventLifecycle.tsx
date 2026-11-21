const lifecycleStages = [
  {
    step: "01 · Plan",
    description: "Competition and ground context, participating organizations and owners agreed ahead of the session window.",
    example: "Example: Riverside League and Northfield Arena confirm scope for one fixture block.",
  },
  {
    step: "02 · Prepare",
    description: "Owned ground, pavilion and equipment checks tracked against a due time — pending is not failed.",
    example: "14 of 16 checks complete at 09:50; East entrance ramp inspection due 09:00 - Venue Ops.",
  },
  {
    step: "03 · Coordinate",
    description: "An event-day exception, a human decision, and a tracked acknowledgment.",
    example: "11:52 turnstile offline (EX-104) → 12:07 restored → 12:10 entry backlog (EX-105) → 12:15 Competition Director approves a hold 12:15-12:25 → 12:16/12:18 acknowledged.",
  },
  {
    step: "04 · Review",
    description: "Follow-up ownership without an inferred match result impact.",
    example: "Sep 27 09:00 review; Turnstile reader follow-up assigned to Venue Ops, due Oct 2.",
  },
];

export function EventLifecycle() {
  return (
    <section className="relative border-t border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Top Eyebrow Pill */}
        <div>
          <span className="inline-flex items-center rounded-full bg-[#ebe7dc] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#787285]">
            ILLUSTRATIVE WORKFLOW · FICTIONAL SAMPLE DATA
          </span>
        </div>

        {/* Header Block */}
        <div className="mt-4 max-w-[780px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            Plan → Prepare → Coordinate → Review.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            The sport is intentionally unspecified in the example below — it shows the pattern of one event lifecycle, not a cricket-specific product capability.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {lifecycleStages.map((s) => (
            <div
              key={s.step}
              className="flex flex-col justify-between rounded-xl border border-[#ded9cb] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#868096]">
                  {s.step}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-[#1d1433] font-medium">
                  {s.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#ebe7dc] pt-3">
                <p className="text-[12px] leading-relaxed text-[#868096]">
                  {s.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footnote */}
        <p className="mt-6 text-[12px] sm:text-[12.5px] leading-relaxed text-[#868096]">
          Example owners, times and statuses are fictional and sport-neutral — not evidence of a cricket feature.
        </p>
      </div>
    </section>
  );
}
