import { Link } from 'react-router-dom';
import { IconRing } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../components/usePageMeta';
import { SERVICES } from '../data';

export default function Services() {
  usePageMeta(
    'Services',
    'Professional website design, iOS & Android app development, AI-powered applications, digital branding and custom technology solutions by AA Designs.',
    '/services',
  );
  return (
    <>
      <section className="page-head">
        <div className="container center">
          <p className="eyebrow">Services</p>
          <h1 className="gold-text">Designed to Impress. Built to Perform.</h1>
          <hr className="divider" />
          <p className="lead">From a stunning brand website to intelligent AI tools, every project is custom built around your goals.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container grid grid-3">
          {SERVICES.map((s) => (
            <Reveal key={s.id} className="panel card">
              <IconRing name={s.icon} />
              <h2 className="gold-text" style={{ fontSize: 'clamp(20px,2vw,24px)' }}>{s.title}</h2>
              <p>{s.summary}</p>
              <ul className="check-list">
                {s.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="card-meta">
                <div>
                  <span>Investment</span>
                  <strong>{s.investment}</strong>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span>Timeline</span>
                  <strong>{s.timeline}</strong>
                </div>
              </div>
              <Link to="/contact" className="btn btn-gold" style={{ marginTop: 22 }}>Get Started</Link>
            </Reveal>
          ))}
          <Reveal className="panel neon-panel card" >
            <p className="eyebrow">Not sure where to start?</p>
            <h2 className="gold-text" style={{ fontSize: 'clamp(20px,2vw,24px)' }}>Let's design it together</h2>
            <p>
              Every business is different. Tell me your vision and I'll recommend the right mix of design, development
              and AI — with a clear quote and timeline.
            </p>
            <p className="script" style={{ fontSize: 40, margin: '6px 0 18px' }}>Dream, Transform, Fly.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'auto' }}>Request a Custom Quote</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
