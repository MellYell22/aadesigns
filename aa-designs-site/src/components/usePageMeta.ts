import { useEffect } from 'react';
import { SITE_URL } from '../data';

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Per-page title, description and canonical URL for search engines and link previews. */
export function usePageMeta(title: string, description: string, path: string) {
  useEffect(() => {
    const fullTitle = path === '/' ? title : `${title} | AA Designs`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', fullTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', SITE_URL + path);
    setMeta('link[rel="canonical"]', 'href', SITE_URL + path);
  }, [title, description, path]);
}
