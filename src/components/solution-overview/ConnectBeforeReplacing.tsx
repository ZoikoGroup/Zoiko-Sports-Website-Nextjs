import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, SectionTitle, TextLink, cream, pad2, sectionPad, wrap } from "./shared";

const steps = [
  { title: "Assessment", text: "Identify which existing systems already supply schedule or venue context." },
  { title: "Data scope", text: "Agree what information may be shared, and what stays explicitly out of scope." },
  { title: "Validation", text: "Test the agreed exchange for a defined pilot before relying on it operationally." },
];

export function ConnectBeforeReplacing() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Connect before replacing.</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            A pilot can identify which existing systems supply schedule or venue context, what information may be
            shared, and which exchanges are in scope. The supported approach must be agreed and validated.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-1 md:grid-cols-3">
          {steps.map((s, i) => (
            <RevealItem
              key={s.title}
              className={`group border border-[#DEDAD0] ${cream} px-5 py-6 transition-colors duration-300 hover:border-brand-yellow/70`}
            >
              <p className="text-[12px] font-semibold tracking-[0.06em] text-ink/40">{pad2(i + 1)}</p>
              <h3 className="mt-2.5 text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <TextLink href="/integrations">Discuss Integrations</TextLink>
      </div>
    </section>
  );
}
