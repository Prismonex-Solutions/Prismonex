import { stats } from "@/lib/content";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function Stats() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-6 py-14 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70}>
            <div className="px-2 text-center sm:text-left">
              <CountUp
                value={s.value}
                className="block text-3xl font-semibold tracking-tight text-brand"
              />
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
