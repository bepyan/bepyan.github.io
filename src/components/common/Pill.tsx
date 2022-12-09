import React from 'react';

import { $ } from '~/libs/core';

export interface PillProps extends React.ComponentProps<'div'> {
  selected?: boolean;
}

export default function Pill({ className, selected, ...props }: PillProps) {
  return (
    <div
      {...props}
      className={$(
        'rounded-lg px-1.5 py-0.5',
        'transition-colors hover:bg-[#dadada] hover:text-gray-900 dark:hover:text-gray-200',
        selected
          ? 'bg-gray-200 ring-1 ring-gray-300 dark:bg-gray-700 dark:text-gray-200'
          : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
        className,
      )}
    />
  );
}
