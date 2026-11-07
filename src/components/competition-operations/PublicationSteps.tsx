import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { publicationSteps } from "@/data/competition-operations";
import { Lead, Note, SectionTitle, sectionPad, wrap } from "./shared";

export function PublicationSteps() {
  return (
    <section className={`border-y border-[#ebe9df] bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Separate publication from acknowledgment.</SectionTitle>
          <Lead className="mt-4 max-w-[750px] text-[15.5px]">
            A published schedule revision, a queued notice, a delivered message and a human acknowledgment are tracked
            as distinct events.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-9 grid border-t-2 border-brand-yellow bg-[#f6f4ee] sm:grid-cols-2 lg:grid-cols-4">
          {publicationSteps.map((title, i) => (
            <RevealItem key={title} className="group relative px-5 py-7">
              {/* Marker on the line that grows on hover */}
              <span className="absolute -top-[5px] left-5 h-2 w-2 rounded-full bg-brand-yellow transition-transform duration-300 group-hover:scale-150" />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[15.5px] font-semibold text-ink">{title}</h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <Note className="mt-8">
            Example: 12:16 PDT — updated start shared; officials and clubs acknowledged, stewarding lead pending. 12:18
            PDT — stewarding lead acknowledged.
          </Note>
        </Reveal>
      </div>
    </section>
  );
}
