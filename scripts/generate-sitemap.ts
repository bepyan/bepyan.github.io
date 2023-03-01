import { writeFileSync } from 'fs';

import { siteConfig } from '../src/config';
import { getAllBlogPosts, getAllSerizes, getAllSnippetPosts } from '../src/libs/post';

const createSiteMap = () => {
  const siteUrl = siteConfig.url;
  const posts = [...getAllBlogPosts(), ...getAllSnippetPosts()];
  const serizes = getAllSerizes();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url><loc>${siteUrl}</loc><changefreq>daily</changefreq></url>
${siteConfig.menus
  .map(({ path }) => `<url><loc>${siteUrl}${path}</loc><changefreq>daily</changefreq></url>`)
  .join('\n')}
${serizes
  .map((series) => `<url><loc>${siteUrl}${series.slug}</loc><changefreq>daily</changefreq></url>`)
  .join('\n')}
${posts
  .map((post) => `<url><loc>${siteUrl}${post.slug}</loc><changefreq>daily</changefreq></url>`)
  .join('\n')}
</urlset>`;

  writeFileSync('public/sitemap.xml', sitemap, 'utf-8');
};

const createRobotsTxt = () => {
  const siteUrl = siteConfig.url;

  const text = `
User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

  writeFileSync('public/robots.txt', text.trim(), 'utf-8');
};

(() => {
  createSiteMap();
  createRobotsTxt();
})();
