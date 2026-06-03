"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";
import { Logo } from "@/components/Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = nav.filter((item) => item.href !== "/");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 text-sm sm:flex">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-full bg-brand px-4 py-2 font-medium text-white transition-colors hover:bg-brand-ink"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-foreground sm:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-border sm:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md py-2.5 text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-brand px-4 py-2.5 text-center font-medium text-white transition-colors hover:bg-brand-ink"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
