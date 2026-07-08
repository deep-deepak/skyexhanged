import { blogPosts } from '../src/data/blogData.js';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://skyexchin.com';
const today = new Date().toISOString().split('T')[0] + 'T00:00:00+00:00';

const staticPages = [
  { loc: `${BASE_URL}/`,        lastmod: today, priority: '1.00' },
  { loc: `${BASE_URL}/blog/`,   lastmod: today, priority: '0.80' },
  { loc: `${BASE_URL}/contact/`,lastmod: today, priority: '0.80' },
];

const blogEntries = blogPosts.map(post => ({
  loc:      `${BASE_URL}/blog/${post.slug}/`,
  lastmod:  today,
  priority: '0.64',
}));

const allEntries = [...staticPages, ...blogEntries];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="https://www.xml-sitemaps.com/css/sitemap.css"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:fo="http://www.w3.org/1999/XSL/Format"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- Auto-generated — do not edit manually. Run: npm run build -->

${allEntries.map(e => `<url>
  <loc>${e.loc}</loc>
  <lastmod>${e.lastmod}</lastmod>
  <priority>${e.priority}</priority>
</url>`).join('\n')}

</urlset>
`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log(`✓ Sitemap generated with ${allEntries.length} URLs → public/sitemap.xml`);
