import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { altBg, Kicker, Lead, line, Photo, ruled, sectionPad, SectionTitle, wrap } from "./shared";

type Spotlight = {
  label: string;
  title: string;
  text: string;
  link: { label: string; href: string };
  image: { src: string; alt: string };
  /** Photo on the left instead of the right. */
  flip?: boolean;
  shaded?: boolean;
};

function AudienceSpotlight({ label, title, text, link, image, flip, shaded }: Spotlight) {
  return (
    <section className={`${shaded ? `${altBg} ${ruled}` : "bg-white"} ${sectionPad}`}>
      <div className={`${wrap} grid items-center gap-10 lg:grid-cols-2 lg:gap-12`}>
        <Reveal className={flip ? "lg:order-2" : "lg:pl-5"}>
          <Kicker>{label}</Kicker>
          <SectionTitle className="mt-4 max-w-[600px]">{title}</SectionTitle>
          <Lead className="mt-5 max-w-[660px] text-[15.5px]">{text}</Lead>
          <Link
            href={link.href}
            className="group mt-5 inline-flex items-center gap-1.5 font-heading text-[14px] font-semibold text-[#4b3a78] transition-colors duration-300 hover:text-brand-blue"
          >
            {link.label}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={0.15} className={flip ? "lg:order-1" : ""}>
          <Photo
            src={image.src}
            alt={image.alt}
            sizes="(min-width: 1024px) 548px, 95vw"
            className={`aspect-[548/250] w-full border ${line}`}
          />
        </Reveal>
      </div>
    </section>
  );
}

export function OrganizerSpotlight() {
  return (
    <AudienceSpotlight
      label="Leagues & Competition Organizers"
      title="For the organization shaping the competition."
      text="See how the competition schedule, venue dependencies and authorized changes can be coordinated around an event. Organizers keep schedule and competition decision authority — participating venues and clubs plan against the same agreed plan."
      link={{ label: "See the organizer workflow", href: "/who-we-serve/leagues-organizers" }}
      image={{
        src: "/images/who-we-serve/organizer-tennis-forehand.webp",
        alt: "Tennis player in white following through on a forehand in front of a crowd",
      }}
    />
  );
}

export function ClubSpotlight() {
  return (
    <AudienceSpotlight
      flip
      shaded
      label="Clubs & Teams"
      title="For the team preparing to participate."
      text="Connect club preparation and relevant updates with the event milestones and decisions your team is authorized to use. A club sees what is addressed to it — never another club's internal records or full organizer visibility."
      link={{ label: "See the club workflow", href: "/who-we-serve/clubs-teams" }}
      image={{
        src: "/images/who-we-serve/club-volleyball-dig.webp",
        alt: "Volleyball player in a blue kit stretching forward to dig the ball",
      }}
    />
  );
}

export function VenueSpotlight() {
  return (
    <AudienceSpotlight
      label="Venue Operators"
      title="For the organization delivering the venue experience."
      text="Keep venue-owned readiness work, responsibilities and operational exceptions connected to the event schedule — without transferring venue or safety authority to software. A completed check is a coordination indicator, never a safety certification."
      link={{ label: "See the venue workflow", href: "/who-we-serve/venue-operators" }}
      image={{
        src: "/images/who-we-serve/venue-table-tennis.webp",
        alt: "Table tennis player in blue hunched over a backhand as the ball flies past",
      }}
    />
  );
}
