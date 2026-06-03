import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Products",
  description: "SaaS platforms and products built and operated by Prismonex.",
};

const statusStyles: Record<string, string> = {
  Available: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "In development": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Coming soon": "bg-sky-500/10 text-sky-600 dark:text-sky-400",
};

export default function Products() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Products
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        Beyond services, we build our own B2B and B2C SaaS platforms - designed,
        engineered, and operated end to end.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className="h-full rounded-2xl border border-border p-8 transition duration-200 hover:-translate-y-1 hover:border-foreground hover:shadow-md">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="mt-3 text-muted">{p.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 block rounded-2xl border border-dashed border-border p-8 text-center">
        <h2 className="text-xl font-semibold">Want early access?</h2>
        <p className="mt-2 text-muted">
          Join the early-access list and be first to try what we ship next.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-ink"
        >
          Join the list
        </Link>
      </Reveal>
    </div>
  );
}
