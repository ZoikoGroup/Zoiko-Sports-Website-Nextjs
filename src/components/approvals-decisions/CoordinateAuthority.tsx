import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const roles = [
  {
    kicker: "Submits",
    title: "Venue Operations",
    text: "Raises an operational request when conditions on-site change.",
    actions: ["Submit request", "Attach evidence"],
  },
  {
    kicker: "Decides",
    title: "Competition Director",
    text: "Reviews the request against the competition's authority and records a decision.",
    actions: ["Approve", "Reject", "Request changes"],
  },
];

export function CoordinateAuthority() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        {/* Desktop: photo column stretches to the left column's height, so its top meets the heading and its bottom meets the white panel */}
        <div className="grid lg:grid-cols-[1fr_427px]">
          <div className="flex flex-col">
            <Reveal className="lg:pr-12">
              <SectionTitle className="max-w-[740px]">Coordinate the decision without transferring authority.</SectionTitle>
              <Lead className="mt-4 max-w-[720px] text-[15.5px]">
                Zoiko Sports is designed to preserve each participating organization&apos;s responsibilities. Approval
                roles depend on the event&apos;s agreed governance, not on the person who entered a request.
              </Lead>
            </Reveal>

            {/* White panel under a yellow rule that continues into the photo's top edge on desktop */}
            <RevealGroup className="mt-10 grid flex-1 border-t-2 border-brand-yellow bg-white pb-6 sm:grid-cols-2">
              {roles.map((r) => (
                <RevealItem key={r.title} className="px-5 pt-8 sm:px-6">
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40">{r.kicker}</p>
                  <h3 className="mt-3 text-[18px] font-semibold text-ink">{r.title}</h3>
                  <p className="mt-3 max-w-[340px] text-[14px] leading-[1.65] text-ink-muted">{r.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {r.actions.map((a) => (
                      <li
                        key={a}
                        className="cursor-default rounded-full bg-[#f4f2ee] px-3 py-1.5 text-[12px] font-semibold text-ink/80 transition-colors duration-300 hover:bg-brand-yellow hover:text-ink"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="mt-10 border-t-2 border-brand-yellow bg-white lg:mt-0 lg:pr-6">
            <Photo
              src="/images/approvals-decisions/authority-field-hockey.webp"
              alt="Field hockey player winding up a hit on a green turf pitch"
              sizes="(min-width: 1024px) 403px, 95vw"
              className="aspect-[403/395] w-full rounded-none! lg:aspect-auto lg:h-full lg:min-h-[360px]"
            />
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-9 rounded-2xl border border-[#DEDAD0] bg-white px-6 py-5 text-[14px] leading-[1.7] text-ink-muted">
            A venue is not considered to have approved a change merely by requesting it. Real-world governing authority
            comes from the event&apos;s agreed competition and venue policy, not from this page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
