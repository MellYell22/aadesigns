import type { IconName } from '../data';

const PATHS: Record<IconName, React.ReactNode> = {
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4M9 11l2-2 2 2 3-3" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.5A2.5 2.5 0 0 0 7 7a2.6 2.6 0 0 0-2 4.3A2.8 2.8 0 0 0 7 16a2.5 2.5 0 0 0 5 1V6a1.8 1.8 0 0 0-2.5-1.5Z" />
      <path d="M14.5 4.5A2.5 2.5 0 0 1 17 7a2.6 2.6 0 0 1 2 4.3A2.8 2.8 0 0 1 17 16a2.5 2.5 0 0 1-5 1" />
      <path d="M12 9h2.5M12 13h3M9 9.5h1M8.5 13H10" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.5l2.2 10.5h10.6L20.5 7H7" />
      <circle cx="9.5" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </>
  ),
  brush: (
    <>
      <path d="M20 4 10.5 13.5" />
      <path d="M10.5 13.5c-2.2-.6-4.6 1-5 3.5L5 20l3-.4c2.5-.4 4.1-2.8 3.5-5" />
      <path d="M14 8l2 2" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.8v2.4M12 18.8v2.4M4.2 7.5l2 1.2M17.8 15.3l2 1.2M4.2 16.5l2-1.2M17.8 8.7l2-1.2" />
      <circle cx="12" cy="12" r="7" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7M3.5 18l6-5.5M20.5 18l-6-5.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  sparkle: <path d="M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7Z" />,
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}

export function IconRing({ name }: { name: IconName }) {
  return (
    <span className="icon-ring">
      <Icon name={name} />
    </span>
  );
}
