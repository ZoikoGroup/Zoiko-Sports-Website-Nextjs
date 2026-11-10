import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, Photo, SectionTitle, card, pad2, ruled, sectionPad, wrap } from "./shared";

const problems = [
  {
    title: "Ownership is scattered",
    text: "An entry-ramp inspection has no explicit owner, so no one is accountable for confirming it before gates open.",
  },
  {
    title: "Deadline context is missing",
    text: "A staffing signoff is due before gates, but the due time and dependency are not visible to the people who need it.",
  },
];

export function DifferentLists() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-stretch gap-10 lg:grid-cols-[1fr_420px] lg:gap-2.5`}>
        <div>
          <Reveal>
            <SectionTitle className="max-w-[740px]">Different teams can prepare the same event from different lists.</SectionTitle>
            <Lead className="mt-4 max-w-[760px] text-[15.5px]">
              Organizers, venues and clubs often hold different parts of the operating picture. The proposed value is
              to clarify task ownership and evidence without eliminating each organization&apos;s authority.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-2.5 md:grid-cols-2">
            {problems.map((p, i) => (
              <RevealItem key={p.title} className={`${card} bg-white p-6 sm:p-7`}>
                <Kicker className="font-medium tracking-normal">{pad2(i + 1)}</Kicker>
                <h3 className="mt-3 text-[17px] font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="min-h-[340px]">
          <Photo
            src="/images/readiness-checks/lists-pole-vault.webp"
            alt="Pole vaulter bending the pole at take-off"
            sizes="(min-width: 1024px) 420px, 95vw"
            className="h-full w-full border border-[#DEDAD0]"
          />
        </Reveal>
      </div>
    </section>
  );
}
