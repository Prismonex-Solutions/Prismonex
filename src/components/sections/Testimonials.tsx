import { testimonials } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  // Stays invisible until real client quotes are added to content.ts -
  // no placeholder/fake social proof.
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight">
            What clients say
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <figure className="h-full rounded-2xl border border-border bg-background p-6 transition duration-200 hover:-translate-y-1 hover:border-foreground hover:shadow-md">
                <blockquote className="text-sm leading-7">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-muted"> - {t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
