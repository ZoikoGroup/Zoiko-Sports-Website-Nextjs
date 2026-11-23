import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#1A1038] via-[#2A1F5C] to-[#2563D6] py-16 text-white antialiased sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#FFC72C]">
              Motorsport · Operating context
            </p>

            <h1 className="mt-5 max-w-[520px] text-[32px] font-bold leading-[1.15] tracking-[-0.015em] text-white sm:text-[38px] lg:text-[42px]">
              Coordinate the organizations behind a motorsport event.
            </h1>

            <p className="mt-6 max-w-[520px] text-[13px] leading-[1.65] text-white/85 sm:text-[14px]">
              Explore how session windows, circuit, paddock and pit-lane area
              preparation, responsibilities and operational changes could be
              coordinated across the organizations delivering a motorsport
              event. Circuit racing, rally, karting and endurance formats are
              each distinct — none is presumed supported, and product fit and
              availability must be confirmed for the proposed format and market.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#FFC72C] px-5 py-3 text-[12px] font-bold text-[#2A1F4D] transition-colors hover:bg-[#F5BB14]"
              >
                Discuss Your Sport
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white/40 bg-transparent px-5 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Sports Overview
              </a>
            </div>

            <p className="mt-6 max-w-[520px] text-[10px] leading-[1.5] text-white/60">
              No motorsport-specific workflow is confirmed yet — this page
              explains an approach under review, not a live product claim.
            </p>
          </div>

          <div className="relative h-[280px] w-full overflow-hidden rounded-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:h-[340px] lg:h-[300px]">
            <Image
              src="/images/motorsport/1.png"
              alt="Motorcycle racer leaning into a corner on a race circuit"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
