import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

// NOTE: the design shows only these two options (no "Validated integration" card) — built as shown.
const options = [
  {
    title: "Manual exchange",
    text: "Share schedules, venue requirements or exceptions directly during scoping.",
    status: "Available by default",
  },
  {
    title: "Approved import",
    text: "A defined, reviewed file or feed format for existing systems.",
    status: "Assessed per pilot",
  },
];

export function ExistingInformation() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-0.5`}>
        <div className="flex flex-col">
          <Reveal className="lg:pr-10">
            <SectionTitle>Work with the information you already have.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              No connector, feed, scoreboard vendor or governing-body relationship is assumed. Data exchange is
              assessed during scoping.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid flex-1 gap-0.5 md:grid-cols-2">
            {options.map((o) => (
              <RevealItem
                key={o.title}
                className={`group flex h-full flex-col rounded-2xl border ${line} bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
              >
                <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {o.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink-muted">{o.text}</p>
                <Kicker className="mt-auto pt-4 text-[10.5px]!">{o.status}</Kicker>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="min-h-[292px]">
          <Photo
            src="/images/rugby/info-rugby-ankle-tap.webp"
            alt="Rugby player in green diving to tackle a ball carrier in blue"
            sizes="(min-width: 1024px) 427px, 95vw"
            className={`h-full min-h-[292px] w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}
