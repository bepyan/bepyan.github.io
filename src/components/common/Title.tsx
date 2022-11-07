import { ReactNode } from 'react';

import { $ } from '~/utils/core';

export interface TitleProps {
  className?: string;
  children: ReactNode;
}

export default function Title({ className, children }: TitleProps) {
  return (
    <h1 className={$('mb-4 text-3xl font-bold tracking-tight md:text-5xl', className)}>
      {children}
    </h1>
  );
}
