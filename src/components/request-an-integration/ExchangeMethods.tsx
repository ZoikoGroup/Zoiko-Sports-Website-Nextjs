import { Reveal } from "@/components/ui/Reveal";
import { cream, divider, Lead, line, sectionPad, SectionTitle, wrap } from "./shared";

const methods = [
  {
    method: "Manual exchange",
    means: "Your team re-enters or shares data by hand.",
    confirmed: "Available immediately, no review needed",
  },
  {
    method: "Assessed import / export",
    means: "File-based exchange, reviewed for the specific systems you describe.",
    confirmed: "Confirmed in the written pilot scope",
  },
  {
    method: "Future technical connection",
    means: "An API or webhook connection, subject to separate technical review.",
    confirmed: "Evaluated case by case, never promised here",
  },
  {
    method: "Explicitly excluded",
    means: "Anything outside the agreed scope for this pilot.",
    confirmed: "Named in writing, never assumed",
  },
];

const th = "px-4 py-3.5 text-left text-[10.5px] font-semibold uppercase tracking-[0.1em] text-ink/45";
const td = "px-4 py-4 text-[13.5px]";

export function ExchangeMethods() {
  return (
    <section className={`bg-white ${divider} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="max-w-[770px]">
          <SectionTitle className="max-w-[640px]">Every exchange method is named, not assumed.</SectionTitle>
          <Lead className="mt-4">
            A reviewer confirms which of these applies to each system you describe — in writing, as part of the pilot
            scope.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className={`mt-8 overflow-x-auto rounded-xl border ${line}`}>
          <table className="w-full min-w-[680px] border-collapse">
            <thead className={cream}>
              <tr>
                <th scope="col" className={`${th} w-[27.5%]`}>
                  Exchange method
                </th>
                <th scope="col" className={`${th} border-l ${line} w-[40%]`}>
                  What it means
                </th>
                <th scope="col" className={`${th} border-l ${line}`}>
                  Confirmed by
                </th>
              </tr>
            </thead>
            <tbody>
              {methods.map((m) => (
                <tr key={m.method} className={`border-t ${line} transition-colors duration-300 hover:bg-[#FBFAF7]`}>
                  <th scope="row" className={`${td} text-left font-semibold text-ink`}>
                    {m.method}
                  </th>
                  <td className={`${td} border-l ${line} text-ink-muted`}>{m.means}</td>
                  <td className={`${td} border-l ${line} text-ink-muted`}>{m.confirmed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
