import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../components/usePageMeta';

const VALUES = [
  { title: 'Luxury in every detail', text: 'Beautiful, intentional design that makes your brand feel premium from the very first click.' },
  { title: 'Clarity, always', text: 'Technical choices explained in plain English, so you can make confident decisions about your business.' },
  { title: 'Reliability', text: 'Clear communication, honest timelines and deadlines that are met. No ghosting, no excuses.' },
  { title: 'Built to perform', text: 'Fast, secure, mobile-ready builds that look stunning and work flawlessly for your customers.' },
];

export default function About() {
  usePageMeta(
    'About',
    'Meet Alissa, founder of AA Designs — a creative digital design and technology studio specializing in websites, mobile apps and AI-powered solutions.',
    '/about',
  );
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">About AA Designs</p>
          <h1>
            <span className="gold-text">Where creativity</span> <span className="pink-text">meets technology</span>
          </h1>
          <hr className="divider" />
          <p className="lead">
            AA Designs is a creative digital design and technology studio specializing in websites, mobile applications
            and AI-powered solutions for ambitious businesses.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container about-grid">
          <Reveal>
            <h2 className="gold-text">Hi, I'm Alissa.</h2>
            <p className="eyebrow" style={{ letterSpacing: '0.3em' }}>Founder &amp; Lead Designer</p>
            <p className="lead">
              I founded AA Designs to give entrepreneurs and growing businesses a digital presence that feels as
              exceptional as the work they do.
            </p>
            <p style={{ color: 'var(--muted)' }}>
              I design and build custom websites, iOS and Android apps, AI assistants and automations — combining
              elegant, feminine luxury design with robust, modern engineering. There are no bloated teams or corporate
              overhead: you work directly with me, from the first idea to launch day and beyond.
            </p>
            <p style={{ color: 'var(--muted)' }}>
              My creative vision is simple: every brand deserves to be seen at its most beautiful. I take your dream,
              transform it into something real, and help your business fly.
            </p>
            <p className="quote">Dream, Transform, Fly.</p>
            <div className="btn-row" style={{ marginTop: 20 }}>
              <Link to="/contact" className="btn btn-primary">Work With Me</Link>
              <Link to="/portfolio" className="btn btn-gold">View Portfolio</Link>
            </div>
          </Reveal>
          <div className="values">
            {VALUES.map((v) => (
              <Reveal key={v.title} className="panel value">
                <h3 className="gold-text">{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
