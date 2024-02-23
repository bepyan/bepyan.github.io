import { useEffect } from 'react';

import { isDev } from '~/libs/core';

export default function AdSenseBanner() {
  useEffect(() => {
    if (!isDev) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <>
      {!isDev && (
        <>
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-2820184336962070"
            data-ad-slot="5794684285"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </>
      )}
    </>
  );
}
