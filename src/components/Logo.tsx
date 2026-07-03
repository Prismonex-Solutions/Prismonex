import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/content";

/**
 * Prismonex mark — the official prism logo art (transparent PNG, so it reads on
 * any background). Source: design/logo.png, extracted to public/logo-mark.png.
 */
export function LogoMark({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={591}
      height={539}
      className={className}
      priority
    />
  );
}

/**
 * Full header lockup: the official mark + `Prismonex` wordmark art (no tagline),
 * exactly as designed. Source: design/logo.png -> public/logo.png. Because the
 * wordmark is dark-on-light, it lives on the light header only (the footer uses
 * `LogoMark` + text on its dark band instead).
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${company.name} home`} className={`group inline-flex ${className}`}>
      <Image
        src="/logo.png"
        alt={company.name}
        width={1684}
        height={539}
        priority
        className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
