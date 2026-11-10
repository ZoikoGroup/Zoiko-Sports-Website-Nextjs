import { Reveal } from "@/components/ui/Reveal";
import { Lead, SampleTag, SectionTitle, altBg, cream, sectionPad, wrap } from "./shared";

/** Fictional sample data — illustrative only. */
const scopedRecords = [
  {
    record: "EX-105 · Entry backlog remains",
    type: "Exception",
    sourceOrg: "Venue Operations",
    owner: "Venue Operations",
    updated: "12:10 PDT",
    visibility: "Event-scoped",
  },
  {
    record: "EX-104 · Turnstile 4 offline",
    type: "Exception",
    sourceOrg: "Venue Operations",
    owner: "Venue Operations",
    updated: "12:07 PDT",
    visibility: "Event-scoped",
  },
  {
    record: "DEC-021 · Start time change",
    type: "Decision",
    sourceOrg: "Riverside League",
    owner: "Competition Director",
    updated: "12:15 PDT",
    visibility: "Event-scoped",
  },
];

const columns = ["Record", "Type", "Source org", "Owner", "Updated", "Visibility"];

export function ScopedSearch() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Find a record without seeing past your scope.</SectionTitle>
          <Lead className="mt-4 max-w-[680px] text-[15.5px]">
            Showing records available to your current event and organization context. There is no cross-organization
            record search.
          </Lead>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#DEDAD0] bg-white px-5 py-4"
        >
          <p className="font-heading text-[14px] font-semibold text-ink">
            Viewing as Riverside League · Competition Operations · Riverside Invitational
          </p>
          <p className="text-[13px] text-ink/45">
            {scopedRecords.length} of {scopedRecords.length} authorized records shown
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 overflow-x-auto rounded-2xl border border-[#DEDAD0] bg-white">
          <table className="w-full min-w-[900px] text-left">
            <thead className={cream}>
              <tr>
                {columns.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/45 first:pl-6"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scopedRecords.map((r) => (
                <tr
                  key={r.record}
                  className="border-t border-[#ebe9df] text-[14px] text-ink-muted transition-colors duration-200 hover:bg-[#fbfaf6]"
                >
                  <th scope="row" className="py-4 pl-6 pr-4 font-heading font-semibold text-ink">
                    {r.record}
                  </th>
                  <td className="px-4 py-4">{r.type}</td>
                  <td className="px-4 py-4">{r.sourceOrg}</td>
                  <td className="px-4 py-4">{r.owner}</td>
                  <td className="whitespace-nowrap px-4 py-4 font-semibold text-ink">{r.updated}</td>
                  <td className="whitespace-nowrap px-4 py-4 font-semibold text-ink">{r.visibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="mt-7 text-[13px] text-ink/45">
          Record identifiers, organizations and times shown are fictional specimen data.
        </p>
      </div>
    </section>
  );
}
