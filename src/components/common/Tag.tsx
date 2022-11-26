import Link from 'next/link';
import title from 'title';

import { $ } from '~/libs/core';

export default function Tag({ tag }: { tag: string }) {
  return (
    <Link href={`/tags/${tag}`}>
      <div
        className={$(
          'rounded-lg bg-gray-200 px-1.5 py-0.5 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
          'transition-colors hover:bg-[#dadada] hover:text-gray-900 dark:hover:text-gray-200',
        )}
      >
        {title(tag)}
      </div>
    </Link>
  );
}
