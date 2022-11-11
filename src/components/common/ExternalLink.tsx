import { $ } from '~/utils/core';

export default function ExternalLink({ children, className, ...props }: React.ComponentProps<'a'>) {
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
