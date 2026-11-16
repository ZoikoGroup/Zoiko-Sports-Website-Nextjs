import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, dark, line, ruled, sectionPad, wrap } from "./shared";

const decisions = [
  "Venue safety and opening authority.",
  "Competition schedule and approvals.",
  "Credentialing, insurance and licensing.",
  "Emergency response.",
];

export function StillDecide() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">
            What the platform could coordinate. What responsible organizations still decide.
          </SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Software does not certify a venue as safe, verify a credential, or replace a human decision maker.
          </Lead>
        </Reveal>

        <div className="mt-9 grid lg:grid-cols-2">
          <Reveal delay={0.1} className="min-h-[270px]">
            <Photo
              src="/images/contractors-service-partners/decide-volleyball-dig.webp"
              alt="Close-up of a volleyball player bumping the ball with forearms together"
              sizes="(min-width: 1024px) 640px, 95vw"
              className={`h-full w-full border ${line} lg:rounded-r-none`}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className={`h-full rounded-2xl ${dark} px-7 py-7 lg:rounded-l-none`}>
              <p className="border-b border-white/10 pb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-yellow">
                Responsible organizations still decide
              </p>
              <RevealGroup role="list">
                {decisions.map((d) => (
                  <RevealItem
                    role="listitem"
                    key={d}
                    className="border-b border-white/10 py-3.5 text-[14px] text-white/75 last:border-b-0"
                  >
                    {d}
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
