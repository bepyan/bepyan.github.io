import Link from 'next/link';

import { $ } from '~/libs/core';

export default function HoverLink({ className, href, children }: React.ComponentProps<'a'>) {
  return (
    <Link
      href={href ?? '/'}
      className={$(
        'flex items-center rounded-lg transition-all hover:bg-gray-250 hover:bg-opacity-20 dark:hover:bg-gray-800',
        className,
      )}
    >
      {children}
    </Link>
  );
}
