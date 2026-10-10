import { Link } from 'react-router-dom';
import { Butterflies } from '../components/Butterflies';
import { IconRing } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../components/usePageMeta';
import { POSTER_SERVICES, PROJECTS } from '../data';

export default function Home() {
  usePageMeta(
    'AA Designs | Luxury Websites, Mobile Apps & AI Solutions',
    'AA Designs creates custom websites, iOS & Android apps, and AI-powered solutions for businesses ready to grow. Dream, Transform, Fly.',
    '/',
  );
  const featured = PROJECTS.filter((p) => !p.placeholder);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <img
          className="hero-figure"
          src="/images/alissa-figure.webp"
          alt=""
          aria-hidden="true"
          width={450}
          height={1415}
          fetchPriority="high"
        />
        <Butterflies />

        <div className="container">
          <div className="hero-content">
            <img className="hero-emblem" src="/images/logo-emblem.webp" alt="" width={249} height={195} />
            <h1 id="hero-title" className="hero-title">AA Designs — Web Designer</h1>
            <img className="hero-wordmark" src="/images/logo-wordmark.webp" alt="AA Designs" width={464} height={113} />
            <p className="hero-role">Web Designer</p>
            <p className="script hero-slogan">Dream, Transform, Fly.</p>
            <hr className="divider" />
            <p className="lead">
              Luxury websites, mobile apps and AI-powered solutions — custom built to help your business launch,
              grow and soar.
            </p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
              <Link to="/services" className="btn btn-gold">Explore Services</Link>
            </div>
          </div>
        </div>
        <a href="#offerings" className="scroll-cue">Discover</a>
      </section>

      <section className="section" id="offerings" aria-labelledby="offer-title">
        <div className="container">
          <Reveal className="center">
            <p className="eyebrow">What I Create</p>
            <h2 id="offer-title" className="gold-text">Web, Mobile &amp; AI</h2>
            <hr className="divider" />
            <p className="lead">Everything your business needs to look stunning online and run smarter behind the scenes.</p>
          </Reveal>
          <ul className="offer-list" style={{ marginTop: 40 }}>
            {POSTER_SERVICES.map((s) => (
              <Reveal as="li" className="offer" key={s.title}>
                <IconRing name={s.icon} />
                <div>
                  <h3 className="gold-text">{s.title.toUpperCase()}</h3>
                  <p>
                    {s.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 44 }}>
            <Link to="/services" className="btn btn-gold">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <Reveal className="center">
            <p className="eyebrow">Featured Work</p>
            <h2 id="work-title" className="gold-text">Portfolio</h2>
            <hr className="divider" />
          </Reveal>
          <div className="grid grid-2" style={{ marginTop: 36 }}>
            {featured.map((p) => (
              <Reveal key={p.title} className="panel card project">
                <div className="project-art">
                  <span className="art-title">{p.title}</span>
                </div>
                <div className="project-body">
                  <p className="project-cat">{p.category}</p>
                  <h3>{p.title}</h3>
                  <p style={{ color: 'var(--muted)', margin: 0 }}>{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 40 }}>
            <Link to="/portfolio" className="btn btn-gold">See the Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="panel neon-panel cta-band">
            <h2 id="cta-title" className="gold-text">AA-DESIGNS.COM</h2>
            <p className="lead" style={{ margin: '0 auto' }}>Web, Mobile &amp; AI — Custom Builds for Your Business.</p>
            <p className="script" style={{ fontSize: 'clamp(34px,4vw,48px)', margin: '18px 0 0' }}>Let's create your next idea</p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">Contact Me</Link>
              <a href="mailto:contact@aa-designs.com" className="btn btn-gold">contact@aa-designs.com</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
