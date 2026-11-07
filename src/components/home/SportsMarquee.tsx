import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/** `labelled`: the image already has its caption baked in. */
const sports = [
  { src: "/images/home/sport-football.webp", label: "Football", labelled: false },
  { src: "/images/home/sport-basketball.webp", label: "Basketball", labelled: true },
  { src: "/images/home/sport-ice-arenas.webp", label: "Ice arenas", labelled: true },
  { src: "/images/home/sport-cycling.webp", label: "Cycling", labelled: true },
  { src: "/images/home/sport-racing.webp", label: "Racing", labelled: true },
  { src: "/images/home/sport-tennis.webp", label: "Tennis venues", labelled: true },
  { src: "/images/home/sport-stadiums.webp", label: "Stadiums", labelled: true },
];

function SportCard({ src, label, labelled, hidden }: (typeof sports)[number] & { hidden?: boolean }) {
  return (
    <li
      aria-hidden={hidden}
      className="group relative mr-4 w-[230px] shrink-0 overflow-hidden rounded-xl transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:w-[270px]"
    >
      <Image
        src={src}
        alt={hidden ? "" : label}
        width={300}
        height={190}
        sizes="270px"
        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.07]"
      />
      {!labelled && (
        <>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute bottom-3.5 left-4 font-heading text-[17px] font-semibold text-white">{label}</span>
        </>
      )}
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-inset ring-brand-yellow/0 transition-all duration-500 group-hover:ring-brand-yellow/80" />
    </li>
  );
}

export function SportsMarquee() {
  return (
    <section className="overflow-hidden bg-navy-950 py-14 text-white">
      <Reveal className="container-page">
        <p className="text-[16px] text-white/80">Built for the people who run every kind of event day.</p>
      </Reveal>

      <Reveal delay={0.1} className="marquee relative mt-7">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-950 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-950 to-transparent sm:w-28" />

        {/* Two identical lists: translating by -50% loops seamlessly */}
        <ul className="marquee-track flex w-max py-2">
          {sports.map((s) => (
            <SportCard key={s.label} {...s} />
          ))}
          {sports.map((s) => (
            <SportCard key={`${s.label}-dup`} {...s} hidden />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
