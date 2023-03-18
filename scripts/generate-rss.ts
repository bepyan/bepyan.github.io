import { Feed } from 'feed';
import { writeFileSync } from 'fs';

import PostJson from '../.contentlayer/generated/Post/_index.json';
import { siteConfig } from '../src/config';
import { contentToDescription } from '../src/libs/post';

const master = {
  name: siteConfig.author.name,
  email: siteConfig.author.contacts.email,
  link: siteConfig.url,
};

const feed = new Feed({
  title: siteConfig.title,
  description: siteConfig.description,
  id: siteConfig.url,
  link: siteConfig.url,
  language: 'ko',
  image: `${siteConfig.url}/images/base.jpg`,
  favicon: `${siteConfig.url}/favicon.ico`,
  copyright: `All rights reserved since ${siteConfig.since}, ${master.name}`,
  generator: 'generate-rss',
  feedLinks: {
    json: `${siteConfig.url}/json`,
    atom: `${siteConfig.url}/atom`,
  },
  author: master,
});

PostJson.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: post.slug,
    link: `${siteConfig.url}${post.slug}`,
    description: post.description,
    content: contentToDescription(post.body.raw),
    author: [master],
    contributor: [master],
    date: new Date(post.date),
    image: post.image,
    category: post.tags.map((tag) => ({ name: tag })),
  });
});

feed.addCategory('Technologies');

// Output: RSS 2.0
writeFileSync('out/rss.xml', feed.rss2(), 'utf-8');
// Output: Atom 1.0
writeFileSync('out/rss-atom.xml', feed.atom1(), 'utf-8');
// Output: JSON Feed 1.0
writeFileSync('out/feed.json', feed.json1(), 'utf-8');
