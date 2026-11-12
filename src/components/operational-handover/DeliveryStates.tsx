import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTitle, altBg, card, cream, ruled, sectionPad, wrap } from "./shared";

const states = [
  { title: "Queued", text: "Awaiting attempt. An update is queued; the recipient may not have received it." },
  { title: "Delivered", text: "Channel reports delivery. A human response is still required." },
  { title: "Acknowledged", text: "An explicit person action, verified by actor and time — never inferred." },
  { title: "Accepted", text: "The recipient organization agreed to the specified next action for this version." },
];

export function DeliveryStates() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>
            &quot;Delivered&quot; is not &quot;acknowledged.&quot;
            <br />
            &quot;Acknowledged&quot; is not &quot;accepted.&quot;
          </SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4">
          {states.map((s) => (
            <RevealItem key={s.title} className={`${card} ${cream} p-6`}>
              <h3 className="text-[15.5px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 max-w-[260px] text-[14px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
