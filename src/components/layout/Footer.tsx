import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { footerColumns, legalLinks, offices, socialLinks } from "@/data/navigation";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SmartLink } from "@/components/ui/SmartLink";
import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/ui/icons";
// Imported (not from /public) so it is bundled with the build and always served
import logoDark from "@/assets/zoiko-sports-logo-dark.png";

const socialIcons = { linkedin: LinkedInIcon, youtube: YouTubeIcon, x: XIcon, instagram: InstagramIcon };

/** Two rows of five columns, split by a rule — as in the design. */
const linkRows = [footerColumns.slice(0, 5), footerColumns.slice(5)];

export function Footer() {
  return (
    <footer className="bg-[#240934] text-white">

      {/* Same container as the header */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <nav aria-label="Footer">
          {linkRows.map((row, r) => (
            <RevealGroup
              key={r}
              className={`grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-5 ${
                r > 0 ? "border-t border-white/15" : "pt-14"
              }`}
            >
              {row.map((col) => (
                <RevealItem key={col.heading}>
                  <p className="mb-4 font-heading text-[14.5px] font-bold uppercase tracking-wide text-brand-yellow">
                    {col.heading}
                  </p>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <SmartLink
                          href={link.href}
                          className="group relative inline-block text-[13.5px] leading-snug text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-white"
                        >
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          ))}
        </nav>

        {/* Brand, socials and offices */}
        <RevealGroup className="grid gap-8 border-t border-white/15 py-8 sm:grid-cols-2 xl:grid-cols-[auto_1fr_1fr_1fr] xl:items-stretch xl:gap-0">
          <RevealItem className="xl:pr-8">
            <Link
              href="/"
              aria-label="Zoiko Sports — home"
              className="inline-flex rounded-xl bg-white px-7 py-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Image src={logoDark} alt="Zoiko Sports" className="h-[52px] w-auto" />
            </Link>
          </RevealItem>

          <RevealItem className="xl:border-l xl:border-white/20 xl:px-8">
            <p className="font-heading text-[15px] font-semibold leading-relaxed">
              Connected sports operations.
              <br />
              Designed for the global game.
            </p>
            <ul className="mt-3 flex gap-2.5">
              {socialLinks.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/60 text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </RevealItem>

          {offices.map((office) => (
            <RevealItem key={office.label} className="xl:border-l xl:border-white/20 xl:px-8">
              <address className="group flex gap-3 not-italic">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 fill-brand-yellow text-[#240934] transition-transform duration-300 group-hover:-translate-y-1" />
                <div>
                  <p className="font-heading text-[13px] font-bold uppercase tracking-wide">{office.label}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/75">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </address>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-[12px] text-white/70 xl:flex-row xl:items-center xl:justify-between">
          <p>
            © <CurrentYear /> Zoiko Tech Inc. All rights reserved. Zoiko Sports is a platform of Zoiko Tech Inc., a
            Zoiko Group company.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 xl:shrink-0 xl:gap-x-0">
            {/* Divider bars only on one line (wide desktop); on wrap they would dangle */}
            {legalLinks.map((l, i) => (
              <li key={l.label} className={i > 0 ? "xl:ml-3 xl:border-l xl:border-white/40 xl:pl-3" : ""}>
                <Link href={l.href} className="transition-colors duration-200 hover:text-brand-yellow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
