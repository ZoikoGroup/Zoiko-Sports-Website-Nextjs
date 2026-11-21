const cards = [
  {
    title: "Competition organizer",
    incoming: "An event's court allocation or match-window changes.",
    nextStep: "Confirm the updated schedule with every affected club and venue.",
    note: "A proposed change is recorded, not auto-applied.",
  },
  {
    title: "Venue / court operations",
    incoming: "Readiness checks due ahead of a match window, including court, facility and equipment handover.",
    nextStep: "Confirm owned checks and flag what's outstanding.",
    note: "A completed check is not a court-safety certification.",
  },
  {
    title: "Club / team operations",
    incoming: "A notification about a court, timing or access change.",
    nextStep: "Acknowledge receipt so the sender has a record.",
    note: "Sent is not the same as received or acknowledged.",
  },
];

export function OperatingWork() {
  return (
    <section className="relative border-t border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[800px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            The operating work between events and venues.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            A racket-sport event touches several organizations before, during and after play. These are examples of the kind of handoff a scoped conversation could cover — not a description of shipped racket-sport features.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col justify-between rounded-xl border border-[#ded9cb] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h3 className="font-heading text-[17px] font-bold text-[#1d1433]">
                  {c.title}
                </h3>

                <div className="mt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                    INCOMING
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5d5670]">
                    {c.incoming}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                    ACCOUNTABLE NEXT STEP
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5d5670]">
                    {c.nextStep}
                  </p>
                </div>
              </div>

              <p className="mt-6 border-t border-[#ebe7dc] pt-3 text-[11.5px] italic text-[#868096]">
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
