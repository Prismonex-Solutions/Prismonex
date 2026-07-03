import Link from "next/link";
import Image from "next/image";
import { company, services } from "@/lib/content";
import Reveal from "@/components/Reveal";
import HeroBackground from "@/components/HeroBackground";
import HeroAI from "@/components/HeroAI";
import HeroSpotlight from "@/components/HeroSpotlight";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      {/* Hero (dark spotlight) */}
      <section className="hero-dark relative overflow-hidden text-white">
        <HeroBackground />
        <HeroSpotlight />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 sm:py-36 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/50">
                Technology company
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Intelligent infrastructure,{" "}
                <span className="text-spectrum">built to scale</span>.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                {company.mission}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-ink"
                >
                  Start a project
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-white/25 px-6 py-3 font-medium text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  Explore services
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Animated AI core visual */}
          <Reveal delay={200}>
            <HeroAI />
          </Reveal>
        </div>
      </section>

      {/* Honest positioning strip */}
      <Stats />

      {/* Services overview */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">What we do</h2>
              <p className="mt-3 text-muted">
                Four divisions, one company - combining software innovation, cloud
                infrastructure, IT services, and hardware distribution.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href="/services"
                  className="group block h-full rounded-2xl border border-border p-6 transition duration-200 hover:-translate-y-1 hover:border-foreground hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.blurb}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-brand">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand feature band */}
      <section className="border-t border-border bg-[#070d1c] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Transforming complexity into{" "}
                <span className="text-spectrum">clarity</span>
              </h2>
              <p className="mt-4 max-w-md text-lg leading-8 text-white/70">
                Like a prism resolving light into a clean spectrum, we turn
                tangled systems into intelligent, connected infrastructure —
                strategy to support, under one roof.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/home/clarity.png"
              alt="A prism refracting a beam of light into a spectrum"
              width={1600}
              height={1000}
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Trust-building */}
      <WhyUs />
      <Process />
      <Clients />
      <Testimonials />
      <Faq />

      {/* CTA */}
      <section className="border-t border-border">
        <Reveal>
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Have a problem worth solving?
              </h2>
              <p className="mt-2 text-muted">
                Tell us what you&apos;re building. We&apos;ll tell you how we can help.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-ink"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
