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
        'rounded-lg px-2 py-0.5',
        'bg-neutral-200 transition-colors hover:bg-neutral-300 hover:text-primary dark:bg-neutral-700',
        selected
          ? 'text-primary font-semibold ring-2 ring-neutral-400/70'
          : 'text-secondary font-medium',
        className,
      )}
    />
  );
}
