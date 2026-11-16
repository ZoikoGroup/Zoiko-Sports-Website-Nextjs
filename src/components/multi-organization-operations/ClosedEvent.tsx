import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

export function ClosedEvent() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-start gap-8 lg:grid-cols-[1fr_359px] lg:gap-16`}>
        <Reveal className="lg:pl-5 lg:pt-2">
          <SectionTitle>A closed event still carries open follow-up.</SectionTitle>
          <Lead className="mt-5 text-[15.5px]">
            Closing the event record doesn&apos;t close every task. Follow-up ownership, review and retention are kept
            distinct.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <Photo
            src="/images/multi-organization-operations/closed-tennis-return.webp"
            alt="Tennis player stretching for a low return on a clay court"
            sizes="(min-width: 1024px) 359px, 95vw"
            className="aspect-[359/224] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
