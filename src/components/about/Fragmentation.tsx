import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

export function Fragmentation() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16 xl:gap-24`}>
        <Reveal>
          <SectionTitle className="max-w-[660px]">
            Sport is connected in the real world. Its systems often are not.
          </SectionTitle>
          <Photo
            src="/images/about/fragmentation-basketball.webp"
            alt="Basketball player driving across an indoor court"
            sizes="(min-width: 1024px) 732px, 95vw"
            className="mt-6 aspect-[732/173] w-full"
          />
        </Reveal>
        <Reveal delay={0.15} className="space-y-4">
          <Lead className="text-[15px]">
            A modern sports event can involve a league or governing body, clubs, venue teams, officials, safety and
            operations staff, contractors, media, commercial partners and technology providers. Each may use different
            systems, different data and different approval paths. The result is not a lack of technology. It is
            fragmentation.
          </Lead>
          <Lead className="text-[15px]">
            Zoiko Sports exists to reduce that fragmentation where coordination matters most: around the competition,
            the venue and the decisions that move an event from plan to execution to review.
          </Lead>
        </Reveal>
      </div>
    </section>
  );
}
