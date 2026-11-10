import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Note, Photo, SectionTitle, cream, ruled, sectionPad, wrap } from "./shared";

const classes = [
  {
    title: "Event-shared",
    text: "Visible to every authorized participant in this event, such as the published schedule.",
  },
  {
    title: "Organization-restricted",
    text: "Owned by one organization and visible only to its members, such as internal staffing plans.",
  },
];

export function AudienceClasses() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        {/* Desktop: the photo column stretches to the left column's height; both carry the same yellow rule */}
        <div className="grid lg:grid-cols-[1fr_426px]">
          <div className="flex flex-col">
            <Reveal className="lg:pr-12">
              <SectionTitle className="max-w-[680px]">Shared event information is not shared organizational data.</SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                Every record carries one of three audience classifications. Only authorized people can approve event
                decisions regardless of who can view them.
              </Lead>
            </Reveal>

            <RevealGroup className={`mt-9 grid flex-1 border-t-2 border-brand-yellow ${cream} sm:grid-cols-2`}>
              {classes.map((c) => (
                <RevealItem key={c.title} className="px-5 py-8 sm:px-6">
                  <h3 className="text-[16.5px] font-semibold text-ink">{c.title}</h3>
                  <p className="mt-3 max-w-[360px] text-[13.5px] leading-[1.65] text-ink-muted">{c.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="mt-10 border-t-2 border-brand-yellow lg:mt-0">
            <Photo
              src="/images/organizations-access/audience-hammer-throw.webp"
              alt="Hammer thrower straining through a turn inside the throwing cage"
              sizes="(min-width: 1024px) 426px, 95vw"
              className="aspect-[426/313] w-full rounded-none! lg:aspect-auto lg:h-full lg:min-h-[300px]"
            />
          </Reveal>
        </div>

        <Reveal>
          <Note variant="dashedCream" className="mt-8">
            Restricted content always renders as &quot;Not available in this context&quot; — never a blurred or
            partially redacted true value.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
