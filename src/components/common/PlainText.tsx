import React from 'react';

import { $ } from '~/libs/core';

export default function PlainText({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <p className={$('text-tertiary mb-4', className)}>{children}</p>;
}
