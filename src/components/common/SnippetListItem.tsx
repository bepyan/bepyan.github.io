import dayjs from 'dayjs';
import Link from 'next/link';

import { $ } from '~/libs/core';
import { Post } from '~/libs/types';
import CalanderIcon from '../icons/CalanderIcon';
import ClockIcon from '../icons/ClockIcon';
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
        <p className="text-gray-600 dark:text-gray-400">{post.description}</p>

        <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
          <div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">
            <IconText Icon={CalanderIcon} text={dayjs(post.date).format('YY.MM.DD')} />
            <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
          </div>
        </div>
      </div>
    </Link>
  );
}
