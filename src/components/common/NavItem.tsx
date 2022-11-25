import { useRouter } from 'next/router';

import { $ } from '~/libs/core';
import HoverLink from './HoverLink';

export default function NavItem({ href, children, className }: React.ComponentProps<'a'>) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <HoverLink
      href={href}
      className={$(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        className,
      )}
    >
      {children}
    </HoverLink>
  );
}
