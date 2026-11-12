import { Reveal } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, sectionPad, wrap } from "./shared";

export function WhatIsHandover() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_377px] lg:gap-16`}>
        <Reveal>
          <SectionTitle>What is an operational handover?</SectionTitle>
          <Lead className="mt-6 max-w-[860px]">
            Operational handover means documenting the next agreed action, the sending and receiving organizations, the
            responsible role, timing and relevant source context.
          </Lead>
        </Reveal>

        <Reveal delay={0.2}>
          <Photo
            src="/images/operational-handover/what-basketball-drive.webp"
            alt="Basketball player in a yellow jersey driving to the basket"
            sizes="(min-width: 1024px) 377px, 95vw"
            className="aspect-[377/194] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
