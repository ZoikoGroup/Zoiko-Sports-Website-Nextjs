import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "./shared";

export function DiscussCTA() {
  return (
    <section className="group/cta relative isolate overflow-hidden bg-[#24163A] text-white">
      {/* Same stadium banner as the design's CTA; shared with the other pages */}
      <Image
        src="/images/footer/cta-stadium-banner.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover transition-transform duration-[2500ms] ease-out group-hover/cta:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(20,8,60,0.45),transparent_75%)]" />

      <div className="container-page relative py-16 text-center lg:py-[80px]">
        <Reveal>
          <h2 className="mx-auto max-w-[860px] text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-tight tracking-tight">
            Scope one workflow together.
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-relaxed text-white/80">
            Describe the sport, the organizations and the coordination problem. A request starts a review — never
            automatic acceptance of a pilot or confirmation that a sport is supported.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="/pilot?topic=sport">Scope a Pilot</PrimaryButton>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/80 px-7 py-3.5 font-heading text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            Contact Zoiko Sports
            <ArrowRight className="h-4 w-0 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
