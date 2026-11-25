import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PrimaryButton, sectionPad, soft, wrap } from "./shared";

const stages = ["Qualify", "Scope", "Configure", "Operate", "Evaluate"];

export function ScopingPrinciple() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="grid overflow-hidden rounded-2xl lg:grid-cols-[1.17fr_1fr]">
          <div className="bg-[linear-gradient(135deg,#24163A_0%,#22224f_55%,#1f3466_100%)] px-7 py-12 text-white sm:px-12 lg:px-[62px] lg:py-[70px]">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-brand-yellow">Scoping principle</p>
            <h2 className="mt-4 max-w-[480px] text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.12] tracking-tight">
              Plan the connection before promising one.
            </h2>
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.75] text-white/70">
              We start with the systems, rights, data quality, workflow, and support constraints for a defined event or
              fixture block. A written scope identifies specific responsibilities, methods, exclusions, and measures.
            </p>
            <div className="mt-9">
              <PrimaryButton href="/pilot?topic=integrations" arrow>
                Start a scoped discussion
              </PrimaryButton>
            </div>
          </div>

          <div className={`${soft} flex flex-col justify-center px-7 py-10 sm:px-12 lg:px-[42px]`}>
            <RevealGroup>
              {stages.map((s, i) => (
                <RevealItem
                  key={s}
                  className="group flex items-baseline gap-8 border-b border-[#E3DFD5] py-[17px] transition-colors duration-300"
                >
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
              Stages describe the process, not a guaranteed timeline or acceptance.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
