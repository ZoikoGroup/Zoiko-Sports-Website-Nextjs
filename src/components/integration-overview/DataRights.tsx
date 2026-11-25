import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { dark, sectionPad, wrap } from "./shared";

const rights = ["Permitted purpose", "Role scope", "Retention", "Export & deletion"];

const authorities = [
  { role: "Organizer", action: "Request schedule change", tag: "Request" },
  { role: "Venue", action: "Review operational impact", tag: "Review" },
  { role: "Authorized lead", action: "Record a decision", tag: "Approve" },
  { role: "Club", action: "View relevant event update", tag: "View" },
];

export function DataRights() {
  return (
    <section className={`${dark} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-12 lg:grid-cols-[1fr_592px] lg:gap-24`}>
        <Reveal>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-brand-yellow">Data rights</p>
          <h2 className="mt-4 max-w-[420px] text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.12] tracking-tight">
            Permission comes before data movement.
          </h2>
          <p className="mt-6 max-w-[460px] text-[16px] leading-[1.75] text-white/70">
            Each organization&apos;s access and data-use rights require a documented, authorized basis. An
            organizer&apos;s interest in information does not itself authorize access to another organization&apos;s
            records.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {rights.map((r) => (
              <li
                key={r}
                className="rounded-full border border-white/25 px-4 py-2 text-[12.5px] font-medium text-white/85 transition-colors duration-300 hover:border-brand-yellow hover:text-brand-yellow"
              >
                {r}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-yellow">One event</p>
            <p className="font-heading text-[15px] font-semibold">Separate authority</p>
          </div>

          <RevealGroup>
            {authorities.map((a) => (
              <RevealItem
                key={a.role}
                className="group flex items-center gap-4 border-b border-white/10 py-4 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full border-[1.5px] border-brand-yellow transition-colors duration-300 group-hover:bg-brand-yellow" />
                <div className="min-w-0 flex-1">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/45">{a.role}</p>
                  <p className="mt-1 font-heading text-[14.5px] font-semibold">{a.action}</p>
                </div>
                <span className="rounded-full bg-brand-yellow/15 px-3 py-1.5 text-[10.5px] font-bold text-brand-yellow">
                  {a.tag}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="mt-5 text-[12px] leading-relaxed text-white/45">
            Participation in the same event does not create unrestricted access.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
