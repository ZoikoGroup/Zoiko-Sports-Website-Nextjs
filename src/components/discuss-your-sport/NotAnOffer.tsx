import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, sectionPad, SectionTitle, wrap } from "./shared";

export function NotAnOffer() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_339px] lg:gap-16`}>
        <Reveal>
          <SectionTitle>An inquiry is not an offer.</SectionTitle>
          <Lead className="mt-4 max-w-[820px] text-[15.5px]">
            Zoiko Sports does not publish a verified list of supported sports. Describing your sport or event here
            does not mean that sport or format is currently supported — each workflow is reviewed and validated on its
            own before it&apos;s described that way.
          </Lead>
        </Reveal>

        <Reveal delay={0.15}>
          <Photo
            src="/images/discuss-your-sport/inquiry-hurdles-clear.webp"
            alt="Hurdler in a blue top stretched out over a hurdle on a red track"
            sizes="(min-width: 1024px) 339px, 95vw"
            className="aspect-[339/248] w-full rounded-md!"
          />
        </Reveal>
      </div>
    </section>
  );
}
