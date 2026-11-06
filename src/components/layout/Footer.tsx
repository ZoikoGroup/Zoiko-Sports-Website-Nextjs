import Link from "next/link";
import { footerColumns, legalLinks, offices, socialLinks } from "@/data/navigation";
import { Badge } from "@/components/ui/Badge";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Logo } from "@/components/ui/Logo";
import { SmartLink } from "@/components/ui/SmartLink";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/ui/icons";

const socialIcons = { linkedin: LinkedInIcon, facebook: FacebookIcon, x: XIcon };

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Brand row */}
        <div className="flex flex-col gap-8 py-14 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo className="h-9 w-auto" />
            <p className="mt-5 text-[13.5px] leading-relaxed text-white/65">
              Sports operations software from Zoiko Tech Inc., a Zoiko Group company.
            </p>
          </div>
          <ul className="flex gap-3">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow hover:text-ink"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-5 gap-y-12 border-t border-white/10 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-yellow">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label} className="flex flex-wrap items-center gap-2">
                    <SmartLink
                      href={link.href}
                      className="text-[13px] leading-snug text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </SmartLink>
                    {link.badge && <Badge kind={link.badge} tone="dark" />}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Offices */}
        <div className="grid gap-8 border-t border-white/10 py-8 sm:grid-cols-2 lg:flex lg:gap-20">
          {offices.map((office) => (
            <address key={office.label} className="not-italic">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                {office.label}
              </p>
              <p className="text-[13.5px] leading-relaxed text-white/75">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-[12.5px] text-white/50 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© <CurrentYear /> Zoiko Tech Inc. All rights reserved.</p>
            <p>Zoiko Sports is a product of Zoiko Tech Inc., a Zoiko Group company.</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-white/70">
            {legalLinks.slice(0, 3).map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/legal/cookie-policy#preferences"
                className="underline underline-offset-4 transition-colors hover:text-white"
              >
                Cookie Preferences
              </Link>
            </li>
            <li>
              <Link href={legalLinks[3].href} className="transition-colors hover:text-white">
                {legalLinks[3].label}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
