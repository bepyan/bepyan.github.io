import Link from 'next/link';

import { $ } from '~/libs/core';

export default function LinkHover({ className, href, children }: React.ComponentProps<'a'>) {
  return (
    <Link
      href={href ?? '/'}
      className={$('flex items-center rounded-lg transition-all hover:bg-secondary', className)}
    >
      {children}
    </Link>
  );
}
