import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Tag, cream, line, sectionPad, wrap } from "./shared";

const columns = ["Field", "Visible to partner", "Notes"];

const fields = [
  { field: "Scope summary", visible: "Yes", note: "A short description of the assigned work." },
  { field: "Accountable organization", visible: "Yes", note: "The organizer or venue — never the partner itself." },
  { field: "Current revision", visible: "Yes", note: "Version number, issuing organization and time." },
  { field: "Dependency", visible: "Where linked", note: "E.g. a readiness check the task relies on." },
  { field: "Purchase order / invoice / worker file", visible: "No", note: "Out of scope by default; not part of this product." },
];

export function TaskBrief() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[740px]">
            A task brief carries its owner, due time and current version — nothing more by default.
          </SectionTitle>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={`mt-9 overflow-x-auto rounded-2xl border ${line} bg-white`}>
            <table className="w-full min-w-[720px] text-left">
              <thead className={cream}>
                <tr>
                  {columns.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/45"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fields.map((f) => (
                  <tr
                    key={f.field}
                    className="border-t border-[#ebe9df] text-[13.5px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6]"
                  >
                    <th scope="row" className="w-[33%] px-4 py-3.5 font-heading font-semibold text-ink">
                      {f.field}
                    </th>
                    <td className="w-[22%] px-4 py-3.5">
                      <Tag>{f.visible}</Tag>
                    </td>
                    <td className="px-4 py-3.5">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
