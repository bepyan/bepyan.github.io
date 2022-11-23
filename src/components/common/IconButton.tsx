import { $ } from '~/libs/core';

export default function IconButton({
  className,
  type = 'button',
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      type={type}
      className={$(
        'flex h-9 w-9 items-center justify-center rounded-lg transition-all',
        'text-gray-700 hover:bg-gray-200 dark:text-gray-250 dark:hover:bg-gray-800',
        className,
      )}
    />
  );
}
