import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, altBg, card, sectionPad, wrap } from "./shared";

const deliveryStates = ["Queued", "Sent", "Delivered", "Failed", "Awaiting acknowledgment", "Acknowledged", "Unknown"];

export function UpdatesAndChanges() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={`${wrap} grid gap-12 lg:grid-cols-2 lg:gap-10`}>
        <Reveal>
          <SectionTitle className="max-w-[560px]">Sending an update is not the same as someone acknowledging it.</SectionTitle>
          <ul className="mt-6 flex flex-wrap gap-2">
            {deliveryStates.map((s) => (
              <li
                key={s}
                className="cursor-default rounded-full border border-[#DEDAD0] bg-white px-3.5 py-1.5 font-heading text-[13px] font-semibold text-ink/80 transition-colors duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink"
              >
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[13.5px] text-ink-muted">
            These states apply only where supported by implementation, never assumed across every channel.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionTitle className="max-w-[560px]">When information changes, show what changed and why.</SectionTitle>
          {/* Fictional sample data — illustrative only. */}
          <div className={`${card} mt-6 bg-white p-5 sm:p-6`}>
            <span className="inline-flex rounded-full bg-[#24163A] px-3 py-1 text-[12px] font-semibold text-brand-yellow">
              Reopened — action required
            </span>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3 font-heading">
              <del className="text-[15px] font-semibold text-ink/35">Due 09:00 PDT</del>
              <span className="text-[16px] font-bold text-ink">Due 09:15 PDT</span>
            </p>
            <p className="mt-3 max-w-[520px] text-[14px] leading-[1.65] text-ink-muted">
              Reason: access delayed by maintenance crew. Changed by: Northfield Arena / Venue Operations. Revision 2.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
