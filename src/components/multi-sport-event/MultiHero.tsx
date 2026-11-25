import Image from "next/image";

export default function MultiHero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#1A1038] via-[#2A1F5C] to-[#2563D6] py-16 text-white antialiased sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#FFC72C]">
              Multi-sport events · Future / evidence-gated
            </p>

            <h1 className="mt-5 max-w-[520px] text-[32px] font-bold leading-[1.15] tracking-[-0.015em] text-white sm:text-[38px] lg:text-[42px]">
              Coordinate the people and decisions behind a multi-sport program.
            </h1>

            <p className="mt-6 max-w-[520px] text-[13px] leading-[1.65] text-white/85 sm:text-[14px]">
              Explore how independently governed sporting events could share a
              program, a venue and a schedule — while each sport&apos;s
              organizer, competition authority and venue duty holder keep their
              own decisions. No combination of sports, markets or multi-sport
              workflow is validated yet, and none is presumed supported.
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
              No multi-sport workflow is confirmed yet — this page explains an
              approach under review, not a live product claim.
            </p>
          </div>

          <div className="relative h-[280px] w-full overflow-hidden rounded-xl sm:h-[340px] lg:h-[340px]">
            <Image
              src="/images/multi/1.png"
              alt="Athletes from multiple sports gathered together"
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
