import Image from "next/image";
import Link from "next/link";

export function CricketCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c163a] py-20 sm:py-24 lg:py-28 text-white">
      {/* Background Graphic from cc6.png */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/cricket/cc6.png"
          alt="Cricket stadium lights illumination"
          fill
          priority={false}
          className="object-cover object-center opacity-85"
        />
        {/* Soft vignette/gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09112e]/50 via-transparent to-[#070c24]/80" />
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 text-center">
        {/* Heading */}
        <h2 className="mx-auto max-w-[820px] font-heading text-[clamp(2rem,3.6vw,2.85rem)] font-bold leading-[1.15] tracking-tight text-white">
          Describe the event, not a claim of support.
        </h2>

        {/* Subtitle / Description */}
        <p className="mx-auto mt-4 max-w-[700px] text-[15.5px] sm:text-[16.5px] leading-[1.7] text-white/85">
          Tell us about the cricket format, the competition, the organizations involved and the coordination problem. Discuss Your Sport routes to one shared review — never automatic acceptance or confirmation that cricket is supported.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/sports/discuss-your-sport"
            className="inline-flex items-center justify-center rounded-lg bg-[#fecf23] px-6 py-3.5 font-heading text-[15px] font-semibold text-[#1d1433] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5c400] hover:shadow-lg shadow-black/20"
          >
            Discuss Your Sport
          </Link>

          <Link
            href="/sports"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-[#162044]/60 px-6 py-3.5 font-heading text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
          >
            Explore Sports Overview
          </Link>
        </div>
      </div>
    </section>
  );
}
