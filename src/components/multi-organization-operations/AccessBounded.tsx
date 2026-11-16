import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, cream, line, ruled, sectionPad, wrap } from "./shared";

const rules = [
  {
    title: "Time-bounded grants",
    text: "Access to an event or record expires rather than persisting indefinitely by default.",
  },
  {
    title: "Revocation takes effect",
    text: "Removing a person or organization invalidates cached links and prior access, not just new requests.",
  },
  {
    title: "Denied without leaking",
    text: "An unauthorized request returns a generic denial — never a reason that reveals restricted content.",
  },
];

export function AccessBounded() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">Access across organizations stays bounded and revocable.</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            A program groups organizations for one event; it never widens who can act beyond what each has agreed.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 md:grid-cols-3">
          {rules.map((r) => (
            <RevealItem
              key={r.title}
              className={`group h-full rounded-2xl border ${line} ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {r.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-ink-muted">{r.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <p className={`mt-8 rounded-2xl border border-dashed ${line} bg-white px-6 py-5 text-[13.5px] text-ink-muted`}>
            Denied example: a request for another organization&apos;s event data receives &quot;Related record
            unavailable&quot; — never a reason that reveals restricted content.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
