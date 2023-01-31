import { useKBar } from 'kbar';

import { $ } from '~/libs/core';

export default function KBarButton() {
  const { query } = useKBar();

  return (
    <button
      className={$(
        'flex cursor-pointer items-center rounded-lg p-1 text-xs',
        'bg-secondary transition-colors hover:bg-tertiary',
      )}
      onClick={query.toggle}
    >
      <span className="px-3">Search...</span>
      <div
        className={$(
          'ml-auto rounded-lg px-2 py-1',
          'bg-primary border transition-colors dark:border-neutral-700',
        )}
      >
        ⌘ K
      </div>
    </button>
  );
}
