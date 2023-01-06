import mediumZoom, { type Zoom } from 'medium-zoom';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function useMediumZoom() {
  const [mounted, setMounted] = useState(false);
  const [zoom, setZoom] = useState<Zoom>();

  const { resolvedTheme } = useTheme();
  const background = resolvedTheme === 'dark' ? '#131313' : '#f9fafb';

  useEffect(() => {
    setMounted(true);

    if (mounted) {
      const images = document.querySelectorAll('.prose img');
      setZoom(mediumZoom(images, {}));
    }
  }, [mounted]);

  useEffect(() => {
    zoom?.update({ background });
  }, [zoom, background]);
}
