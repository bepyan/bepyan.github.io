import { DefaultSeoProps } from 'next-seo';

export const headerConfig = {};

export const siteConfig = {
  url: 'https://bepyan.github.io',
  title: 'bepyan blog',
  description: '인생은 고통이다, 그래서 달다.',
  copyright: 'bepyan © All rights reserved.',
  since: 2022,
  googleAnalyticsId: '',
  author: {
    name: 'edward kim',
    photo: '/profile.png',
    bio: 'frontend engineer',
    contacts: {
      email: 'mailto:bepyan@naver.com',
      twitter: 'https://twitter.com/__pyungan',
      velog: 'https://velog.io/@bepyan',
      linkedin: '',
      youtube: '',
      github: 'https://github.com/bepyan',
    },
  },
  menus: [
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Snippets',
      path: '/snippets',
    },
    {
      label: 'Archives',
      path: '/archives',
    },
  ],
};

export const seoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: siteConfig.url,
    siteName: siteConfig.title,
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteConfig.author.name,
    },
  ],
};
