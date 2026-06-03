import Link from "next/link";
import { company } from "@/lib/content";

/**
 * Prismonex mark: a prism refracting a single beam into a blue spectrum -
 * a literal nod to "prism" + the brand's Trust Blue palette.
 * The incoming beam uses `currentColor`, so it stays visible on light and
 * dark backgrounds; the prism + refracted beams stay branded.
 */
export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Incoming beam */}
      <line
        x1="0"
        y1="17.9"
        x2="10.95"
        y2="17.9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Prism */}
      <polygon
        points="15,8 6,30 24,30"
        stroke="var(--brand)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="color-mix(in srgb, var(--brand) 10%, transparent)"
      />
      {/* Refracted spectrum (blue family) */}
      <line x1="19.05" y1="17.9" x2="40" y2="11" stroke="var(--brand-2)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="19.05" y1="17.9" x2="40" y2="18.5" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="19.05" y1="17.9" x2="40" y2="26" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2 font-semibold tracking-tight ${className}`}
    >
      <LogoMark className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
      <span className="text-lg">{company.name}</span>
    </Link>
  );
}
