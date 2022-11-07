import Link from 'next/link';
import { useRouter } from 'next/router';

import { $ } from '~/utils/core';

export default function NavItem({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={$(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'rounded-lg px-3 py-1.5 transition-all hover:bg-gray-200 dark:hover:bg-gray-800',
      )}
    >
      <span>{text}</span>
    </Link>
  );
}
