import React from 'react';

import { $ } from '~/libs/core';

export default function PlainText({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <p className={$('mb-4 text-gray-600 dark:text-gray-400', className)}>{children}</p>;
}
