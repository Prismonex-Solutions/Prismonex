import Link from "next/link";
import { company } from "@/lib/content";

/**
 * Prismonex mark: a "P" prism filled with the brand spectrum
 * (Cyan -> Royal Blue -> Electric Purple -> Magenta), with the connected-node
 * triangle ("connected intelligence"). Recreated as clean SVG from the master
 * logo so it stays crisp at any size and on light or dark backgrounds.
 * `id` scopes the gradient so multiple marks can share a page safely.
 */
export function LogoMark({
  className = "h-7 w-7",
  id = "px-mark",
}: {
  className?: string;
  id?: string;
}) {
  const grad = `${id}-grad`;
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00cfff" />
          <stop offset="35%" stopColor="#1565ff" />
          <stop offset="70%" stopColor="#6c2bff" />
          <stop offset="100%" stopColor="#ff1faf" />
        </linearGradient>
      </defs>
      {/* "P" letterform (stem + bowl); counter cut with even-odd fill. */}
      <path
        d="M9,7 H18 A8 8 0 0 1 18,23 H16 V33 H9 Z M16,10 A4 4 0 0 1 16,18 Z"
        fill={`url(#${grad})`}
        fillRule="evenodd"
      />
      {/* Connected-node triangle. */}
      <g stroke="#ffffff" strokeOpacity="0.9" strokeWidth="1.1" strokeLinecap="round">
        <line x1="13" y1="13" x2="13" y2="27" />
        <line x1="13" y1="13" x2="22" y2="15" />
        <line x1="13" y1="27" x2="22" y2="15" />
      </g>
      <g fill="#ffffff">
        <circle cx="13" cy="13" r="1.7" />
        <circle cx="13" cy="27" r="1.7" />
        <circle cx="22" cy="15" r="1.7" />
      </g>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2 font-semibold tracking-tight ${className}`}
    >
      <LogoMark id="px-nav" className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
      <span className="text-lg">{company.name}</span>
    </Link>
  );
}
