import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  breadcrumbs?: Array<{name: string, url: string}>;
}

const BASE_URL = 'https://dbestelectricalservice.com/';

export default function SEO({ title, description, canonicalPath, ogType = 'website', breadcrumbs }: SEOProps) {
  const location = useLocation();
  const canonical = canonicalPath ? `${BASE_URL}${canonicalPath}` : `${BASE_URL}${location.pathname}`;

  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = description;
      document.head.appendChild(m);
    }

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:site_name', 'D Best Electrical Service');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    if (breadcrumbs && breadcrumbs.length > 0) {
      let script = document.querySelector('script#breadcrumb-schema') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = 'breadcrumb-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((bc, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": bc.name,
          "item": bc.url
        }))
      };
      script.text = JSON.stringify(schema);
    } else {
      const script = document.querySelector('script#breadcrumb-schema');
      if (script) script.remove();
    }
  }, [title, description, canonical, ogType, breadcrumbs]);

  return null;
}
