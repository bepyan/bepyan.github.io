import '~/styles/globals.css';

import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import { seoConfig } from '~/config';

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...seoConfig} />
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
