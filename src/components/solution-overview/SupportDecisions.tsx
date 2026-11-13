import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, TextLink, altBg, ruled, sectionPad, wrap } from "./shared";

const principles = [
  {
    title: "Scoped access",
    text: "Access and actions follow the organization, role and event assignment — enforced on the server, not a hidden interface control.",
  },
  {
    title: "Source context",
    text: "Every record keeps its source, actor and time, so a reviewer can tell what happened from what is merely proposed.",
  },
  {
    title: "Human approvals",
    text: "A recorded check or software status never substitutes for the people authorized to make a safety, sporting or operational decision.",
  },
  {
    title: "Communication states",
    text: "Sent, delivered and acknowledged are tracked as distinct states — a message is never marked complete until a person confirms it.",
  },
];

export function SupportDecisions() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">Designed to support decisions, not replace them.</SectionTitle>
          <Lead className="mt-4 max-w-[790px] text-[15.5px]">
            A recorded check or software status is not a venue safety authorization. Four principles govern how Zoiko
            Sports handles access, context, approval and communication.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white">
          <dl>
            {principles.map((p, i) => (
              <RevealItem
                key={p.title}
                className={`grid gap-1.5 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] md:grid-cols-[384px_1fr] md:gap-0 ${
                  i > 0 ? "border-t border-[#ebe9df]" : ""
                }`}
              >
                <dt className="font-heading text-[14.5px] font-semibold text-ink">{p.title}</dt>
                <dd className="text-[13.5px] leading-[1.6] text-ink-muted">{p.text}</dd>
              </RevealItem>
            ))}
          </dl>
        </RevealGroup>

        <TextLink href="/trust">Visit the Trust Center</TextLink>
      </div>
    </section>
  );
}
