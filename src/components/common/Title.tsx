import { $ } from '~/libs/core';

export default function Title({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      {...props}
      className={$('mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl', className)}
    />
  );
}
