import { $ } from '~/libs/core';

export default function LinkExternal({ children, className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      {...props}
      className={$('text-gray-500 transition hover:text-gray-600', className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
