import '~/styles/globals.css';
import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import FloatScrollUpButton from '~/components/FloatScrollUpButton';
import { seoConfig } from '~/config';
import { isDev } from '~/libs/core';
import * as gtag from '~/libs/gtag';

dayjs.locale('ko');

export default function App({ Component, pageProps }: AppProps) {
  gtag.useGtag();

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...seoConfig} />
      <div className="font-sans">
        <Component {...pageProps} />
        <FloatScrollUpButton />
      </div>
      {!isDev && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
    </ThemeProvider>
  );
}
