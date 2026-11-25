import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PrimaryButton, sectionPad, soft, wrap } from "./shared";

const stages = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

export function PilotAssessment() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="grid overflow-hidden rounded-2xl lg:grid-cols-[1.17fr_1fr]">
          <div className="bg-[linear-gradient(135deg,#24163A_0%,#22224f_55%,#1f3466_100%)] px-7 py-12 text-white sm:px-12 lg:px-[62px] lg:py-[70px]">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-brand-yellow">Pilot assessment</p>
            <h2 className="mt-4 max-w-[460px] text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.12] tracking-tight">
              Define the exchange before designing it.
            </h2>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.75] text-white/70">
              Bring the systems landscape, event block, record owners, permitted purpose, and known constraints to the
              scoping conversation. Do not send production files, credentials, tokens, or sensitive personal data.
            </p>
            <div className="mt-9">
              <PrimaryButton href="/pilot?topic=integrations" arrow>
                Discuss data requirements
              </PrimaryButton>
            </div>
          </div>

          <div className={`${soft} flex flex-col justify-center px-7 py-10 sm:px-12 lg:px-[42px]`}>
            <RevealGroup>
              {stages.map((s, i) => (
                <RevealItem key={s} className="group flex items-baseline gap-8 border-b border-[#E3DFD5] py-[17px]">
                  <span className="w-5 text-[11px] font-semibold tracking-[0.12em] text-ink/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-[16px] font-semibold text-ink transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-blue">
                    {s}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
            <p className="mt-6 text-[12px] leading-relaxed text-ink/50">
              The stages describe a governed process, not a delivery-time guarantee.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
