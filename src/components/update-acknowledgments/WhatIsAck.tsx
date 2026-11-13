import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, cream, sectionPad, wrap } from "./shared";

const states = [
  { title: "Recorded decision", text: "An authorized person approved a specific change to the event plan." },
  { title: "Sent / delivered", text: "The update reached a supported channel — not that anyone has read it." },
  { title: "Human acknowledged", text: "An authorized recipient performed a recorded, attributable response." },
  { title: "Still pending", text: "No acknowledgment action has been recorded yet for this version." },
];

export function WhatIsAck() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid lg:grid-cols-[1fr_378px]`}>
        <div className="flex flex-col lg:pt-6">
          <Reveal>
            <SectionTitle>What is an event update acknowledgment?</SectionTitle>
            <Lead className="mt-7 max-w-[890px] text-[16.5px]">
              An event update acknowledgment is an affirmative, attributable response to a specific version of an
              operational update. It can help organizers and participating teams distinguish an update being sent or
              delivered from a required person confirming the current instruction. Acknowledgment does not itself
              approve the underlying decision, authorize venue operations or guarantee that an instruction was followed.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {states.map((s) => (
              <RevealItem key={s.title} className={`h-full border-t-2 border-brand-yellow ${cream} px-5 py-6`}>
                <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <blockquote className={`mt-7 border border-[#DEDAD0] ${cream} px-6 py-6 text-[14px] text-ink-muted lg:border-r-0`}>
              &ldquo;Acknowledgment is a separate, attributable response to the current update version — not a delivery
              receipt.&rdquo;
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-8 min-h-[360px] lg:mt-0">
          <Photo
            src="/images/update-acknowledgments/what-pole-vault.webp"
            alt="Pole vaulter swinging up on a fully bent pole"
            sizes="(min-width: 1024px) 378px, 95vw"
            className="h-full w-full rounded-none! border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
