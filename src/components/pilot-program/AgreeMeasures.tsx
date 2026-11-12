import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

const measures = [
  {
    title: "Readiness check completion",
    text: "Share of agreed readiness checks confirmed complete.",
    ratio: "checks confirmed / checks in agreed scope",
    window: "Event week",
  },
  {
    title: "Handover response time",
    text: "Time to a recorded recipient response.",
    ratio: "response time per handover (median)",
    window: "Pilot period",
  },
  {
    title: "Manual workarounds",
    text: "Work done outside the recorded workflow.",
    ratio: "count of manual workarounds",
    window: "Pilot period",
  },
  {
    title: "Exception resolution",
    text: "Exceptions closed with a recorded owner.",
    ratio: "exceptions closed / exceptions raised",
    window: "Event day",
  },
];

export function AgreeMeasures() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[680px]">Agree what will be measured before the event.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            So the review can distinguish operational evidence from assumptions. No numeric result is published without
            evidence.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_629px] lg:gap-5">
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {measures.map((m) => (
              <RevealItem key={m.title} className={`${card} ${cream} p-5 sm:p-6`}>
                <h3 className="text-[15.5px] font-semibold text-ink">{m.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-ink">{m.text}</p>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-ink/45">Numerator / denominator: {m.ratio}</p>
                <p className="mt-2.5 text-[12.5px] text-ink/45">Window: {m.window}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="min-h-[300px]">
            <Photo
              src="/images/pilot-program/measures-pitcher.webp"
              alt="Baseball pitcher in a grey road uniform about to release the ball"
              sizes="(min-width: 1024px) 629px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
