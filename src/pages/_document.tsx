import { Head, Html, Main, NextScript } from 'next/document';

import { isDev } from '~/libs/core';

export default function MyDocument() {
  return (
    <Html lang="ko" className="[--scroll-mt:4rem]">
      <Head>
        <meta
          name="google-site-verification"
          content="IW87tE2IQja7BjGV4qw19t6Wk6Kcnmf-x-K5lrYWa28"
        />
        <meta name="google-adsense-account" content="ca-pub-2820184336962070" />
        <meta name="naver-site-verification" content="3763a796b024affc5b7513ac77c47e6e03c8bdcf" />

        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#131313" media="(prefers-color-scheme: dark)" />

        <link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS" />
        <link rel="alternate" type="application/atom+xml" href="/rss-atom.xml" title="RSS Atom" />
        <link rel="alternate" type="application/json" href="/feed.json" title="JSON Feed" />
      </Head>
      <body className="text-primary bg-primary transition-[background]">
        <Main />
        <NextScript />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {!isDev && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
            }}
          />
        )}
      </body>
    </Html>
  );
}
