import { Reveal } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, Photo, ruled, SampleTag, sectionPad, SectionTitle, wrap } from "./shared";

const fields = [
  { label: "Event", value: "Riverside Invitational · Northfield Arena" },
  { label: "Sport / format", value: "Not specified in this example — illustrative only" },
  { label: "Coordination point", value: "Access-plan review and steward count approval" },
  { label: "Status", value: "Illustrative — not a live readiness signal" },
];

export function CoordinationPattern() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">One coordination pattern, not one supported sport.</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            The sport is intentionally unspecified below. This shows how one event gets coordinated across
            organizations — not which sports are available today.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-3 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <dl className={`h-full rounded-md border ${line} bg-white px-7 py-5 shadow-[0_18px_40px_-30px_rgba(36,22,58,0.35)]`}>
              {fields.map((f, i) => (
                <div key={f.label} className={`py-4 ${i > 0 ? `border-t ${line}` : ""}`}>
                  <dt>
                    <Kicker className="text-[10.5px]!">{f.label}</Kicker>
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <Photo
              src="/images/discuss-your-sport/pattern-basketball-drive.webp"
              alt="Basketball player in a white jersey driving to the basket"
              sizes="(min-width: 1024px) 640px, 95vw"
              className="aspect-[520/324] h-full w-full rounded-md!"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
