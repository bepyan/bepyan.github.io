import Link from 'next/link';

import { $ } from '~/libs/core';

export default function LinkArrow({
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
        'inline-flex h-6 items-center rounded-lg leading-7 transition-all',
        'text-mute hover:text-primary',
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
        ></path>
      </svg>
    </Link>
  );
}
