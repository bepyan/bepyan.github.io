import { Head, Html, Main, NextScript } from 'next/document';

import { $ } from '~/libs/core';

export default function MyDocument() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="IW87tE2IQja7BjGV4qw19t6Wk6Kcnmf-x-K5lrYWa28"
        />
        <meta name="naver-site-verification" content="3763a796b024affc5b7513ac77c47e6e03c8bdcf" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
      </Head>
      <body
        className={$(
          'bg-gray-50 text-black transition-[background] dark:bg-gray-900 dark:text-white',
          '[--scroll-mt:2rem]',
        )}
      >
        <Main />
        <NextScript />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
      </body>
    </Html>
  );
}
