import { Reveal } from "@/components/ui/Reveal";
import { altBg, divider, Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

export function DataOwnership() {
  return (
    <section className={`${altBg} ${divider} ${sectionPad}`}>
      <div className={`${wrap} grid items-start gap-10 lg:grid-cols-[1fr_358px] lg:gap-16`}>
        <Reveal className="max-w-[830px]">
          <SectionTitle>Data ownership follows the organization, not the request.</SectionTitle>
          <Lead className="mt-4">
            If a venue, club or league partner owns a system or data you describe, that organization authorizes its
            own disclosure. Describing a system here doesn&apos;t grant your organization — or Zoiko Sports — rights to
            someone else&apos;s data.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-[358px] lg:mx-0">
          <Photo
            src="/images/request-an-integration/ownership-partner-yoga.webp"
            alt="Two women holding side-plank yoga poses on mats in front of tropical plants"
            sizes="358px"
            className={`aspect-[360/248] w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
