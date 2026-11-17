import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, line, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const gaps = [
  {
    title: "Schedule drift",
    text: "A revised fixture start can reach the venue late while entrance staffing and access plans still reflect the old time.",
  },
  {
    title: "Open work without a clear owner",
    text: "A readiness check can stay unresolved even after several teams have received an update about it.",
  },
  {
    title: "A repair is not the same as resolved",
    text: "A restored turnstile can still leave an entry backlog that needs its own owner and resolution.",
  },
];

export function OwnsReadiness() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle className="max-w-[700px]">Your venue owns readiness. The organizer owns the schedule.</SectionTitle>
        </Reveal>

        <RevealGroup className="mt-9 grid gap-2.5 md:grid-cols-3">
          {gaps.map((g, i) => (
            <RevealItem
              key={g.title}
              className={`group h-full rounded-2xl border ${line} bg-white px-7 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
            >
              <p className="text-[12px] font-semibold text-ink/40">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {g.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{g.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
