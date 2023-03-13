import mediumZoom, { Zoom } from 'medium-zoom';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export default function ZoomImage({ src, alt, ...props }: React.ComponentProps<'img'>) {
  const ref = useRef<HTMLImageElement>(null);
  const [zoom, setZoom] = useState<Zoom>();

  const { resolvedTheme } = useTheme();
  const background = resolvedTheme === 'dark' ? '#171717' : '#FAFAFA';

  useEffect(() => {
    if (!ref.current || ref.current.classList.contains('medium-zoom-image')) return;

    setZoom(mediumZoom(ref.current, { background }));
  }, []);

  useEffect(() => {
    zoom?.update({ background });
  }, [background]);

  return <img ref={ref} src={src} alt={alt} {...props} />;
}
