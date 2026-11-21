import Image from "next/image";

export function ApproachDifferentSports() {
  return (
    <section id="how-it-works" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[400px_1fr] lg:gap-14 xl:gap-16">
          {/* Left Column Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-lg">
              <Image
                src="/images/OPERATING-MODELS/om2.png"
                alt="Judo athletes competing on the mat"
                width={720}
                height={668}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="max-w-[680px]">
            <h2 className="font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-[#1d1433]">
              How does Zoiko Sports approach different sports?
            </h2>
            <p className="mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.75] text-[#5d5670]">
              It starts with the event, the organizations delivering it and the responsibilities between them. Sport-specific workflows are considered individually and are described as supported only once they are validated — not by default, and not by label alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
