import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, PrimaryButton, SectionTitle, TextLink, altBg, pad2, ruled, sectionPad, wrap } from "./shared";

const stages = [
  { title: "Qualify", owner: "Zoiko commercial intake" },
  { title: "Scope", owner: "Sponsor + pilot owner" },
  { title: "Configure", owner: "Implementation engineer" },
  { title: "Operate", owner: "Operations lead + venue liaison" },
  { title: "Evaluate", owner: "Buyer + pilot manager" },
];

export function StartOneEvent() {
  return (
    <section id="pilot-stages" className={`scroll-mt-24 ${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Start with one event or fixture block.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            Agree the participating organizations, workflows, data, decision owners, support arrangements and success
            measures before any live pilot.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {stages.map((s, i) => (
            <RevealItem
              key={s.title}
              className="group border border-[#DEDAD0] bg-white px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70"
            >
              <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-2.5 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] text-ink-muted">{s.owner}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <PrimaryButton href="/pilot">Scope a Pilot</PrimaryButton>
          <TextLink href="/solutions/pilot-program" className="">
            See the full pilot process
          </TextLink>
        </Reveal>
      </div>
    </section>
  );
}
