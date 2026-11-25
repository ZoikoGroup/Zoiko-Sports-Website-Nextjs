import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { dark, sectionPad, wrap } from "./shared";

const scopes = ["Organization", "Event", "Role", "Permitted purpose"];

const owners = [
  { org: "League", record: "Competition schedule", tag: "Contributes" },
  { org: "Venue", record: "Local readiness checks", tag: "Controls" },
  { org: "Club", record: "Relevant team handoff", tag: "Views" },
];

export function RecordOwnership() {
  return (
    <section className={`${dark} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_590px] lg:gap-24`}>
        <Reveal>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-brand-yellow">Data rights &amp; ownership</p>
          <h2 className="mt-4 max-w-[440px] text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.12] tracking-tight">
            One event does not mean one set of permissions.
          </h2>
          <p className="mt-6 max-w-[450px] text-[16px] leading-[1.75] text-white/70">
            A participating organization must have appropriate authority for the information it provides. Roles and
            event scope govern access; import validation does not establish legal permission or operational approval.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {scopes.map((s) => (
              <li
                key={s}
                className="rounded-full border border-white/25 px-4 py-2 text-[12.5px] font-medium text-white/85 transition-colors duration-300 hover:border-brand-yellow hover:text-brand-yellow"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/45">
                Fictional permission model
              </p>
              <p className="mt-1.5 font-heading text-[16px] font-semibold">Separate record owners</p>
            </div>
            <span className="rounded-full bg-brand-yellow/15 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-brand-yellow">
              Example
            </span>
          </div>

          <RevealGroup>
            {owners.map((o) => (
              <RevealItem
                key={o.org}
                className="group flex items-center gap-4 border-b border-white/10 py-4 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-brand-yellow transition-colors duration-300 group-hover:bg-brand-yellow" />
                <div className="min-w-0 flex-1">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/45">{o.org}</p>
                  <p className="mt-1 font-heading text-[14.5px] font-semibold">{o.record}</p>
                </div>
                <span className="rounded-full bg-brand-yellow/15 px-3 py-1.5 text-[10.5px] font-bold text-brand-yellow">
                  {o.tag}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="mt-5 text-[12px] leading-relaxed text-white/45">
            Field-level access follows the agreed purpose and accountable human authority.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
