import Image from "next/image";

export function OperatingWork() {
  return (
    <section className="relative border-t border-[#ebe7dc] bg-[#F7F6F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[800px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            The operating work between events and grounds.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            A cricket event touches several organizations before, during and after play. These are examples of the kind of handoff a scoped conversation could cover — not a description of shipped cricket features.
          </p>
        </div>

        {/* 3-Column Layout: 2 Cards + 1 Photo */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-xl border border-[#ded9cb] bg-white p-6 sm:p-7 shadow-sm">
            <div>
              <h3 className="font-heading text-[17px] font-bold text-[#1d1433]">
                Competition organizer
              </h3>

              <div className="mt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                  INCOMING
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5d5670]">
                  An event&apos;s ground allocation or session window changes.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                  ACCOUNTABLE NEXT STEP
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5d5670]">
                  Confirm the updated schedule with every affected club and venue.
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-[#ebe7dc] pt-3 text-[11.5px] italic text-[#868096]">
              A proposed change is recorded, not auto-applied.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-xl border border-[#ded9cb] bg-white p-6 sm:p-7 shadow-sm">
            <div>
              <h3 className="font-heading text-[17px] font-bold text-[#1d1433]">
                Venue / ground operations
              </h3>

              <div className="mt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                  INCOMING
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5d5670]">
                  Readiness checks due ahead of a session window, including pitch, pavilion and ground handover.
                </p>
              </div>

              <div className="mt-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#868096]">
                  ACCOUNTABLE NEXT STEP
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5d5670]">
                  Confirm owned checks and flag what&apos;s outstanding.
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-[#ebe7dc] pt-3 text-[11.5px] italic text-[#868096]">
              A completed check is not a ground-safety certification.
            </p>
          </div>

          {/* Column 3 Photo */}
          <div className="flex items-center justify-center md:col-span-2 lg:col-span-1">
            <div className="relative h-full w-full min-h-[260px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md">
              <Image
                src="/images/cricket/cc3.png"
                alt="Batsman playing a drive shot"
                width={1000}
                height={667}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
