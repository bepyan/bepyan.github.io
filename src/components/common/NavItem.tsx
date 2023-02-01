import { useRouter } from 'next/router';

import { $ } from '~/libs/core';

import LinkHover from './LinkHover';

export default function NavItem({
  href,
  children,
  className,
  ...props
}: React.ComponentProps<'a'>) {
  const router = useRouter();
  const isActive = router.asPath.startsWith(href ?? '/');

  return (
    <LinkHover
      {...props}
      href={href}
      className={$(
        isActive ? 'text-primary font-semibold' : 'text-secondary font-normal',
        className,
      )}
    >
      {children}
    </LinkHover>
  );
}
