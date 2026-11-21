const pillars = [
  {
    step: "01 · Schedule",
    text: "Event window, ground and the organizations responsible for each part.",
  },
  {
    step: "02 · Readiness",
    text: "Ground, pavilion and equipment checks, owners and due times — tracked as status, not certification.",
  },
  {
    step: "03 · Exceptions",
    text: "What changed on event day, who owns it, and what was decided.",
  },
  {
    step: "04 · Decisions",
    text: "Who requested, who approved, and the record that's kept.",
  },
];

export function OperatingPillars() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[780px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            Four operating pillars, reused across every sport.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            This is the same operating logic described across Zoiko Sports — its applicability to a cricket event is conditional on the review above, not assumed.
          </p>
        </div>

        {/* 4-Segmented Box */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#ded9cb] bg-[#F7F6F1] shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-[#ded9cb] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.step} className="p-6 sm:p-7 flex flex-col justify-start">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#868096]">
                  {p.step}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-[#4d4661]">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
