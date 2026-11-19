import { Reveal } from "@/components/ui/Reveal";
import { Footnote, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const columns = ["Organization", "Role at time", "Permitted action · Scope"];

const rows = [
  ["Riverside League", "Competition Director", "Approve schedule change · this fixture block only"],
  ["Northfield Arena", "Venue Operations", "Update readiness checks · this event only"],
  ["Riverside FC", "Club Operations Lead", "Acknowledge update · fixtures involving their club"],
];

export function SharedAccess() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>A shared event doesn&apos;t mean shared access.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Coordination is scoped to organization, event and role — an illustrative model, not a confirmed security
            control.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={`mt-9 overflow-x-auto rounded-2xl border ${line}`}>
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="bg-[#f6f4ee]">
                <tr>
                  {columns.map((c, i) => (
                    <th
                      key={c}
                      scope="col"
                      className={`px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/40 ${i > 0 ? `border-l ${line}` : ""}`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]} className={`border-t ${line} transition-colors duration-300 hover:bg-[#fbfaf6]`}>
                    {r.map((cell, i) => (
                      <td
                        key={cell}
                        className={`px-4 py-4 text-[14px] text-ink-muted ${i === 0 ? "text-ink" : `border-l ${line}`}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Footnote>Cross-organization access outside the agreed scope is denied, not merely hidden.</Footnote>
      </div>
    </section>
  );
}
