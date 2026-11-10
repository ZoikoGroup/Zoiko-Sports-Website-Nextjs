import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DataTable, Lead, Note, SectionTitle, altBg, card, cell, rowClass, rowHead, sectionPad, wrap } from "./shared";

const orgs = [
  {
    title: "Riverside League",
    text: "Sees the approved schedule decision, the review agenda, and every follow-up across the event — not other leagues’ events.",
  },
  {
    title: "Northfield Arena",
    text: "Owns exception and readiness records for its venue and any follow-up assigned to its operations team.",
  },
  {
    title: "Participating clubs",
    text: "See the update that applied to them and their own acknowledgment status — not another club’s record.",
  },
];

const permissions = [
  { role: "Record Contributor", view: "Own scope", propose: "Yes", reassign: "No", conclude: "No" },
  { role: "Responsible Owner", view: "Own scope", propose: "Yes", reassign: "Yes", conclude: "No" },
  { role: "Reviewer", view: "Review scope", propose: "Yes", reassign: "Yes", conclude: "Request only" },
  { role: "Facilitator", view: "Review scope", propose: "Yes", reassign: "No", conclude: "No" },
];

export function ScopedReview() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Shared event, scoped review.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A league, a venue and participating clubs share one event — not one undivided record set. Each
            organization&apos;s review access is evaluated on its own scope.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-2.5 md:grid-cols-3">
          {orgs.map((o) => (
            <RevealItem key={o.title} className={`${card} bg-white p-6`}>
              <h3 className="text-[15.5px] font-semibold text-ink">{o.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-muted">{o.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-8">
          <DataTable columns={["Role", "View", "Propose", "Reassign", "Conclude"]}>
            {permissions.map((p) => (
              <tr key={p.role} className={rowClass}>
                <th scope="row" className={rowHead}>
                  {p.role}
                </th>
                <td className={cell}>{p.view}</td>
                <td className={cell}>{p.propose}</td>
                <td className={cell}>{p.reassign}</td>
                <td className={cell}>{p.conclude}</td>
              </tr>
            ))}
          </DataTable>
        </Reveal>

        <Reveal>
          <Note className="mt-8">
            Denied example: a club requesting another club&apos;s follow-up detail receives &quot;Related record
            unavailable&quot; — never a reason that reveals what exists.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
