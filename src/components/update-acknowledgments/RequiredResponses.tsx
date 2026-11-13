import { Reveal } from "@/components/ui/Reveal";
import { DataTable, Footnote, Lead, SampleTag, SectionTitle, Tag, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const responses = [
  { who: "Match Officials — Officials Coordination", ack: "Acknowledged 12:16 PDT" },
  { who: "Riverside FC — Club Operations", ack: "Acknowledged 12:16 PDT" },
  { who: "Harbor City FC — Club Operations", ack: "Acknowledged 12:16 PDT" },
  { who: "Stewarding Lead — Venue Operations", ack: "Acknowledged 12:18 PDT" },
];

export function RequiredResponses() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Required responses — update v2</SectionTitle>
          <Lead className="mt-4 max-w-[720px] text-[15.5px]">
            4 of 4 required recipient groups acknowledged by 12:18 PDT — illustrative only. Group count is a framing
            device, not a claim about every individual member.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Role & org", "Requirement", "Delivery", "Human response", "Version", "Status"]} minWidth={960}>
            {responses.map((r) => (
              <tr key={r.who} className={rowClass}>
                <th scope="row" className={`${rowHead} w-[24%] pr-10`}>
                  {r.who}
                </th>
                <td className={`${cell} w-[14.5%]`}>Required</td>
                <td className={`${cell} w-[17.5%]`}>Delivered 12:16 PDT</td>
                <td className={`${cell} w-[19.5%] text-[13px] font-semibold text-ink`}>{r.ack}</td>
                <td className={`${cell} w-[11%]`}>v2</td>
                <td className={cell}>
                  <Tag className="bg-[#efede6] normal-case tracking-normal text-ink">Closed</Tag>
                </td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Footnote className="mt-9">Recipient names, organizations and times shown are fictional specimen data.</Footnote>
      </div>
    </section>
  );
}
