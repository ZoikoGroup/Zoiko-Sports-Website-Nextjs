import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, SectionTitle, altBg, cream, ruled, sectionPad, wrap } from "./shared";

const steps = [
  {
    title: "Request",
    text: "Venue Operations reports an exception or requests a schedule review.",
    src: "step-request-volleyball-dig",
    alt: "Volleyball player bumping the ball low on the court",
  },
  {
    title: "Review",
    text: "The organizer’s authorized role reviews the request against source evidence.",
    src: "step-review-volleyball-serve",
    alt: "Volleyball player in red arching back to serve",
  },
  {
    title: "Owner assignment",
    text: "A named decision maker is assigned — never resolved by default.",
    src: "step-owner-baseball-pitch",
    alt: "Baseball pitcher in pinstripes striding into a delivery",
  },
  {
    title: "Respond",
    text: "The decision is recorded and the affected organizations are notified.",
    src: "step-respond-softball-pitch",
    alt: "Ceremonial first pitch thrown with a high leg kick",
  },
];

export function HandoffSteps() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">
            A cross-organization handoff follows four steps — never a silent overwrite.
          </SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            A recipient&apos;s note can never overwrite another organization&apos;s authoritative record.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-6 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <RevealItem key={s.title} className={`group h-full ${cream}`}>
              <div className="relative aspect-[320/200] overflow-hidden border-b-2 border-brand-yellow">
                <Image
                  src={`/images/multi-organization-operations/${s.src}.webp`}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 95vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="px-5 pb-8 pt-6">
                <Kicker className="text-[11px]">Step {String(i + 1).padStart(2, "0")}</Kicker>
                <h3 className="mt-2 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
