import mediumZoom from 'medium-zoom';
import { useEffect, useState } from 'react';

export default function useMediumZoom() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (mounted) {
      const images = document.querySelectorAll('.prose img');
      mediumZoom(images, {});
    }
  }, [mounted]);
}
