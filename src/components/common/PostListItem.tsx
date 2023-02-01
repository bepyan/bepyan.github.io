import dayjs from 'dayjs';
import Link from 'next/link';

import { $ } from '~/libs/core';
import { ReducedPost } from '~/libs/types';

import CalenderIcon from '../icons/CalenderIcon';
import ClockIcon from '../icons/ClockIcon';
import IconText from './IconText';
import Tag from './Tag';

export default function PostListItem({ post }: { post: ReducedPost }) {
  const href = !!post.snippetSlug ? `/snippets/[...slug]` : `/blog/[...slug]`;

  return (
    <div className={$('text-ye group w-full py-4 hover:drop-shadow-base')}>
      <Link as={post.slug} href={href} className="hover:drop-shadow-base">
        <p className="text-xl font-bold">{post.title}</p>
        <p className="text-tertiary mt-1">{post.description}</p>
      </Link>
      <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>

        <div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">
          <IconText Icon={CalenderIcon} text={dayjs(post.date).format('YY.MM.DD')} />
          <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
        </div>
      </div>
    </div>
  );
}
