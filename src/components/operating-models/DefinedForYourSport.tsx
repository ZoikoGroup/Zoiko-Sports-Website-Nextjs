import Image from "next/image";

const commonItems = [
  "Fixture or event identity, timing and venue",
  "The participating organizations and their roles",
  "An accountable owner for each piece of readiness work",
  "A decision and acknowledgment record, kept separately from a sent update",
];

export function DefinedForYourSport() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-[780px]">
          <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
            What must be defined for your sport?
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[16px] leading-[1.7] text-[#5d5670]">
            Event or fixture structure, venue requirements, rules and decision-makers, notification audience, data sources and local operating conditions all need confirming before a workflow is agreed.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Column Card */}
          <div className="flex flex-col justify-center rounded-2xl border border-[#ded9cb] bg-[#F7F6F1] p-6 sm:p-8">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#868096]">
              COMMON ACROSS EVERY SPORT
            </p>
            <div className="mt-4 divide-y divide-[#e2ded2]">
              {commonItems.map((item) => (
                <div key={item} className="py-3.5 sm:py-4 first:pt-2 last:pb-1">
                  <p className="text-[14.5px] sm:text-[15px] font-semibold text-[#1d1433] leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Image */}
          <div className="flex items-center justify-center">
            <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md min-h-[280px]">
              <Image
                src="/images/OPERATING-MODELS/om3.png"
                alt="Wrestlers grappling during competition"
                width={1200}
                height={812}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 620px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
