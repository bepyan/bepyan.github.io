import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

export default function useMediumZoom() {
  useEffect(() => {
    const images = document.querySelectorAll('.prose img');
    mediumZoom(images, {});
  }, []);
}
