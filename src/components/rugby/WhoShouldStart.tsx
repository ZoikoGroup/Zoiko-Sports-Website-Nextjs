import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { altBg, cream, Footnote, Kicker, Lead, line, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

const audiences = [
  {
    title: "Leagues & competition organizers",
    text: "Scheduling and pitch approvals span multiple venues and clubs with no single source of truth.",
    example: "A multi-day league weekend across several pitches.",
    href: "/who-we-serve/leagues-organizers",
  },
  {
    title: "Clubs & teams",
    text: "Confirming handoffs and readiness with host venues and match officials is manual and easy to miss.",
    example: "A single away fixture or representative match.",
    href: "/who-we-serve/clubs-teams",
  },
];

export function WhoShouldStart() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={wrap}>
        <Reveal>
          <SectionTitle>Who should start this conversation?</SectionTitle>
          <Lead className="mt-4 max-w-[740px] text-[15.5px]">
            The initial focus is the organizations that actually coordinate a fixture — each retains the decisions their
            role requires.
          </Lead>
        </Reveal>

        <div className="mt-8 grid gap-0.5 lg:grid-cols-[2fr_1fr]">
          <RevealGroup className="grid gap-0.5 md:grid-cols-2">
            {audiences.map((a) => (
              <RevealItem
                key={a.title}
                className={`group flex h-full flex-col rounded-2xl border ${line} ${cream} px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/70 hover:shadow-[0_18px_40px_-24px_rgba(36,22,58,0.35)]`}
              >
                <h3 className="text-[16px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-ink-muted">{a.text}</p>
                <div className="mt-auto pt-5">
                  <div className={`border-t ${line} pt-3`}>
                    <Kicker className="text-[10.5px]!">First-event example</Kicker>
                    <p className="mt-1 text-[13.5px] font-medium text-ink">{a.example}</p>
                  </div>
                </div>
                <Link
                  href={a.href}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-[13.5px] font-semibold text-ink transition-colors duration-300 hover:text-brand-blue"
                >
                  See the role page
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="min-h-[243px]">
            <Photo
              src="/images/rugby/audience-rugby-hand-off.webp"
              alt="Rugby player in blue carrying the ball into a tackle from a player in green"
              sizes="(min-width: 1024px) 427px, 95vw"
              className={`h-full min-h-[243px] w-full border ${line}`}
            />
          </Reveal>
        </div>

        <Footnote>
          Officials and other event staff may take part only within an individually approved pilot scope — there is no
          public officiating role path yet.
        </Footnote>
      </div>
    </section>
  );
}
