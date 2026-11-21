import Link from "next/link";

const stages = [
  {
    step: "01 · Qualify",
    text: "Zoiko Sports reviews fit and market.",
  },
  {
    step: "02 · Scope",
    text: "Participants, workflow and measures agreed in writing.",
  },
  {
    step: "03 · Configure",
    text: "A permission-scoped workflow, reviewed for security and privacy.",
  },
  {
    step: "04 · Operate",
    text: "Recorded coordination activity, with a human-authorized go/no-go.",
  },
  {
    step: "05 · Evaluate",
    text: "Extend, revise or stop — an authorized human decision.",
  },
];

export function FiveStagePath() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[800px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            The same five-stage path, regardless of sport.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            Describing a cricket event doesn&apos;t skip a stage or guarantee acceptance — a written scope comes before anything operates.
          </p>
        </div>

        {/* 5-Stage Segmented Box */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#ded9cb] bg-[#F7F6F1] shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-[#ded9cb] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-5">
            {stages.map((stage) => (
              <div key={stage.step} className="p-6 sm:p-7 flex flex-col justify-start">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#868096]">
                  {stage.step}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-[#4d4661]">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button & Inline Note */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="/sports/discuss-your-sport"
            className="inline-flex items-center justify-center rounded-lg bg-[#fecf23] px-6 py-3.5 font-heading text-[14.5px] font-semibold text-[#1d1433] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5c400] hover:shadow-lg shadow-black/10 shrink-0"
          >
            Discuss Your Sport
          </Link>
          <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-[#868096]">
            A request starts a review; it is not confirmation of a pilot or of cricket support.
          </p>
        </div>
      </div>
    </section>
  );
}
