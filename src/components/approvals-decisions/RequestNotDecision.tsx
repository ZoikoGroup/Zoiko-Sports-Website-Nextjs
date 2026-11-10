import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, sectionPad, wrap } from "./shared";

const requestSteps = [
  { title: "Submit request", text: "Venue Operations proposes an action and attaches the relevant evidence." },
  { title: "Authorize change", text: "Competition Director reviews the request and records a decision." },
  { title: "Share outcome", text: "Authorized event recipients are notified and may be asked to acknowledge." },
];

export function RequestNotDecision() {
  return (
    <section className={`${altBg} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>A request is not a decision.</SectionTitle>
          <Lead className="mt-4 max-w-[770px]">
            An operational request proposes an action. A decision records an authorized person&apos;s response and the
            relevant context. Any subsequent update to teams has its own delivery and acknowledgment status.
          </Lead>
        </Reveal>

        <RevealGroup className="mt-8 grid overflow-hidden rounded-2xl border border-[#DEDAD0] bg-white md:grid-cols-3">
          {requestSteps.map((s, i) => (
            <RevealItem
              key={s.title}
              className={`group relative px-7 py-7 transition-colors duration-300 hover:bg-[#fbfaf6] ${
                i > 0 ? "border-t border-[#ebe9df] md:border-l md:border-t-0" : ""
              }`}
            >
              {/* Yellow bar that slides in on hover */}
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-yellow transition-transform duration-500 group-hover:scale-x-100" />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/40">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[18px] font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <Photo
            src="/images/approvals-decisions/request-taekwondo.webp"
            alt="Two taekwondo athletes exchanging kicks in front of a packed crowd"
            sizes="(min-width: 1320px) 1280px, 95vw"
            className="mt-2.5 aspect-[1280/371] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
