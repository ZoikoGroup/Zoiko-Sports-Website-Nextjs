import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, line, Photo, sectionPad, SectionTitle, wrap } from "./shared";

const steps = [
  { title: "Requested", text: "A steward-count change is requested for the east entrance." },
  { title: "Approved", text: "Approved by the Competition Director, recorded with actor and time." },
  { title: "Sent", text: "Update sent to affected organizations — sent is not received." },
  { title: "Acknowledged", text: "2 of 2 recipients acknowledged; outstanding acknowledgments stay visible." },
];

export function ApprovalChain() {
  return (
    <section className={`bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Who requested, approved and acknowledged?</SectionTitle>
          <Lead className="mt-4 text-[15.5px]">
            A sent update is not the same as a human receipt. The fictional example below separates the two.
          </Lead>
        </Reveal>

        <div className="mt-9 grid gap-6 lg:grid-cols-[504px_1fr] lg:gap-7 lg:px-5">
          <Reveal delay={0.1}>
            <Photo
              src="/images/rugby/approval-rugby-pass.webp"
              alt="Rugby player in red releasing a pass while being tackled"
              sizes="(min-width: 1024px) 504px, 95vw"
              className={`aspect-[505/438] w-full border ${line}`}
            />
          </Reveal>

          <RevealGroup className={`h-full rounded-2xl border ${line} bg-white`}>
            <ol>
              {steps.map((s, i) => (
                <RevealItem key={s.title}>
                  <li className={`group flex gap-4 px-6 py-5 ${i > 0 ? `border-t ${line}` : ""}`}>
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#24163A] text-[11px] font-bold text-brand-yellow transition-transform duration-300 group-hover:scale-110">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                        {s.title}
                      </h3>
                      <p className="mt-0.5 text-[13.5px] leading-[1.6] text-ink-muted">{s.text}</p>
                    </div>
                  </li>
                </RevealItem>
              ))}
            </ol>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
