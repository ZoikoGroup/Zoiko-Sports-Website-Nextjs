import { Reveal } from "@/components/ui/Reveal";
import { altBg, Lead, line, Photo, PrimaryButton, ruled, sectionPad, SectionTitle, wrap } from "./shared";

export function BeforeYouStart() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_306px] lg:gap-10`}>
        <Reveal>
          <SectionTitle>Before you start.</SectionTitle>
          <Lead className="mt-4 max-w-[900px] text-[15.5px]">
            Keep first contact high-level — the shared pilot request only needs sport/competition type, event timing,
            organization type, coordination challenge and whether partner organizations are involved.
          </Lead>

          <div className={`mt-6 max-w-[900px] rounded-md border ${line} bg-white px-6 py-4`}>
            <p className="text-[13.5px] leading-[1.65] text-ink-muted">
              Do not include athlete medical details, safeguarding information, credentials, individual incident
              reports or other sensitive participant information in your request.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <PrimaryButton href="/pilot?topic=sport">Scope a Pilot</PrimaryButton>
            <p className="text-[12.5px] text-ink/45">A request starts a review; it is not confirmation of a pilot.</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <Photo
            src="/images/discuss-your-sport/before-basketball-drive.webp"
            alt="Basketball player in a gold jersey dribbling low past a defender"
            sizes="(min-width: 1024px) 306px, 95vw"
            className="aspect-[306/300] w-full rounded-md!"
          />
        </Reveal>
      </div>
    </section>
  );
}
