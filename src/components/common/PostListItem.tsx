import dayjs from 'dayjs';
import Link from 'next/link';
import title from 'title';

import { $ } from '~/libs/core';
import { Post } from '~/libs/types';
import CalanderIcon from '../icons/CalanderIcon';
import ClockIcon from '../icons/ClockIcon';
import IconText from './IconText';

export default function PostListItem({ post }: { post: Omit<Post, 'content'> }) {
  return (
    <li className="text-ye group w-full py-4 hover:drop-shadow-base">
      <Link as={`/blog/${post.slug}`} href={`/blog/[...slug]`} className="hover:drop-shadow-base">
        <p className="text-xl font-bold">{post.title}</p>
        <p className="text-gray-600 dark:text-gray-400">{post.description}</p>
      </Link>
      <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag, i) => (
            <Link key={i} href={`/tags/${tag}`}>
              <div
                className={$(
                  'ye rounded-lg bg-gray-200 px-1.5 py-0.5 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
                  'transition-colors hover:bg-[#dadada] hover:text-gray-900 dark:hover:text-gray-200',
                )}
              >
                {title(tag)}
              </div>
            </Link>
          ))}
        </div>

        <div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">
          <IconText Icon={CalanderIcon} text={dayjs(post.date).format('YY.MM.DD')} />
          <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
        </div>
      </div>
    </li>
  );
}
