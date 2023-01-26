import { useKBar } from 'kbar';

import { $ } from '~/libs/core';

export default function KBarButton() {
  const { query } = useKBar();

  return (
    <button
      className={$(
        'flex cursor-pointer items-center rounded-lg  p-1 text-xs',
        'bg-gray-200 dark:bg-gray-700',
        'transition-colors hover:bg-gray-150 hover:dark:bg-gray-800',
      )}
      onClick={query.toggle}
    >
      <span className="px-3">Search...</span>
      <div
        className={$(
          'ml-auto rounded-lg px-2 py-1',
          'border bg-gray-100 dark:border-gray-700 dark:bg-gray-800',
        )}
      >
        ⌘ K
      </div>
    </button>
  );
}
