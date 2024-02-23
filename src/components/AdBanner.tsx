import { useEffect } from 'react';

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
      className="adsbygoogle"
      style={{
        display: 'block',
        overflow: 'hidden',
      }}
      data-ad-client="ca-pub-2820184336962070"
      {...props}
    />
  );
}
