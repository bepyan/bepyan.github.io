import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

import { $ } from '~/libs/core';
import { Post, Serize } from '~/libs/types';

import IconText from './common/IconText';
import CalanderIcon from './icons/CalanderIcon';
import ClockIcon from './icons/ClockIcon';
import ListIcon from './icons/ListIcon';

export default function SerizeCard({ currentPost, serize }: { currentPost: Post; serize: Serize }) {
  const [open, setOpen] = useState(true);

  const currentPostIndex = serize.posts.findIndex((post) => post.slug === currentPost.slug);

  const onClickCard = () => {
    !open && setOpen(!open);
  };

  return (
    <div
      className={$(
        'rounded-lg bg-gray-150 p-4 dark:bg-gray-800',
        !open && 'cursor-pointer transition-all hover:bg-gray-200 dark:hover:bg-gray-700',
      )}
      onClick={onClickCard}
    >
      <p className="text-base font-medium sm:text-lg">{serize.title}</p>
      <div className="mt-1 flex gap-3">
        <IconText Icon={ListIcon} text={`${currentPostIndex + 1} / ${serize.posts.length}`} />
        <IconText Icon={CalanderIcon} text={dayjs(serize.date).format('YY.MM.DD')} />
        <IconText Icon={ClockIcon} text={`${serize.readingMinutes}분`} />
      </div>
      <div className="mt-3 whitespace-pre-wrap text-sm">
        <div className="">
          {serize.description}
          {!open && (
            <span className="ml-3 text-gray-700 dark:text-gray-300" onClick={() => setOpen(true)}>
              더보기
            </span>
          )}
        </div>
      </div>
      {open && (
        <div className="mt-4 flex flex-col gap-2">
          {serize.posts.map((post, i) => (
            <Link
              key={i}
              href={post.slug}
              className={$(
                'text-gray-400 transition-all hover:text-gray-700 dark:hover:text-gray-250',
                post.slug === currentPost.slug && 'font-semibold text-gray-700 dark:text-gray-200',
              )}
            >
              {i + 1}. {post.title}
            </Link>
          ))}
          <span
            className="mt-2 mr-auto cursor-pointer text-sm text-gray-400 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-250"
            onClick={() => setOpen(false)}
          >
            간략히
          </span>
        </div>
      )}
    </div>
  );
}
