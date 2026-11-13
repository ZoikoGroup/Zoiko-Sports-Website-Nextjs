import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, cream, sectionPad, wrap } from "./shared";

const cases = [
  {
    title: "Denied access",
    text: "A cross-organization request returns a generic denial, never a reason that reveals who else was notified.",
  },
  {
    title: "No connection",
    text: "An acknowledgment cannot be recorded without a confirmed connection; no silent local-only save.",
  },
  { title: "Stale update", text: "Acting on an outdated view is blocked until the current version is reviewed." },
  { title: "Partial sync", text: "Partial evidence is shown as partial — never rounded up to complete." },
];

export function Unavailable() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[640px]">What if the system or authorization is unavailable?</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            Reliable uncertainty, not a guaranteed delivery claim. No offline mode is promised here.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <RevealItem
              key={c.title}
              className={`group h-full rounded-2xl border border-[#DEDAD0] ${cream} px-5 py-5 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <h3 className="text-[14.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {c.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-ink-muted">{c.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
