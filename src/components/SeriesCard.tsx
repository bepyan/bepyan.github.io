import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';

import { $ } from '~/libs/core';
import { Series } from '~/libs/types';

import IconText from './common/IconText';
import CalenderIcon from './icons/CalenderIcon';
import ClockIcon from './icons/ClockIcon';
import ListIcon from './icons/ListIcon';

export default function SeriesCard({ currentPost, series }: { currentPost: Post; series: Series }) {
  const [open, setOpen] = useState(true);

  const currentPostIndex = series.posts.findIndex((post) => post.slug === currentPost.slug);

  const onClickCard = () => {
    !open && setOpen(!open);
  };

  return (
    <div
      className={$(
        'bg-secondary rounded-lg p-4',
        !open && 'cursor-pointer transition-all hover:bg-tertiary',
      )}
      onClick={onClickCard}
    >
      <p className="text-base font-medium sm:text-lg">{series.title}</p>
      <div className="mt-1 flex gap-3">
        <IconText Icon={ListIcon} text={`${currentPostIndex + 1} / ${series.posts.length}`} />
        <IconText Icon={CalenderIcon} text={dayjs(series.date).format('YY.MM.DD')} />
        <IconText Icon={ClockIcon} text={`${series.readingMinutes}분`} />
      </div>
      <div className="mt-3 whitespace-pre-wrap text-xs sm:text-sm">
        <div className="text-secondary">{series.description}</div>
      </div>
      {open && (
        <div className="mt-4 flex flex-col gap-2 text-sm sm:text-base">
          {series.posts.map((post, i) => (
            <Link
              key={i}
              href={post.slug}
              className={$(
                'transition-all',
                post.slug === currentPost.slug
                  ? 'text-primary font-semibold'
                  : 'text-secondary hover:text-primary',
              )}
            >
              {i + 1}. {post.title}
            </Link>
          ))}
          <span
            className="text-tertiary mt-2 mr-auto cursor-pointer text-sm hover:text-secondary"
            onClick={() => setOpen(false)}
          >
            간략히
          </span>
        </div>
      )}
    </div>
  );
}
