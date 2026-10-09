import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function customSitemapPlugin() {
  return {
    name: 'custom-sitemap-generator',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const siteUrl = 'https://iflyingbird.sbs';
        const pages = [
          '',
          'plans/',
          'guide/',
          'devices/',
          'network/',
          'stories/',
          'faq/',
          'stories/monthly-reset/',
          'stories/one-time-traffic/',
          'stories/session-continuity/',
          'stories/node-checks/',
          'stories/mobile-settings/',
          'stories/credential-safety/',
          'stories/connection-recovery/'
        ];

        const lastmod = new Date().toISOString().split('T')[0];

        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}/${page}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : (page.startsWith('stories/') && page !== 'stories/' ? '0.8' : '0.9')}</priority>
  </url>`).join('\n')}
</urlset>`;

        const outDir = dir ? fileURLToPath(dir) : path.resolve('./dist');
        const sitemapPath = path.join(outDir, 'sitemap.xml');
        
        fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
        console.log(`[custom-sitemap] Successfully generated sitemap.xml with ${pages.length} URLs at ${sitemapPath}`);
      }
    }
  };
}

export default defineConfig({
  site: 'https://iflyingbird.sbs',
  integrations: [customSitemapPlugin()],
  outDir: './dist',
  build: {
    format: 'directory'
  }
});
