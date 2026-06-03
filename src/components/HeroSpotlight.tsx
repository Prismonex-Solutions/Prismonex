"use client";

import { useEffect, useRef } from "react";

/**
 * A soft blue glow that follows the cursor across the dark hero (adapted from
 * the test.html "mouse-spotlight" technique). Updates CSS vars directly — no
 * React state, no re-renders. On touch devices it simply stays centered.
 */
export default function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--hx", `${e.clientX - r.left}px`);
      el.style.setProperty("--hy", `${e.clientY - r.top}px`);
    };
    parent.addEventListener("pointermove", onMove);
    return () => parent.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="hero-spotlight pointer-events-none absolute inset-0 transition-opacity"
    />
  );
}
