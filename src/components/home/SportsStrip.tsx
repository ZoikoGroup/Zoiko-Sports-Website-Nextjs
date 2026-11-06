import Link from "next/link";
import type { ComponentType, CSSProperties, SVGProps } from "react";
import { Plus } from "lucide-react";
import {
  AmericanFootballIcon,
  AthleticsIcon,
  BaseballIcon,
  BasketballIcon,
  CricketIcon,
  IceHockeyIcon,
  MotorsportIcon,
  SoccerIcon,
} from "@/components/ui/sportIcons";

type Sport = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  sub?: string;
  /** Balls spin on hover; everything else lifts. */
  spin?: boolean;
};

const sports: Sport[] = [
  { icon: AmericanFootballIcon, label: "American", sub: "Football", spin: true },
  { icon: BasketballIcon, label: "Basketball", spin: true },
  { icon: BaseballIcon, label: "Baseball", spin: true },
  { icon: IceHockeyIcon, label: "Ice Hockey" },
  { icon: SoccerIcon, label: "Football", sub: "(Soccer)", spin: true },
  { icon: CricketIcon, label: "Cricket" },
  { icon: MotorsportIcon, label: "Motorsport" },
  { icon: AthleticsIcon, label: "Athletics" },
];

/** Staggers the `.reveal` CSS animation, which starts once the preloader lifts. */
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export function SportsStrip() {
  return (
    <section aria-label="Sports we support" className="border-y border-white/5 bg-[#1b1233] text-white">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-0">
        <h2 className="reveal shrink-0 lg:pr-8" style={delay(700)}>
          <span className="block text-[12.5px] font-semibold uppercase tracking-[0.12em] text-white/90">
            A global platform for
          </span>
          <span className="block font-heading text-[19px] font-bold uppercase tracking-wide text-brand-yellow">
            All Sports
          </span>
        </h2>

        <ul className="grid grid-cols-4 gap-y-5 border-white/15 sm:grid-cols-8 lg:flex-1 lg:border-x lg:px-4">
          {sports.map(({ icon: Icon, label, sub, spin }, i) => (
            <li key={label + (sub ?? "")} className="reveal" style={delay(780 + i * 60)}>
              <div className="group flex cursor-default flex-col items-center text-center">
                <span className="relative grid h-11 w-11 place-items-center rounded-full transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-yellow/10 group-hover:text-brand-yellow">
                  <Icon
                    className={`h-7 w-7 transition-transform duration-500 ease-out ${
                      spin ? "group-hover:rotate-[360deg]" : "group-hover:scale-110"
                    }`}
                  />
                </span>
                <span className="mt-1.5 text-[12px] leading-tight text-white/85 transition-colors duration-300 group-hover:text-white">
                  {label}
                  {sub && (
                    <>
                      <br />
                      {sub}
                    </>
                  )}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="/sports"
          className="reveal group inline-flex shrink-0 items-center gap-1.5 self-start text-[14px] font-semibold text-brand-yellow transition-colors hover:text-white lg:self-center lg:pl-8"
          style={delay(1280)}
        >
          <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
          More Sports
        </Link>
      </div>
    </section>
  );
}
