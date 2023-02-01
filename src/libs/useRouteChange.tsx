import { useRouter } from 'next/router';
import { DependencyList, useEffect } from 'react';

export default function useRouteChange(onChange: (url: URL) => void, deps?: DependencyList) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      onChange(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events, deps]);
}
