import { Reveal } from "@/components/ui/Reveal";
import { GhostButton, PrimaryButton, wrap } from "./shared";

export function ScheduleCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a1030] text-white">
      {/* Near-black purple on the left, brightening to blue on the right, as in the design */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,#160c2a_0%,#24163f_35%,#1f2d66_70%,#2a72d0_100%)]" />
      <div className="absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#4a5fd6]/35 blur-[110px]" />

      <div className={`${wrap} py-16 lg:py-[104px]`}>
        <Reveal className="max-w-[700px]">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.2] tracking-tight">
            Describe your systems, not a calendar claim.
          </h2>
          <p className="mt-5 max-w-[620px] text-[16px] leading-[1.65] text-white/80">
            Tell us which schedules, venues and organizations are involved today. Scope a Pilot routes to one shared
            review — never automatic acceptance or confirmation that any calendar exchange is supported.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton href="/pilot?topic=integrations">Scope a Pilot</PrimaryButton>
          <GhostButton href="/contact">Contact Zoiko Sports</GhostButton>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 max-w-[570px] text-[12.5px] leading-[1.65] text-white/55">
            Competition directors, venue duty holders and club officials retain every sporting, venue and safety
            decision. No calendar edit, sync status or acknowledgment replaces a qualified official&apos;s judgment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
