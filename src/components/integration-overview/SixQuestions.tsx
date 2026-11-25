import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Kicker, Lead, line, sectionPad, SectionTitle, soft, wrap } from "./shared";

const questions = [
  { title: "Direction", text: "Which system is the source, and where should information move?" },
  { title: "Cadence", text: "When does information change, and how current does it need to be?" },
  { title: "Mapping", text: "Which fields mean the same thing across the participating systems?" },
  { title: "Accuracy", text: "Who reviews mismatches, missing values, and corrections?" },
  { title: "Failure", text: "What happens if an agreed exchange is late or unavailable?" },
  { title: "Authority", text: "Who may request, approve, view, and change each record?" },
];

export function SixQuestions() {
  return (
    <section id="systems-assessment" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={wrap}>
        <Reveal className="mx-auto max-w-[780px] text-center">
          <Kicker>Systems assessment</Kicker>
          <SectionTitle className="mt-4">Six questions shape every exchange.</SectionTitle>
          <Lead className="mt-5">
            Detailed discovery is staff-led. A public inquiry should never include system credentials, tokens, or
            sensitive production files.
          </Lead>
        </Reveal>

        <RevealGroup
          className={`mx-auto mt-12 grid max-w-[1120px] overflow-hidden rounded-2xl border ${line} sm:grid-cols-2 lg:grid-cols-3`}
        >
          {questions.map((q, i) => (
            <RevealItem
              key={q.title}
              className={`group ${soft} -mb-px -mr-px min-h-[220px] border-b border-r ${line} px-7 pb-10 pt-8 transition-colors duration-300 hover:bg-white`}
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] text-ink/40">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-7 font-heading text-[19px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                {q.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-ink-muted">{q.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
