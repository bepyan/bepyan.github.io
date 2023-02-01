import '~/styles/globals.css';
import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import { KBarProvider } from 'kbar';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

import FloatScrollUpButton from '~/components/FloatScrollUpButton';
import Fonts from '~/components/Fonts';
import { seoConfig } from '~/config';
import { $, isDev } from '~/libs/core';
import * as gtag from '~/libs/gtag';
import useKBarAction from '~/libs/useKBarAction';

dayjs.locale('ko');

const KBar = dynamic(() => import('~/components/KBar'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  gtag.useGtag();

  const actions = useKBarAction();

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...seoConfig} />
      <KBarProvider actions={actions} options={{ enableHistory: true }}>
        <Fonts />
        <div className={$('font-sans')}>
          <Component {...pageProps} />
          <FloatScrollUpButton />
          <KBar />
          <Toaster
            toastOptions={{
              className: 'text-primary bg-secondary',
              position: 'bottom-right',
            }}
          />
        </div>
      </KBarProvider>
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
