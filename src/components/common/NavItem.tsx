import { useRouter } from 'next/router';

import { $ } from '~/libs/core';
import LinkHover from './LinkHover';

export default function NavItem({ href, children, className }: React.ComponentProps<'a'>) {
  const router = useRouter();
  const isActive = router.asPath.startsWith(href ?? '/');

  return (
    <LinkHover
      href={href}
      className={$(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        className,
      )}
    >
      {children}
    </LinkHover>
  );
}
