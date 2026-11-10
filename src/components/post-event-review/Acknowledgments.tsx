import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Footnote, Lead, SectionTitle, cell, rowClass, rowHead, ruled, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const recipients = [
  { group: "Match officials", delivery: "Delivered 12:16", ack: "Acknowledged", asOf: "12:16 PDT", late: false },
  { group: "Clarkson Academy", delivery: "Delivered 12:16", ack: "Acknowledged", asOf: "12:16 PDT", late: false },
  { group: "Meridian Club", delivery: "Delivered 12:16", ack: "Acknowledged", asOf: "12:16 PDT", late: false },
  { group: "Stewarding lead", delivery: "Delivered 12:16", ack: "Acknowledged (late)", asOf: "12:18 PDT", late: true },
];

export function Acknowledgments() {
  return (
    <section className={`bg-white ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Delivered is not the same as acknowledged.</SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            Channel delivery status and a human&apos;s affirmative acknowledgment are tracked and shown separately, with
            the actor and time who confirmed it.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Recipient group", "Delivery", "Acknowledgment", "As of"]}>
            {recipients.map((r) => (
              <tr key={r.group} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {r.group}
                </th>
                <td className={cell}>{r.delivery}</td>
                <td className={`${cell} font-semibold ${r.late ? "text-[#9a6b00]" : "text-ink"}`}>{r.ack}</td>
                <td className={cell}>{r.asOf}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Footnote>
          As of 12:18 PDT. A delivery receipt or view event is never shown as a substitute for human acknowledgment.
        </Footnote>
      </div>
    </section>
  );
}
