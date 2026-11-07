import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { fixtureProblems } from "@/data/competition-operations";
import { Lead, SectionTitle, card, sectionPad, wrap } from "./shared";

export function OneFixture() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>One fixture. Multiple operating versions.</SectionTitle>
          <Lead className="mt-4 max-w-[720px]">
            A revised start time can reach the competition office while venue access plans and club travel arrangements
            still reflect the old schedule.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-3 md:grid-cols-3">
          {fixtureProblems.map((p, i) => (
            <RevealItem key={p.title} className={`${card} p-7`}>
              <p className="text-[12px] font-semibold text-ink/40">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-[17px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 max-w-[340px] text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
