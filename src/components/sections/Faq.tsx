import { faqs } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Faq() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <h2 className="mb-10 text-3xl font-bold tracking-tight">
            Questions, answered
          </h2>
        </Reveal>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              {/* Native <details> - accessible and needs no JS */}
              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {item.q}
                  <span className="text-muted transition-transform duration-200 group-open:rotate-45">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
