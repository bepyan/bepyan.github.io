import { DefaultSeoProps } from 'next-seo';

export const headerConfig = {};

export const siteConfig = {
  url: 'https://bepyan.github.io',
  title: 'bepyan blog',
  description: '개발하면서 탐구한 것을 소소하게 기록하는 공간입니다.',
  copyright: 'bepyan © All rights reserved.',
  since: 2022,
  googleAnalyticsId: '',
  author: {
    name: 'Edward Kim',
    photo: 'https://avatars.githubusercontent.com/u/65283190?v=4',
    bio: 'Junior Frontend Engineer',
    contacts: {
      email: 'bepyan@naver.com',
      github: 'bepyan',
      twitter: '__pyungan',
      velog: '@bepyan',
      linkedin: '',
      youtube: '',
      instagram: '',
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
