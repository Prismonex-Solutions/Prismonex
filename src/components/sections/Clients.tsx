import Link from "next/link";
import Image from "next/image";
import { clients } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Clients() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Clients</h2>
            <p className="mt-3 text-muted">
              {clients.length > 0
                ? "Organizations we're proud to build for."
                : "We're onboarding our first clients now. Want to be one of them?"}
            </p>
          </div>
        </Reveal>

        {clients.length > 0 ? (
          <div className="flex flex-wrap gap-6">
            {clients.map((c, i) => {
              const inner = c.logo ? (
                <Image
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={220}
                  height={65}
                  className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                <span className="text-lg font-semibold text-muted transition group-hover:text-foreground">
                  {c.name}
                </span>
              );
              return (
                <Reveal key={c.name} delay={(i % 4) * 60}>
                  <div className="group flex h-28 w-64 items-center justify-center rounded-2xl border border-border px-8 transition duration-200 hover:border-foreground hover:shadow-md">
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={c.name}
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        ) : (
          // Honest empty state — no fabricated logos.
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-dashed border-border p-8 sm:flex-row sm:items-center">
              <p className="max-w-md text-muted">
                Early clients get our full attention and our most flexible terms.
                If you have a problem worth solving, let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="shrink-0 rounded-full bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-ink"
              >
                Become a client
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
