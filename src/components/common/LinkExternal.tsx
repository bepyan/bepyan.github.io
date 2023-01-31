import { $ } from '~/libs/core';

export default function LinkExternal({ children, className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      {...props}
      className={$('text-tertiary transition hover:text-secondary', className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
