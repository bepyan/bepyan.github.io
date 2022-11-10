import { $ } from '~/utils/core';

export interface TitleProps {
  className?: string;
}

export default function Hr({ className }: TitleProps) {
  return (
    <hr
      className={$(
        'border-1 w-full border-gray-200 transition-all dark:border-gray-800',
        className,
      )}
    />
  );
}
