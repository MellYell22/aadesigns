import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../data';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="brand" aria-label="AA Designs home">
            <img src="/images/logo-emblem.webp" alt="" width={46} height={36} loading="lazy" />
            <span className="brand-name">
              <span className="pink-text">AA</span> <span className="gold-text">DESIGNS</span>
            </span>
          </Link>
          <p className="script">Dream, Transform, Fly.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href="https://aa-designs.com">aa-designs.com</a></li>
            <li>Web, Mobile &amp; AI — Custom Builds for Your Business.</li>
          </ul>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} AA Designs · All rights reserved</p>
    </footer>
  );
}
