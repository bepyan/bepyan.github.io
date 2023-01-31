import { Post } from '~/libs/types';

import LinkHover from '../common/LinkHover';

export type PostFooterProps = {
  prevPost: Pick<Post, 'title' | 'slug'> | null;
  nextPost: Pick<Post, 'title' | 'slug'> | null;
};

export default function PostFooter({ prevPost, nextPost }: PostFooterProps) {
  return (
    <div className="-mx-4 flex items-center text-sm font-semibold text-slate-700 dark:text-slate-200 sm:mx-0 sm:text-base">
      {prevPost && (
        <LinkHover href={prevPost.slug} className="group gap-3 px-4 py-2">
          <svg
            viewBox="0 0 3 6"
            className="h-1.5 w-auto overflow-visible text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{prevPost.title}</span>
        </LinkHover>
      )}
      {nextPost && (
        <LinkHover href={nextPost.slug} className="group ml-auto gap-3 px-4 py-2 text-right">
          <span>{nextPost.title}</span>
          <svg
            viewBox="0 0 3 6"
            className="h-1.5 w-auto overflow-visible text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </LinkHover>
      )}
    </div>
  );
}
