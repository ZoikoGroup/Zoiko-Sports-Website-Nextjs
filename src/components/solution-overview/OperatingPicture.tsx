import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SampleTag, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const panels = [
  {
    label: "Schedule",
    rows: [
      { title: "Riverside Invitational · RV-026", text: "Northfield Arena · Sep 26, 2026" },
      { title: "Viewing as", text: "Riverside League · Competition Operations" },
    ],
  },
  {
    label: "Readiness",
    rows: [
      { title: "14 of 16 checks complete", text: "As of 08:50 PDT" },
      { title: "Open", text: "Ramp inspection (09:00) · Steward count approval (10:00)" },
    ],
  },
  {
    label: "Exceptions",
    rows: [
      { title: "EX-104 · Turnstile 4 outage", text: "11:52–12:07, restored" },
      { title: "EX-105 · Entry backlog", text: "Opened 12:10, linked to EX-104" },
    ],
  },
];

export function OperatingPicture() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One event, one shared — and scoped — operating picture.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            Riverside Invitational · Northfield Arena · Saturday, September 26, 2026 · 08:50 PDT. A completion count or
            acknowledgment state is a coordination snapshot, never a safety or outcome guarantee.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_310px]">
          {panels.map((p) => (
            <RevealItem
              key={p.label}
              className="border border-[#DEDAD0] bg-white px-6 py-6 transition-colors duration-300 hover:border-brand-yellow/70"
            >
              <Kicker className="text-[11px] font-semibold tracking-[0.1em]">{p.label}</Kicker>
              <dl>
                {p.rows.map((r) => (
                  <div key={r.title} className="mt-3 border-t border-[#ebe9df] pt-3">
                    <dt className="font-heading text-[14px] font-semibold text-ink">{r.title}</dt>
                    <dd className="mt-0.5 text-[13px] leading-[1.55] text-ink-muted">{r.text}</dd>
                  </div>
                ))}
              </dl>
            </RevealItem>
          ))}

          <RevealItem className="min-h-[194px]">
            <Photo
              src="/images/solution-overview/picture-basketball-drive.webp"
              alt="Basketball player driving to the basket with the ball in front of a crowd"
              sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 95vw"
              className="h-full w-full rounded-none!"
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
