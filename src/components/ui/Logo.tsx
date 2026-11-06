import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "h-9 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="Zoiko Sports — home" className="inline-flex shrink-0">
      <Image
        src="/brand/zoiko-sports-logo.png"
        alt="Zoiko Sports"
        width={425}
        height={144}
        priority={priority}
        className={className}
      />
    </Link>
  );
}
