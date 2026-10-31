/** Softly drifting, wing-flapping butterflies in the poster's pink, purple and gold. */
const FLIGHTS = [
  { left: '8%', top: '78%', size: 30, dur: 19, delay: 0, dx: 140, dy: -180 },
  { left: '46%', top: '88%', size: 24, dur: 23, delay: 4, dx: -120, dy: -220 },
  { left: '70%', top: '70%', size: 36, dur: 21, delay: 9, dx: 90, dy: -200 },
  { left: '26%', top: '40%', size: 20, dur: 26, delay: 13, dx: 160, dy: -120 },
  { left: '88%', top: '55%', size: 26, dur: 24, delay: 6, dx: -150, dy: -170 },
];

function ButterflySvg() {
  return (
    <svg viewBox="-60 -50 120 100" aria-hidden="true">
      <defs>
        <linearGradient id="bf-wing" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ff1f9e" />
          <stop offset="0.6" stopColor="#c21cc0" />
          <stop offset="1" stopColor="#6a1fb8" />
        </linearGradient>
        <linearGradient id="bf-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1c2" />
          <stop offset="0.5" stopColor="#e8b65a" />
          <stop offset="1" stopColor="#a8742a" />
        </linearGradient>
      </defs>
      <g className="bfly-wings">
        <path d="M2-3C10-30 40-46 52-35 59-26 48-7 29-1 18 2 7 1 2-3Z" fill="url(#bf-wing)" stroke="url(#bf-gold)" strokeWidth="2" />
        <path d="M2 0C15 1 35 7 36 20 36 31 20 33 12 24 6 17 3 8 2 0Z" fill="url(#bf-wing)" stroke="url(#bf-gold)" strokeWidth="2" />
        <path d="M-2-3C-10-30-40-46-52-35-59-26-48-7-29-1-18 2-7 1-2-3Z" fill="url(#bf-wing)" stroke="url(#bf-gold)" strokeWidth="2" />
        <path d="M-2 0C-15 1-35 7-36 20-36 31-20 33-12 24-6 17-3 8-2 0Z" fill="url(#bf-wing)" stroke="url(#bf-gold)" strokeWidth="2" />
      </g>
      <ellipse cx="0" cy="4" rx="2.6" ry="17" fill="url(#bf-gold)" />
    </svg>
  );
}

export function Butterflies() {
  return (
    <div className="butterflies" aria-hidden="true">
      {FLIGHTS.map((f, i) => (
        <div
          key={i}
          className="bfly"
          style={
            {
              left: f.left,
              top: f.top,
              '--size': `${f.size}px`,
              '--dur': `${f.dur}s`,
              '--delay': `${f.delay}s`,
              '--dx': `${f.dx}px`,
              '--dy': `${f.dy}px`,
            } as React.CSSProperties
          }
        >
          <ButterflySvg />
        </div>
      ))}
    </div>
  );
}
