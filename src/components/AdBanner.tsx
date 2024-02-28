import { useEffect } from 'react';

import { $, isDev } from '~/libs/core';

export default function AdBanner(props: React.ComponentProps<'ins'>) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      {...props}
      className={$('adsbygoogle', !isDev && 'data-[ad-status=unfilled]:hidden', props.className)}
      style={{
        ...props.style,
        display: 'block',
        overflow: 'hidden',
      }}
      data-ad-client="ca-pub-2820184336962070"
    />
  );
}
