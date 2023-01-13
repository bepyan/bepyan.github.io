import Link from 'next/link';

import { $ } from '~/libs/core';

export default function LinkArrow({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: _,
  className,
  href,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <Link
      {...props}
      href={href ?? '/'}
      className={$(
        'inline-flex h-6 items-center rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200',
        className,
      )}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="ml-1 h-6 w-6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
        ></path>
      </svg>
    </Link>
  );
}
