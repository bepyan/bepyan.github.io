import { useEffect, useState } from 'react';

import UpIcon from './icons/UpIcon';

export default function FloatScrollUpButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (!observer) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setShow(!entry.isIntersecting);
        },
        { threshold: 0.9 },
      );
    }

    const nav = document.querySelector('nav');

    if (nav) {
      observer.observe(nav);
    }
  }, []);

  return (
    <div
      className="bg-secondary fixed right-6 bottom-6 h-8 w-8 rounded p-2 active:opacity-80 sm:hidden"
      onClick={() => window.scrollTo({ top: 0 })}
      style={{ display: show ? '' : 'none' }}
    >
      <UpIcon />
    </div>
  );
}
