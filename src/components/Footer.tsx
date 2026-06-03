import { company } from "@/lib/content";
import { LogoMark } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <LogoMark className="h-6 w-6" />
            {company.name}
          </div>
          <p className="mt-2 max-w-xs text-sm text-muted">{company.tagline}</p>
        </div>
        <div className="text-sm text-muted">
          <a href={`mailto:${company.email}`} className="hover:text-foreground">
            {company.email}
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © 2026 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
