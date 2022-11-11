import { ReactNode } from 'react';

import { $ } from '~/utils/core';

export interface TitleProps {
  className?: string;
  children: ReactNode;
}

export default function SubTitle({ className, children }: TitleProps) {
  return (
    <h3
      className={$(
        'text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl',
        className,
      )}
    >
      {children}
    </h3>
  );
}
