import fs from 'fs';
import path from 'path';

// This script generates sitemap.xml based on the data in src/data/siteData.ts
// We'll read the compiled siteData to get the exact slugs

// Assuming we run this script with ts-node or tsx from the project root
import { services, serviceAreas } from './src/data/siteData.js';

const DOMAIN = 'https://www.dbestelectricalservice.com';

const staticPages = [
  '',
  '/about',
  '/contact',
  '/faqs',
  '/electrical-services',
  '/areas-we-serve'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
staticPages.forEach(page => {
  sitemap += `  <url>
    <loc>${DOMAIN}${page}</loc>
    <lastmod>2026-10-08</lastmod>
  </url>\n`;
});

// Add service pages
services.forEach(service => {
  sitemap += `  <url>
    <loc>${DOMAIN}/${service.slug}</loc>
    <lastmod>2026-10-08</lastmod>
  </url>\n`;
});

// Add service area pages
serviceAreas.forEach(area => {
  sitemap += `  <url>
    <loc>${DOMAIN}/${area.slug}</loc>
    <lastmod>2026-10-08</lastmod>
  </url>\n`;
});

sitemap += `</urlset>`;

// Write sitemap.xml
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('Successfully generated public/sitemap.xml');

// Update robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);
console.log('Successfully generated public/robots.txt');
