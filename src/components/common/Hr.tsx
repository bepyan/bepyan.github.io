import { $ } from '~/libs/core';

export default function Hr({ className, ...props }: React.ComponentProps<'hr'>) {
  return (
    <hr
      {...props}
      className={$(
        'border-1 w-full border-gray-200 transition-all dark:border-gray-800',
        className,
      )}
    />
  );
}
