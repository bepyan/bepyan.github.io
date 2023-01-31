import { Head, Html, Main, NextScript } from 'next/document';

import { isDev } from '~/libs/core';

export default function MyDocument() {
  return (
    <Html lang="ko" className="[--scroll-mt:2rem]">
      <Head>
        <meta
          name="google-site-verification"
          content="IW87tE2IQja7BjGV4qw19t6Wk6Kcnmf-x-K5lrYWa28"
        />
        <meta name="naver-site-verification" content="3763a796b024affc5b7513ac77c47e6e03c8bdcf" />

        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#131313" media="(prefers-color-scheme: dark)" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
