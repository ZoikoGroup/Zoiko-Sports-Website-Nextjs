import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Photo, SectionTitle, card, cream, pad2, ruled, sectionPad, wrap } from "./shared";

const sourceProblems = [
  {
    title: "A record looks authoritative without one",
    text: "An entry can appear complete and current while no one can tell which organization supplied it or when it was confirmed.",
  },
  {
    title: "A correction erases what came before",
    text: "Editing a record in place can quietly remove the operating decision it was based on, with no trace of what changed.",
  },
];

export function LostSource() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-stretch gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[780px]">When a record loses its source, review breaks down.</SectionTitle>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-2.5 md:grid-cols-2">
            {sourceProblems.map((p, i) => (
              <RevealItem key={p.title} className={`${card} ${cream} p-6 sm:p-7`}>
                <Kicker className="font-medium tracking-normal">{pad2(i + 1)}</Kicker>
                <h3 className="mt-3 text-[17px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[300px]">
          <Photo
            src="/images/operational-records/problem-sprinter.webp"
            alt="Athlete sprinting out of a cut on a grass field"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
