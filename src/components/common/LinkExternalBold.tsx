import { $ } from '~/libs/core';

export default function LinkExternalBold({
  className,
  children,
  ...props
}: React.ComponentProps<'a'>) {
  return (
    <a
      {...props}
      className={$('mt-0.5 inline-block font-bold underline-offset-4 hover:underline', className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
