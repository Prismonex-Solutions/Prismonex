import type { Metadata } from "next";
import Image from "next/image";
import { company, values, team } from "@/lib/content";
import Reveal from "@/components/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const metadata: Metadata = {
  title: "About",
  description: company.vision,
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        About <span className="text-brand">{company.name}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        We are a technology company with multiple revenue streams, combining
        software innovation, cloud infrastructure, IT services, and hardware
        distribution.
      </p>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border p-8 transition duration-200 hover:border-foreground hover:shadow-md">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
              Mission
            </h2>
            <p className="mt-3 text-lg leading-8">{company.mission}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-border p-8 transition duration-200 hover:border-foreground hover:shadow-md">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
              Vision
            </h2>
            <p className="mt-3 text-lg leading-8">{company.vision}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight">How we operate</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border p-6 transition duration-200 hover:-translate-y-1 hover:border-foreground hover:shadow-md">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {team.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight">Our team</h2>
          <p className="mt-3 max-w-2xl text-muted">
            A small, senior team building with a founder mindset.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-border p-6 text-center transition duration-200 hover:-translate-y-1 hover:border-foreground hover:shadow-md">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      width={88}
                      height={88}
                      className="h-22 w-22 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-xl font-semibold text-brand"
                      aria-hidden
                    >
                      {initials(m.name)}
                    </span>
                  )}
                  <h3 className="mt-4 font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
