import { company } from "@/lib/content";
import { LogoMark } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0a0f2c] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <LogoMark className="h-6 w-auto" />
            {company.name}
          </div>
          <p className="mt-2 max-w-xs text-sm text-white/60">{company.tagline}</p>
          <p className="mt-4 text-xs text-white/45">
            A brand of {company.legalName}
          </p>
        </div>
        <div className="text-sm text-white/70">
          <a
            href={`mailto:${company.email}`}
            className="transition-colors hover:text-white"
          >
            {company.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © 2026 {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
