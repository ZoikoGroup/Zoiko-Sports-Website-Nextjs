import { Reveal } from "@/components/ui/Reveal";
import { Lead, line, Photo, sectionPad, soft, wrap } from "./shared";

export function StartsWithPermission() {
  return (
    <section className={`${soft} border-b ${line} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 md:grid-cols-[245px_1fr] lg:gap-14`}>
        <Reveal>
          <Photo
            src="/images/data-imports/permission-group-steps.webp"
            alt="Five friends in workout clothes chatting on sunny concrete steps"
            sizes="245px"
            className="mx-auto aspect-[244/222] w-full max-w-[245px] rounded-xl"
          />
        </Reveal>

        <Reveal delay={0.1} className="max-w-[810px]">
          <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold leading-[1.15] tracking-tight text-ink">
            Importing starts with permission, not a file.
          </h2>
          <Lead className="mt-5">
            Competition and venue teams often begin with different schedules and readiness records. Before any
            technical method is considered, the first task is to agree what information is appropriate to exchange, who
            owns it, who may use it, and how mistakes would be resolved.
          </Lead>
        </Reveal>
      </div>
    </section>
  );
}
