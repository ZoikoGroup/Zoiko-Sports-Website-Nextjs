import { Reveal } from "@/components/ui/Reveal";
import { Lead, line, Photo, sectionPad, wrap } from "./shared";

export function NotAConnectorPromise() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-start gap-10 lg:grid-cols-[1fr_340px] lg:gap-16`}>
        <Reveal className="max-w-[840px]">
          <h2 className="text-[clamp(1.6rem,2.6vw,2rem)] font-bold leading-[1.2] tracking-tight text-ink">
            An inquiry is not a connector promise.
          </h2>
          <Lead className="mt-4">
            Zoiko Sports does not publish a connector catalog or a list of supported systems. Describing your systems
            here does not mean a specific integration exists or will be built — each exchange method is assessed and
            confirmed in writing before anything operates.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-[340px] lg:mx-0">
          <Photo
            src="/images/request-an-integration/inquiry-climbers-boulder.webp"
            alt="A climber reaching down to pull a partner up the face of a red boulder"
            sizes="340px"
            className={`aspect-[340/309] w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
