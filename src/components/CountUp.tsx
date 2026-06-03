"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric value up from 0 the first time it scrolls into view.
 * Non-numeric values (e.g. "End-to-end") render as-is. Starts at the final
 * value so SSR/no-JS/reduced-motion all show the real number with no flash;
 * the animation only kicks in when motion is allowed.
 */
export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const num = Number(value);
  const isNum = value.trim() !== "" && !Number.isNaN(num);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNum) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.disconnect();
          const duration = 1100;
          let startTs = 0;
          const tick = (ts: number) => {
            if (!startTs) startTs = ts;
            const p = Math.min(1, (ts - startTs) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            setDisplay(String(Math.round(eased * num)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isNum, num]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
