import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../components/usePageMeta';
import { PROJECTS } from '../data';

export default function Portfolio() {
  usePageMeta('Portfolio', 'Selected projects by AA Designs, including Bible AI Companion and GiftMas Tracker.', '/portfolio');
  return (
    <>
      <section className="page-head">
        <div className="container center">
          <p className="eyebrow">Portfolio</p>
          <h1 className="gold-text">Selected Work</h1>
          <hr className="divider" />
          <p className="lead">A growing collection of apps, websites and AI experiences designed and built by AA Designs.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="container grid grid-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} className={`panel card project${p.placeholder ? ' project-wide' : ''}`}>
              <div className={`project-art${p.placeholder ? ' placeholder' : ''}`}>
                {p.placeholder ? (
                  <img src="/images/logo-emblem.webp" alt="" loading="lazy" width={246} height={195} />
                ) : (
                  <span className="art-title">{p.title}</span>
                )}
              </div>
              <div className="project-body">
                <span className={`tag${p.placeholder ? ' muted' : ''}`}>{p.status}</span>
                <p className="project-cat">{p.category}</p>
                <h2 style={{ fontSize: 'clamp(20px,2vw,24px)' }}>{p.title}</h2>
                <p style={{ color: 'var(--muted)', margin: 0 }}>{p.description}</p>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 22 }} aria-label={`Visit ${p.title} (opens in a new tab)`}>Visit Live App</a>
                )}
                {p.placeholder && (
                  <Link to="/contact" className="btn btn-primary" style={{ marginTop: 22 }}>Start Your Project</Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
