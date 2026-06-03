import { processSteps } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Process() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">How we work</h2>
            <p className="mt-3 text-muted">
              A simple, accountable path from your problem to a running system.
            </p>
          </div>
        </Reveal>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 80} as="li">
              <div className="h-full rounded-2xl border border-border bg-background p-6 transition duration-200 hover:-translate-y-1 hover:border-foreground hover:shadow-md">
                <div className="text-sm font-semibold text-brand">{step.step}</div>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
