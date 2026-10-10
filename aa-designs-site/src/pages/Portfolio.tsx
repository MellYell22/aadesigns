import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { usePageMeta } from '../components/usePageMeta';
import { PROJECTS } from '../data';

export default function Portfolio() {
  usePageMeta('Portfolio', 'Selected projects by AA Designs, including the Bible AI Companion app.', '/portfolio');
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
            <Reveal key={i} className="panel card project">
              <div className={`project-art${p.placeholder ? ' placeholder' : ''}`}>
                {p.placeholder ? (
                  <img src="/images/logo-emblem.webp" alt="" loading="lazy" width={249} height={195} />
                ) : (
                  <span className="art-title">{p.title}</span>
                )}
              </div>
              <div className="project-body">
                <span className={`tag${p.placeholder ? ' muted' : ''}`}>{p.status}</span>
                <p className="project-cat">{p.category}</p>
                <h2 style={{ fontSize: 'clamp(20px,2vw,24px)' }}>{p.title}</h2>
                <p style={{ color: 'var(--muted)', margin: 0 }}>{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="container center" style={{ marginTop: 50 }}>
          <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
        </div>
      </section>
    </>
  );
}
