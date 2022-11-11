import Link from 'next/link';

import { $ } from '~/utils/core';
import { Post } from '~/utils/types';

export default function PostListItem({ post }: { post: Post }) {
  return (
    <li className="text-ye py-4 hover:drop-shadow-base">
      <Link as={`/blog/${post.slug}`} href={`/blog/[...slug]`} className="hover:drop-shadow-base">
        <p className="text-xl font-bold">{post.title}</p>
        <p className="text-gray-600 dark:text-gray-400">{post.description}</p>
      </Link>
      <div className="mt-2 flex items-center space-x-2 text-sm">
        {post.tags.map((tag, i) => (
          <Link key={i} href={`/tags/${tag}`}>
            <div
              className={$(
                'ye rounded-lg bg-gray-200 px-1.5 py-0.5 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
                'transition-colors hover:bg-[#dadada] hover:text-gray-900 dark:hover:text-gray-200',
              )}
            >
              {tag}
            </div>
          </Link>
        ))}
      </div>
    </li>
  );
}
