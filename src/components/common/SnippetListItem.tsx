import dayjs from 'dayjs';
import Link from 'next/link';

import { $ } from '~/libs/core';
import { Post } from '~/libs/types';
import CalanderIcon from '../icons/CalanderIcon';
import IconText from './IconText';

export default function SnippetListItem({
  post,
  noBorder,
}: {
  post: Omit<Post, 'content'>;
  noBorder?: boolean;
}) {
  return (
    <Link as={`/${post.slug}`} href={`/snippets/[...slug]`} className="hover:drop-shadow-base">
      <div
        className={$(
          'text-ye group w-full py-4 hover:drop-shadow-base',
          !noBorder && 'rounded-lg px-4 ring-1 ring-gray-250 dark:ring-gray-700',
        )}
      >
        <p className="text-xl font-bold">{post.title}</p>
        <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
          <div className="flex gap-2 whitespace-nowrap text-gray-600 group-hover:drop-shadow-base-bold dark:text-gray-400">
            <IconText Icon={CalanderIcon} text={dayjs(post.date).format('YY.MM.DD')} />
          </div>
        </div>
      </div>
    </Link>
  );
}
