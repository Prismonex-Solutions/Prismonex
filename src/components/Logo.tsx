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

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2 font-semibold tracking-tight ${className}`}
    >
      <LogoMark className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" />
      <span className="text-lg">{company.name}</span>
    </Link>
  );
}
