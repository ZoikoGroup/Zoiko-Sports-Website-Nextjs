import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, card, pad2, sectionPad, wrap } from "./shared";

const gaps = [
  { title: "Schedule drift", text: "A revised start time reaches the league before the venue plan changes." },
  { title: "Invisible open work", text: "A venue has an open check that the organizer does not see in the agreed handover." },
];

export function OperatingPictures() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5`}>
        <div className="flex flex-col">
          <Reveal>
            <SectionTitle className="max-w-[720px]">One event. Several organizations. Different operating pictures.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              The same fixture can look different depending on who is looking at it, and when they last checked.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-2.5 md:mt-auto md:grid-cols-2 md:pt-10">
            {gaps.map((g, i) => (
              <RevealItem key={g.title} className={`${card} bg-white p-6 sm:p-7`}>
                <p className="text-[12px] font-semibold text-ink/40">{pad2(i + 1)}</p>
                <h3 className="mt-3 text-[16px] font-semibold text-ink">{g.title}</h3>
                <p className="mt-2 max-w-[340px] text-[14px] leading-[1.65] text-ink-muted">{g.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[300px]">
          <Photo
            src="/images/competition-to-venue/problem-balance-beam.webp"
            alt="Gymnast performing a handstand on the balance beam in front of judges"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
