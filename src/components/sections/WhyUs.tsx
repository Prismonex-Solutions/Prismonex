import { whyUs } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function WhyUs() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Why Prismonex
            </h2>
            <p className="mt-3 text-muted">
              We&apos;re built to be the technology partner that actually owns
              the outcome - across the whole stack.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 80}>
              <div className="flex h-full gap-4 rounded-2xl border border-border p-6 transition duration-200 hover:border-foreground hover:shadow-md">
                <span
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-spectrum"
                  aria-hidden
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
