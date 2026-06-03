// Original "AI core" hero visual - rotating rings, a scanning beam, and a
// pulsing glowing core, with the four process stages labeled at the tips.
// Pure SVG + CSS (see globals.css): fully owned, blue-themed, reduced-motion safe.

const NODES = [
  { label: "Discover", x: 200, y: 60, lx: 200, ly: 36, anchor: "middle" },
  { label: "Design", x: 340, y: 200, lx: 356, ly: 204, anchor: "start" },
  { label: "Build", x: 200, y: 340, lx: 200, ly: 366, anchor: "middle" },
  { label: "Operate", x: 60, y: 200, lx: 44, ly: 204, anchor: "end" },
] as const;

export default function HeroAI() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
      {/* Ambient halo */}
      <div
        aria-hidden
        className="absolute h-3/5 w-3/5 rounded-full bg-brand/20 blur-3xl"
      />

      <svg
        viewBox="-20 0 440 400"
        className="relative h-auto w-full"
        fill="none"
        role="img"
        aria-label="AI core with the Prismonex process at its tips: Discover, Design, Build, Operate"
      >
        <defs>
          <radialGradient id="aiCoreFill" cx="42%" cy="38%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="45%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="aiSweep" x1="200" y1="200" x2="200" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Rings */}
        <circle
          cx="200"
          cy="200"
          r="165"
          className="ai-spin-cw"
          stroke="rgba(56,130,246,0.45)"
          strokeWidth="1.5"
          strokeDasharray="2 12"
        />
        <circle cx="200" cy="200" r="130" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        <circle
          cx="200"
          cy="200"
          r="92"
          className="ai-spin-ccw"
          stroke="rgba(56,189,248,0.45)"
          strokeWidth="1.5"
          strokeDasharray="6 9"
        />

        {/* Scanning beam */}
        <line
          x1="200"
          y1="200"
          x2="200"
          y2="40"
          className="ai-sweep"
          stroke="url(#aiSweep)"
          strokeWidth="36"
          strokeLinecap="round"
        />

        {/* Process nodes at the tips (static + labeled) */}
        {NODES.map((n, i) => (
          <g key={n.label}>
            <line
              x1="200"
              y1="200"
              x2={n.x}
              y2={n.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="11"
              className="flow-pulse"
              style={{ animationDelay: `${i * 0.6}s` }}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <circle cx={n.x} cy={n.y} r="10" fill="#0b1426" stroke="rgba(56,130,246,0.7)" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="4" fill="url(#aiCoreFill)" />
            <text x={n.lx} y={n.ly} textAnchor={n.anchor} className="flow-label">
              {n.label}
            </text>
          </g>
        ))}

        {/* Core */}
        <circle cx="200" cy="200" r="48" fill="url(#aiCoreFill)" />
        <circle cx="200" cy="200" r="30" className="ai-core-pulse" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="16" fill="url(#aiCoreFill)" />
        <circle cx="200" cy="200" r="5" fill="#eaf2ff" />
      </svg>
    </div>
  );
}
