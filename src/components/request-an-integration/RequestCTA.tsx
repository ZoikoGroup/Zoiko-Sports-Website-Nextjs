import { Reveal } from "@/components/ui/Reveal";
import { GhostButton, PrimaryButton, wrap } from "./shared";

export function RequestCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1a1030] text-white">
      {/* Near-black purple on the left, brightening to blue on the right, as in the design */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,#160c2a_0%,#24163f_35%,#1f2d66_70%,#2a72d0_100%)]" />
      <div className="absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#4a5fd6]/35 blur-[110px]" />

      <div className={`${wrap} py-16 lg:py-[104px]`}>
        <Reveal className="max-w-[620px]">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] font-bold leading-[1.2] tracking-tight">
            Bring the system landscape to scoping.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.65] text-white/80">
            The written pilot scope identifies what&apos;s imported, integrated, manually exchanged, or explicitly out
            of scope — agreed before anything operates.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton href="/pilot?topic=integrations">Discuss Integrations</PrimaryButton>
          <GhostButton href="/contact">Contact Zoiko Sports</GhostButton>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 max-w-[510px] text-[12.5px] leading-[1.65] text-white/55">
            A request is an inquiry — not an acceptance, interface order, agreed delivery date, or contractual
            statement of support.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
