import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cream, divider, Label, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const modes = [
  {
    title: "Manual exchange",
    text: "Share schedules, venue-area requirements or exceptions directly during scoping, per organization.",
    status: "Available by default",
  },
  {
    title: "Scoped file exchange",
    text: "A defined, reviewed import/export format tested for a specific pilot — not a general interchange.",
    status: "Assessed per pilot",
  },
  {
    title: "Validated connection",
    text: "A built, security-reviewed connector to a named calendar provider.",
    status: "Not yet available",
  },
];

export function ThreeModes() {
  return (
    <section id="three-modes" className={`scroll-mt-24 bg-white ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[770px]">
          <SectionTitle>Three modes, clearly separated.</SectionTitle>
          <Lead className="mt-4">
            Each mode has its own owner and written-scope precondition. An icon or color never implies support that
            hasn&apos;t been evidenced.
          </Lead>
        </Reveal>

        <RevealGroup className={`mt-10 grid border ${line} ${cream} md:grid-cols-3`}>
          {modes.map((m, i) => (
            <RevealItem
              key={m.title}
              className={`flex h-full flex-col px-6 py-7 transition-colors duration-300 hover:bg-white ${
                i > 0 ? `border-t md:border-l md:border-t-0 ${line}` : ""
              }`}
            >
              <h3 className="font-heading text-[16px] font-semibold text-ink">{m.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-ink-muted">{m.text}</p>
              <Label className="mt-5">{m.status}</Label>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
