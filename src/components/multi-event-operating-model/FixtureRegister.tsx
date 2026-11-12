import { Reveal } from "@/components/ui/Reveal";
import {
  DataTable,
  Footnote,
  Lead,
  SampleTag,
  SectionTitle,
  StatePill,
  altBg,
  cell,
  rowClass,
  rowHead,
  ruled,
  sectionPad,
  wrap,
} from "./shared";

const tbd = "To be agreed";

/** Fictional sample data — illustrative only. */
const fixtures = [
  {
    name: "Riverside Invitational",
    venue: "Northfield Arena",
    tz: "PDT (UTC−07:00)",
    owner: "Riverside League",
    status: "Confirmed",
    verified: "Sep 26, 2026 · 09:00 PDT",
  },
  { name: "Example Fixture 2 — not an actual event", venue: tbd, tz: tbd, owner: tbd, status: "Proposed", verified: "Not verified" },
  { name: "Example Fixture 3 — not an actual event", venue: tbd, tz: tbd, owner: tbd, status: "Excluded", verified: "Not verified" },
];

export function FixtureRegister() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SampleTag />
          <SectionTitle className="mt-4">Which fixtures form the block, and what is currently known.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A proposed register, scoped to the organizations authorized for each row — not a cross-organization feed.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-9">
          <DataTable columns={["Event", "Venue", "Timezone", "Owner org", "Status", "Last verified"]} minWidth={1000}>
            {fixtures.map((f) => (
              <tr key={f.name} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {f.name}
                </th>
                <td className={cell}>{f.venue}</td>
                <td className={`${cell} whitespace-nowrap`}>{f.tz}</td>
                <td className={cell}>{f.owner}</td>
                <td className={cell}>
                  <StatePill>{f.status}</StatePill>
                </td>
                <td className={`${cell} whitespace-nowrap`}>{f.verified}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Footnote>All identifiers, names and counts above are fictional specimen data.</Footnote>
      </div>
    </section>
  );
}
