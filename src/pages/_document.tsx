import { Head, Html, Main, NextScript } from 'next/document';

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
      </Head>
      <body className="bg-gray-100 text-gray-900 transition-[background] dark:bg-gray-850 dark:text-gray-200">
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
