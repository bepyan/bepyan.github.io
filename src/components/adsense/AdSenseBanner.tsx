import { Adsense } from '@ctrl/react-adsense';

import { isDev } from '~/libs/core';

export default function AdSenseBanner() {
  return (
    <>
      {!isDev && (
        <>
          <Adsense client="ca-pub-2820184336962070" slot="5794684285" />
        </>
      )}
    </>
  );
}
