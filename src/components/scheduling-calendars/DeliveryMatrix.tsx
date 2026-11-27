import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, divider, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const recipients = [
  { who: "Participating club · Operations Lead", delivered: "12:16 PDT", acknowledged: "12:18 PDT" },
  { who: "Officials coordinator · Assigned official", delivered: "12:16 PDT", acknowledged: "12:16 PDT" },
  { who: "Stewarding lead · Venue Ops", delivered: "12:16 PDT", acknowledged: "Pending — reminder due" },
];

const conflicts = [
  {
    title: "Venue overlap",
    text: "Two proposed sessions claim the same venue area and time.",
    level: "Block · Human review",
  },
  {
    title: "Fixture clash",
    text: "A team or official is scheduled against two fixtures at once.",
    level: "Block · Human review",
  },
  {
    title: "Late notice",
    text: "A change is proposed inside the agreed notice window.",
    level: "Warning",
  },
  {
    title: "Time-zone collision",
    text: "Two sources disagree on the event’s local zone.",
    level: "Block · Human review",
  },
];

const th = "px-4 py-3.5 text-left text-[10.5px] font-semibold uppercase tracking-[0.1em] text-ink/45";
const td = "px-4 py-4 text-[13.5px] text-ink/80";

export function DeliveryMatrix() {
  return (
    <section className={`${altBg} ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[760px]">
          <SectionTitle>Sent, delivered and acknowledged are three different facts.</SectionTitle>
          <Lead className="mt-4">
            A fictional recipient matrix, and the conflict types any future design would need to surface rather than
            silently resolve.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className={`mt-8 overflow-x-auto rounded-xl border ${line}`}>
          <table className="w-full min-w-[620px] border-collapse">
            <thead>
              <tr>
                <th scope="col" className={`${th} w-[37.5%]`}>
                  Recipient organization · Role
                </th>
                <th scope="col" className={`${th} border-l ${line} w-[31.25%]`}>
                  Delivered
                </th>
                <th scope="col" className={`${th} border-l ${line}`}>
                  Acknowledged
                </th>
              </tr>
            </thead>
            <tbody>
              {recipients.map((r) => (
                <tr key={r.who} className={`border-t ${line} transition-colors duration-300 hover:bg-white`}>
                  <td className={td}>{r.who}</td>
                  <td className={`${td} border-l ${line}`}>{r.delivered}</td>
                  <td className={`${td} border-l ${line}`}>{r.acknowledged}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <RevealGroup className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4">
          {conflicts.map((c) => (
            <RevealItem
              key={c.title}
              className={`flex h-full flex-col rounded-xl border ${line} bg-white px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(29,20,51,0.35)]`}
            >
              <h3 className="font-heading text-[15px] font-semibold text-ink">{c.title}</h3>
              <p className="mt-1.5 flex-1 text-[13px] leading-[1.55] text-ink-muted">{c.text}</p>
              <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-ink/45">{c.level}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 text-[12.5px] text-ink/45">
          Blocking conflicts are never bypassed silently — they route to a named human reviewer.
        </p>
      </div>
    </section>
  );
}
