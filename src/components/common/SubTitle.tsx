import { $ } from '~/libs/core';

export default function SubTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      {...props}
      className={$(
        'text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl',
        className,
      )}
    />
  );
}
