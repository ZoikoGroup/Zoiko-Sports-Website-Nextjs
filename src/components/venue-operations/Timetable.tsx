import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import {
  DataTable,
  Kicker,
  Lead,
  Photo,
  SectionTitle,
  StatePill,
  cell,
  cream,
  rowClass,
  rowHead,
  sectionPad,
  wrap,
} from "./shared";

/** Fictional sample data — illustrative only. */
const sides = [
  {
    rule: "border-brand-yellow",
    kicker: "Organizer timetable",
    title: "Riverside League · Fixture start 12:15 PDT",
    text: "Owned and published by the competition organizer.",
  },
  {
    rule: "border-[#24163A]",
    kicker: "Venue-owned work",
    title: "East entrance ramp inspection · due 09:00",
    text: "Final steward count approval · due 10:00",
  },
];

/** Fictional sample data — illustrative only. */
const dependencies = [
  {
    check: "Final steward count approval",
    owner: "Event Manager",
    dependsOn: "Steward roster confirmation",
    due: "10:00 PDT",
    recipient: "Riverside League",
    state: "Pending",
  },
  {
    check: "East entrance ramp inspection",
    owner: "Venue Operations",
    dependsOn: "Maintenance clearance",
    due: "09:00 PDT",
    recipient: "Northfield Arena Ops",
    state: "In progress",
  },
];

export function Timetable() {
  return (
    <section id="venue-workflow" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <div className="grid gap-10 lg:grid-cols-[1fr_478px] lg:gap-10">
          <div>
            <Reveal>
              <SectionTitle className="max-w-[760px]">Connect the timetable to the work that makes delivery possible.</SectionTitle>
              <Lead className="mt-4 max-w-[760px] text-[15.5px]">
                Competition milestones depend on venue-owned operational work. Each side keeps its own authority; the
                link between them is made visible.
              </Lead>
            </Reveal>

            <RevealGroup className="mt-8 grid gap-1 sm:grid-cols-2">
              {sides.map((s) => (
                <RevealItem key={s.kicker} className={`border-t-[3px] ${s.rule} px-6 pt-7`}>
                  <Kicker className="font-semibold">{s.kicker}</Kicker>
                  <h3 className="mt-3 text-[15.5px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 text-[14px] text-ink-muted">{s.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.2} className="min-h-[300px]">
            <Photo
              src="/images/venue-operations/timetable-badminton-medal.webp"
              alt="Badminton medallist holding a national flag overhead"
              sizes="(min-width: 1024px) 478px, 95vw"
              className="h-full w-full rounded-none!"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-8">
          <DataTable columns={["Check", "Owning org", "Depends on", "Due", "Recipient", "State"]} bodyBg={cream}>
            {dependencies.map((d) => (
              <tr key={d.check} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {d.check}
                </th>
                <td className={cell}>{d.owner}</td>
                <td className={cell}>{d.dependsOn}</td>
                <td className={`${cell} whitespace-nowrap`}>{d.due}</td>
                <td className={cell}>{d.recipient}</td>
                <td className={cell}>
                  <StatePill className="bg-white">{d.state}</StatePill>
                </td>
              </tr>
            ))}
          </DataTable>
        </Reveal>
      </div>
    </section>
  );
}
