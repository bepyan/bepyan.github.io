import { Head, Html, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="IW87tE2IQja7BjGV4qw19t6Wk6Kcnmf-x-K5lrYWa28"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
      </Head>
      <body className="bg-gray-50 text-black transition-[background] dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
