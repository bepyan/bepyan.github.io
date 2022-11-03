import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <meta property="og:type" key="type" content="blog" />
        <meta property="og:site_name" key="site_name" content="bepyan" />
        <meta property="og:locale" key="locale" content="ko_KR" />
        <meta property="og:title" content="bepyan" />
        <meta property="og:url" content="https://bepyan.github.io/" />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/65283190?v=4?s=400"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
