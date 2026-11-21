const items = [
  {
    step: "01 · Schedule",
    text: "Event or fixture timing, venue dependencies and the organizations responsible for each part.",
  },
  {
    step: "02 · Readiness",
    text: "Owned checks ahead of an event, tracked as status against a due time — not a certification.",
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

export function ConsistentEventFormats() {
  return (
    <section className="relative border-y border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[760px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            What stays consistent across event formats?
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            Schedule context, agreed readiness work, operational exceptions and recorded human decisions can form the shared model where a sport&apos;s workflow has been validated.
          </p>
        </div>

        {/* 4 Segmented Cards Box */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#ded9cb] bg-[#fbfaf6] shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-[#ded9cb] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.step} className="p-6 sm:p-7 flex flex-col justify-start">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#868096]">
                  {item.step}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-[#4d4661]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
