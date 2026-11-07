import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { responsibilities } from "@/data/competition-operations";
import { Lead, Note, SectionTitle, sectionPad, wrap } from "./shared";

export function AlignSchedule() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[720px]">Align the schedule without taking over the venue.</SectionTitle>
          <Lead className="mt-4 max-w-[750px] text-[15.5px]">
            The organizer and venue coordinate relevant information. The authorized venue team retains control of local
            operational and safety decisions.
          </Lead>
        </Reveal>

        {/* Yellow rule for the organizer's side, dark rule for the venue's side */}
        <RevealGroup className="mt-9 grid md:grid-cols-2">
          {responsibilities.map((r) => (
            <RevealItem
              key={r.label}
              className={`border-t-2 px-1 pt-8 pb-2 sm:px-6 ${r.tone === "yellow" ? "border-brand-yellow" : "border-[#24163A]"}`}
            >
              <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40">{r.label}</p>
              <ul className="mt-4 space-y-2.5">
                {r.items.map((item) => (
                  <li key={item} className="group flex items-center gap-3 text-[14.5px] text-ink-muted">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150 ${
                        r.tone === "yellow" ? "bg-brand-yellow" : "bg-[#24163A]"
                      }`}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note className="mt-10">
            A shared fixture view never implies the organizer holds venue-side authority, or that the venue has approved
            a change merely by requesting it.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
