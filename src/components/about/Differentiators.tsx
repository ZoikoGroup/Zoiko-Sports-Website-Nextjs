import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const differentiators = [
  {
    title: "Cross-organization by design",
    text: "Most workflows stop at an organizational boundary. Zoiko Sports is designed around governed coordination between organizations that jointly deliver the same event.",
  },
  {
    title: "The event is the operational anchor",
    text: "The platform connects schedules, venue readiness, responsibilities, exceptions, approvals and follow-up around the event instead of unrelated modules.",
  },
  {
    title: "Governed shared context",
    text: "Not every user should see every record. Access, authority and contribution remain scoped to organization, role and responsibility.",
  },
  {
    title: "Evidence-linked decisions",
    text: "The goal is to preserve who acted, in which role, when, and what information informed the decision where the workflow supports it.",
  },
  {
    title: "Integration-first posture",
    text: "Zoiko Sports connects existing systems and specialist providers rather than assuming the industry will replace every incumbent platform.",
  },
  {
    title: "Operations-to-intelligence path",
    text: "The same connected operational foundation can support richer analytics and AI over time because entities and decisions are structured, not isolated.",
  },
];

export function Differentiators() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>What makes Zoiko Sports different</SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_302px] lg:gap-8">
          <RevealGroup className="grid gap-x-8 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((d, i) => (
              <RevealItem key={d.title} className="group">
                <span className="grid h-[30px] w-[30px] place-items-center rounded-md bg-[#24163A] text-[12px] font-bold text-brand-yellow transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[16.5px] font-semibold text-ink">{d.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-ink-muted">{d.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.2} className="min-h-[340px]">
            <Photo
              src="/images/about/different-basketball.webp"
              alt="Basketball player rising for a dunk in a packed arena"
              sizes="(min-width: 1024px) 302px, 95vw"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
