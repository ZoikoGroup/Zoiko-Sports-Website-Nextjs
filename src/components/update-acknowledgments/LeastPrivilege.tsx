import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Lead, Photo, SectionTitle, altBg, ruled, sectionPad, wrap } from "./shared";

const principles = [
  {
    title: "Scoped by organization and role",
    text: "Delivery and acknowledgment detail are visible only within the authorized event, organization and role.",
  },
  {
    title: "No implicit approval",
    text: "An acknowledgment never itself approves a decision or authorizes venue operations.",
  },
  {
    title: "Authenticated acknowledgment only",
    text: "Requires a current, authenticated identity — never inferred from an opened link.",
  },
  {
    title: "Claim and evidence caveats",
    text: "Delivery and acknowledgment claims are shown only with the evidence that actually supports them.",
  },
];

export function LeastPrivilege() {
  return (
    <section className={`${altBg} ${ruled} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_379px] lg:gap-[100px]`}>
        <div>
          <Reveal>
            <SectionTitle>Least privilege, and no implicit approval.</SectionTitle>
            <Lead className="mt-4 max-w-[780px] text-[15.5px]">
              An acknowledgment workflow spanning organizations must be explicit about who can see what, and what a
              recorded response does — and does not — mean.
            </Lead>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-x-9 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
            {principles.map((p) => (
              <RevealItem key={p.title} className="group">
                <h3 className="text-[15px] font-semibold text-ink transition-colors duration-300 group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="relative aspect-[379/335] w-full">
          <Photo
            src="/images/update-acknowledgments/privilege-basketball-drive.webp"
            alt="Basketball player in a gold jersey driving to the basket"
            sizes="(min-width: 1024px) 379px, 95vw"
            className="h-full w-full rounded-lg!"
          />
        </Reveal>
      </div>
    </section>
  );
}
