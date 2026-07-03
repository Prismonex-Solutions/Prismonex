import Image from "next/image";
import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0a0f2c] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Image
            src="/logo-light.png"
            alt={company.name}
            width={1684}
            height={539}
            className="h-10 w-auto"
          />
          <p className="mt-3 max-w-xs text-sm text-white/60">{company.tagline}</p>
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
      <div className="space-y-1 border-t border-white/10 py-4 text-center text-xs text-white/50">
        <p>© 2026 {company.legalName}. All rights reserved.</p>
        <p>Registered in {company.jurisdiction}.</p>
      </div>
    </footer>
  );
}
