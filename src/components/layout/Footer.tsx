import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { footerColumns, legalLinks, offices, socialLinks } from "@/data/navigation";
import { Badge } from "@/components/ui/Badge";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SmartLink } from "@/components/ui/SmartLink";
// Imported (not from /public) so it is bundled with the build and always served
import logoDark from "@/assets/zoiko-sports-logo-dark.png";

/** Two rows of five columns, split by a rule — as in the design. */
const linkRows = [footerColumns.slice(0, 5), footerColumns.slice(5)];

export function Footer() {
  return (
    <footer className="bg-[#1e0d33] text-white">
      {/* Same container as the header */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <nav aria-label="Footer">
          {linkRows.map((row, r) => (
            <RevealGroup
              key={r}
              className={`grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 ${
                r > 0 ? "border-t border-white/10 py-12" : "pt-14 pb-10 lg:pt-16"
              }`}
            >
              {row.map((col) => (
                <RevealItem key={col.heading}>
                  <p className="mb-5 font-heading text-[12.5px] font-bold uppercase tracking-[0.1em] text-brand-yellow">
                    {col.heading}
                  </p>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.label} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <SmartLink
                          href={link.href}
                          className="group relative inline-block text-[14px] leading-snug text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-white"
                        >
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                        </SmartLink>
                        {link.badge && <Badge kind={link.badge} tone="dark" />}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          ))}
        </nav>

        {/* Brand, socials and offices */}
        <RevealGroup className="grid gap-8 border-t border-white/10 py-8 sm:grid-cols-2 xl:grid-cols-[auto_auto_1fr_1fr] xl:items-center xl:gap-0">
          <RevealItem className="xl:pr-8">
            <Link
              href="/"
              aria-label="Zoiko Sports — home"
              className="inline-flex h-[95px] w-[260px] items-center justify-center rounded-xl bg-[#f6f3ee] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Image src={logoDark} alt="Zoiko Sports" className="h-[56px] w-auto" />
            </Link>
          </RevealItem>

          <RevealItem className="xl:self-stretch xl:border-l xl:border-white/15 xl:px-8">
            <p className="font-heading text-[14px] font-semibold leading-relaxed">
              Connected sports operations.
              <br />
              Designed for the global game.
            </p>
            <ul className="mt-4 flex gap-2.5">
              {socialLinks.map(({ label, href, short }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/50 font-heading text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:bg-brand-yellow hover:text-ink"
                  >
                    <span aria-hidden="true">{short}</span>
                  </a>
                </li>
              ))}
            </ul>
          </RevealItem>

          {offices.map((office) => (
            <RevealItem key={office.label} className="xl:self-stretch xl:border-l xl:border-white/15 xl:px-8">
              <address className="group not-italic">
                <p className="flex items-center gap-2.5 font-heading text-[12.5px] font-bold uppercase tracking-[0.1em]">
                  <MapPin className="h-[18px] w-[18px] shrink-0 fill-brand-yellow text-[#1e0d33] transition-transform duration-300 group-hover:-translate-y-1" />
                  {office.label}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/80">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </address>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 xl:flex-row xl:items-center xl:justify-between">
          <p className="text-[12.5px] text-white/55">
            © <CurrentYear /> Zoiko Tech Inc. All rights reserved. Zoiko Sports is a platform of Zoiko Tech Inc., a
            Zoiko Group company.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/85 xl:shrink-0">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`transition-colors duration-200 hover:text-brand-yellow ${
                    l.label === "Cookie Preferences" ? "underline underline-offset-4" : ""
                  }`}
                >
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
