import { Link } from 'react-router-dom';
import { usePageMeta } from '../components/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found', 'This page has flown away.', '/404');
  return (
    <section className="page-head center" style={{ minHeight: '70vh' }}>
      <div className="container">
        <img src="/images/butterfly.webp" alt="" width={120} height={88} style={{ margin: '0 auto 10px' }} />
        <h1 className="gold-text">This page has flown away</h1>
        <p className="lead">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 20 }}>Back Home</Link>
      </div>
    </section>
  );
}
