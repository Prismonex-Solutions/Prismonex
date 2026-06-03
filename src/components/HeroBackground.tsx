/**
 * Decorative hero backdrop: faint grid + a slowly drifting brand glow.
 * Pure CSS (see globals.css), no JS. Painted first inside a `relative`
 * section so the hero content layers cleanly on top.
 */
export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-glow" />
      <div className="hero-glow-2" />
      <div className="hero-glow-3" />
      <div className="hero-grid" />
    </div>
  );
}
