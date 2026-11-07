import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { lifecycle } from "@/data/about";
import { Lead, Note, SectionTitle, sectionPad, wrap } from "./shared";

export function Lifecycle() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>From plan to review: one operational lifecycle</SectionTitle>
          <Lead className="mt-4 max-w-[660px] text-[15px]">
            The initial experience is organized around four stages that buyers and operational teams can understand
            without learning a new technology vocabulary.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-10 grid border-t-2 border-brand-yellow sm:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map((s, i) => (
            <RevealItem key={s.title} className="group relative px-1 pt-7 pb-4 sm:px-6">
              {/* Marker on the line that grows on hover */}
              <span className="absolute -top-[5px] left-1 h-2 w-2 rounded-full bg-brand-yellow transition-transform duration-300 group-hover:scale-150 sm:left-6" />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[18px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note className="mt-10">
            Zoiko Sports supports the flow of information, responsibility and approvals. Authorized people and
            organizations retain authority for operational, safety, competition and other real-world decisions — a
            software status never certifies a venue as safe or authorizes gates to open.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
