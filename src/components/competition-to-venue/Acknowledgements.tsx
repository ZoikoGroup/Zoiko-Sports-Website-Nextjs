import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Lead, SectionTitle, altBg, ruled, StatePill, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const recipients = [
  { recipient: "Officials", delivered: "Delivered", ack: "Acknowledged", time: "12:16 PDT" },
  { recipient: "Participating clubs", delivered: "Delivered", ack: "Acknowledged", time: "12:16 PDT" },
  { recipient: "Stewarding lead", delivered: "Delivered", ack: "Acknowledged", time: "12:18 PDT" },
];

export function Acknowledgements() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">&quot;Sent&quot; is not &quot;delivered.&quot; &quot;Delivered&quot; is not &quot;acknowledged.&quot;</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            When multiple organizations need the revised plan, each recipient&apos;s response is tracked on its own.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Recipient", "Delivered", "Acknowledged", "Actor time"]} minWidth={720}>
            {recipients.map((r) => (
              <tr key={r.recipient} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {r.recipient}
                </th>
                <td className={cell}>{r.delivered}</td>
                <td className={cell}>
                  <StatePill>{r.ack}</StatePill>
                </td>
                <td className={`${cell} whitespace-nowrap`}>{r.time}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>
      </div>
    </section>
  );
}
