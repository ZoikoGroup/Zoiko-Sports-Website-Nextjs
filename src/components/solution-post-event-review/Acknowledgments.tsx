import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Footnote, Lead, SectionTitle, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const recipients = [
  { group: "Match officials", delivery: "Delivered 12:16", ack: "Acknowledged", asOf: "12:16 PDT" },
  { group: "Clarkson Academy", delivery: "Delivered 12:16", ack: "Acknowledged", asOf: "12:16 PDT" },
  { group: "Meridian Club", delivery: "Delivered 12:16", ack: "Acknowledged", asOf: "12:16 PDT" },
  { group: "Stewarding lead", delivery: "Delivered 12:16", ack: "Acknowledged (late)", asOf: "12:18 PDT", late: true },
];

export function Acknowledgments() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Delivered is not the same as acknowledged.</SectionTitle>
          <Lead className="mt-4 max-w-[780px] text-[15.5px]">
            Channel delivery status and a human&apos;s affirmative acknowledgment are tracked and shown separately, with
            the actor and time who confirmed it.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Recipient group", "Delivery", "Acknowledgment", "As of"]} minWidth={760}>
            {recipients.map((r) => (
              <tr key={r.group} className={rowClass}>
                <th scope="row" className={`${rowHead} w-[33%]`}>
                  {r.group}
                </th>
                <td className={`${cell} w-[21%]`}>{r.delivery}</td>
                <td className={`${cell} w-[20%] text-[13px] font-semibold ${r.late ? "text-[#9a6b00]" : "text-ink"}`}>
                  {r.ack}
                </td>
                <td className={`${cell} text-[13px]`}>{r.asOf}</td>
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
