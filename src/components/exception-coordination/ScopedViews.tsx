import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, card, cream, sectionPad, wrap } from "./shared";

/** Illustrative role views — not a real organization's permissions. */
const views = [
  {
    title: "Venue Operations",
    sees: "Its own owned check and exception detail, due times and evidence status.",
    withheld: "Other organizations’ private records and unrelated organizer decisions.",
  },
  {
    title: "Riverside League · Competition Director",
    sees: "Permitted exceptions, impact summaries and the decision it must authorize.",
    withheld: "Venue-private evidence and internal venue task detail.",
  },
];

export function ScopedViews() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5`}>
        <div className="flex flex-col">
          <Reveal>
            <SectionTitle className="max-w-[720px]">
              Shared coordination does not mean shared access to every record.
            </SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Each participating organization acts within its own authorized view of the same event.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-2.5 md:mt-auto md:grid-cols-2 md:pt-10">
            {views.map((v) => (
              <RevealItem key={v.title} className={`${card} ${cream} p-6`}>
                <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-ink/50">
                  Illustrative role view
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 max-w-[360px] text-[14px] leading-[1.6] text-ink-muted">Sees: {v.sees}</p>
                <p className="mt-3 max-w-[360px] text-[13.5px] leading-[1.6] text-ink/45">Withheld: {v.withheld}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[320px]">
          <Photo
            src="/images/exception-coordination/access-rugby-run.webp"
            alt="Rugby player running with the ball tucked under one arm"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
