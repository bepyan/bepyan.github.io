import { DefaultSeoProps } from 'next-seo';

export const config = {
  url: 'htpp://bepyan.github.io/',
  title: 'bepyan',
  description: 'bepyan blog',
  copyright: 'bepyan © All rights reserved.',
  googleAnalyticsId: '',
  author: {
    name: 'bepyan',
    photo: '/profile.png',
    bio: 'frontend engineer',
    contacts: {
      email: 'bepyan@naver.com',
      twitter: 'https://twitter.com/__pyungan',
      github: 'https://github.com/bepyan',
      linkedin: '',
      instagram: '',
      gitlab: '',
      codepen: '',
      youtube: '',
    },
  },
};

export const seoConfig: DefaultSeoProps = {
  title: config.title,
  description: config.description,
  canonical: config.url,
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    url: config.url,
    siteName: config.title,
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: config.author.name,
    },
  ],
};
