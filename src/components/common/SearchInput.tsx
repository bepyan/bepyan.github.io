import { $ } from '~/libs/core';

export default function SearchInput({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <div className={$('relative mb-4 w-full', className)}>
      <input
        type="text"
        className={$(
          'block w-full rounded-md border px-4 py-2',
          'border-neutral-200 bg-white placeholder:text-tertiary dark:border-neutral-900 dark:bg-neutral-800',
          'focus:outline-none focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-800',
        )}
        {...props}
      />
      <svg
        className="text-secondary absolute right-3 top-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
