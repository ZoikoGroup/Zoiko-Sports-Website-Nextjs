import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Footnote, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

// The heading mentions the buyer too, but the design only lists the Zoiko Sports roles.
const zoikoRoles = [
  { title: "Zoiko pilot owner", text: "Coordinates agreed tasks and support commitments." },
  { title: "Zoiko product owner", text: "Validates implemented capability and permitted claims." },
  { title: "Security / privacy reviewer", text: "Checks identity, access and data-rights controls." },
  { title: "Implementation engineer", text: "Configures only the approved, written scope." },
];

export function ProvideRoles() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[660px]">What the buyer and Zoiko Sports each provide.</SectionTitle>
        </Reveal>

        <Reveal delay={0.1} className="mt-9 grid overflow-hidden rounded-2xl border border-[#DEDAD0] md:grid-cols-2">
          <div className="group/photo relative min-h-[260px] overflow-hidden">
            <Image
              src="/images/pilot-program/roles-baseball-pitcher.webp"
              alt="Baseball pitcher in a green cap kicking his leg high during the wind-up"
              fill
              sizes="(min-width: 768px) 640px, 95vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover/photo:scale-105"
            />
          </div>

          <div className="bg-[#24163A] px-7 py-8 text-white">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-yellow">Zoiko Sports</p>
            <RevealGroup className="mt-4">
              {zoikoRoles.map((r) => (
                <RevealItem key={r.title} className="group border-t border-white/15 py-3.5">
                  <h3 className="text-[15px] font-semibold transition-colors duration-300 group-hover:text-brand-yellow">
                    {r.title}
                  </h3>
                  <p className="mt-0.5 text-[13.5px] text-white/65">{r.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <Footnote>No duty of care, safety authority or competition approval transfers to Zoiko Sports at any stage.</Footnote>
      </div>
    </section>
  );
}
