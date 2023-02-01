import mediumZoom, { type Zoom } from 'medium-zoom';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { isDev } from './core';
import useRouteChange from './useRouteChange';

export default function useMediumZoom() {
  const [mounted, setMounted] = useState(false);
  const [zoom, setZoom] = useState<Zoom>();

  const { resolvedTheme } = useTheme();
  const background = resolvedTheme === 'dark' ? '#131313' : '#f9fafb';

  const applyZoom = () => {
    const images = document.querySelectorAll('.prose img');
    setZoom(mediumZoom(images, {}));
  };

  useEffect(() => {
    if (isDev && !mounted) return setMounted(true);
    applyZoom();
  }, [mounted]);

  useRouteChange(applyZoom);

  useEffect(() => {
    zoom?.update({ background });
  }, [zoom, background]);
}
