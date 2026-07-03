import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/content";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI and software, cloud infrastructure, IT services, hardware sales, and SaaS products.",
};

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Services
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        Four divisions covering the full technology stack - from intelligent
        software to the hardware it runs on.
      </p>

      <div className="mt-16 space-y-6">
        {services.map((s, i) => {
          const img = s.image;
          return (
            <Reveal key={s.slug} delay={i * 80}>
              <div
                id={s.slug}
                className={`grid items-center gap-8 rounded-2xl border border-border p-8 transition duration-200 hover:border-foreground hover:shadow-md ${
                  img ? "md:grid-cols-2" : ""
                }`}
              >
                <div className="grid gap-6 sm:grid-cols-[auto_1fr]">
                  <div className="text-2xl font-semibold text-brand sm:w-16">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-muted">{s.blurb}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {img && (
                  <Image
                    src={img}
                    alt={`${s.title} illustration`}
                    width={1600}
                    height={1000}
                    className={`w-full rounded-xl border border-border ${
                      i % 2 ? "md:order-first" : ""
                    }`}
                  />
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16">
        <Link
          href="/contact"
          className="rounded-full bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-ink"
        >
          Discuss your project
        </Link>
      </div>
    </div>
  );
}
