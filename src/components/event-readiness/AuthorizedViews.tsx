"use client";

import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, altBg, cream, ruled, sectionPad, wrap } from "./shared";

const views = [
  {
    role: "Organizer",
    sees: "Permitted milestones and the decision dependencies relevant to its own event.",
    withheld: "Venue-private evidence and internal venue task detail.",
  },
  {
    role: "Venue Operations",
    sees: "Its own owned check detail, due times and evidence status.",
    withheld: "Other organizations’ private records and unrelated organizer decisions.",
  },
  {
    role: "Club",
    sees: "Only the assigned participation and communication context for its organization.",
    withheld: "Wider event data outside its own assigned scope.",
  },
];

export function AuthorizedViews() {
  const [active, setActive] = useState(0);

  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">A shared event can contain different authorized views.</SectionTitle>
          <Lead className="mt-4 max-w-[760px] text-[15.5px]">
            Each organization sees and acts on only the records explicitly allowed by its event scope and role. Select a
            view to see what it would show.
          </Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Organization view">
          {views.map((v, i) => (
            <button
              key={v.role}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 font-heading text-[14px] font-semibold transition-all duration-300 ${
                active === i
                  ? "border-[#24163A] bg-[#24163A] text-white"
                  : "border-[#DEDAD0] bg-white text-ink hover:border-[#24163A]"
              }`}
            >
              {v.role}
            </button>
          ))}
        </Reveal>

        <RevealGroup className="mt-8 grid gap-0.5 md:grid-cols-3">
          {views.map((v, i) => (
            <RevealItem
              key={v.role}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                active === i ? `border-[#24163A] ${cream}` : "border-[#DEDAD0] bg-white"
              }`}
            >
              <h3 className="text-[15.5px] font-semibold text-ink">{v.role}</h3>
              <p className="mt-2 max-w-[360px] text-[14px] leading-[1.65] text-ink-muted">{v.sees}</p>
              <p className="mt-3 max-w-[360px] text-[13px] leading-[1.6] text-ink/40">Withheld: {v.withheld}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
