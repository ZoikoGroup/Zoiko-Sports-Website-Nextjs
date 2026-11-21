const pathwaySteps = [
  {
    step: "01 · Scope",
    description: "Confirm the sport, format, organizations and operating requirements in writing.",
  },
  {
    step: "02 · Verify workflow and rules",
    description: "Check the sport's match, event and organization model against what the platform actually supports.",
  },
  {
    step: "03 · Validate product and data behavior",
    description: "Review the workflow for security, privacy and accuracy before any pilot.",
  },
  {
    step: "04 · Approve content and availability",
    description: "Content, legal and commercial review before a sport is published as supported.",
  },
];

export function SupportedDestination() {
  return (
    <section className="relative border-t border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[820px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            How does a sport become a supported destination?
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            Scope → verify workflow and rules → validate product and data behavior → approve content and availability. Each sport passes this pathway on its own evidence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {pathwaySteps.map((s) => (
            <div
              key={s.step}
              className="flex flex-col justify-start rounded-xl border border-[#ded9cb] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#868096]">
                {s.step}
              </p>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-[#5d5670]">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Notice Card */}
        <div className="mt-8 rounded-xl border border-[#ded9cb] bg-white p-5 sm:p-6 shadow-sm">
          <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#4d4661]">
            No sport is currently published as a validated, supported destination. Validated sports will appear here once evidence exists — absence is intentional, not a placeholder.
          </p>
        </div>

        {/* Bottom Footnote */}
        <p className="mt-6 max-w-[820px] text-[12px] sm:text-[12.5px] leading-relaxed text-[#868096]">
          A multi-sport or multi-event scope follows the same pathway independently — a shared data model is not the same as validated multi-sport coverage, and supporting one sport does not establish support for another.
        </p>
      </div>
    </section>
  );
}
