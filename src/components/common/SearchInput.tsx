import { $ } from '~/libs/core';

export default function SearchInput({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <div className={$('relative mb-4 w-full', className)}>
      <input
        type="text"
        className={$(
          'block w-full rounded-md border px-4 py-2',
          'border-gray-200 bg-white text-gray-900 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100',
          'focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700',
        )}
        {...props}
      />
      <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
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
