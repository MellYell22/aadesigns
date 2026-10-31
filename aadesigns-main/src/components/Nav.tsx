import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="AA Designs home">
          <img src="/images/logo-emblem.webp" alt="" width={46} height={36} />
          <span className="brand-name">
            <span className="pink-text">AA</span> <span className="gold-text">DESIGNS</span>
          </span>
        </Link>

        <nav aria-label="Main">
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn btn-primary nav-cta desktop">
          Start Your Project
        </Link>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M10 17h10" />}
          </svg>
        </button>
      </div>

      <div className="mobile-menu" id="mobile-menu">
        <ul>
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
