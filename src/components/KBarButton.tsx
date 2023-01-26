import { useKBar } from 'kbar';

import { $ } from '~/libs/core';

export default function KBarButton() {
  const { query } = useKBar();

  return (
    <button
      className={$(
        'cursor-pointer rounded-lg border px-2 py-1 text-xs dark:border-gray-700 dark:bg-gray-800',
        'transition-colors active:bg-gray-200 dark:active:bg-gray-700',
      )}
      onClick={query.toggle}
    >
      ⌘ K
    </button>
  );
}
