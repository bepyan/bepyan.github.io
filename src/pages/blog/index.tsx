import Link from 'next/link';
import { Suspense } from 'react';

import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';
import { $ } from '~/utils/core';
import { getAllPosts } from '~/utils/post';
import { Post } from '~/utils/types';

export function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}

export default function PostPage({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <PageSEO title="Blog" description="" url="/blog" />

      <div className="pb-4">
        <Title>Blog</Title>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on my blog.
            Use the search below to filter by title.`}
        </p>
      </div>

      <Suspense>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          All Posts
        </h3>

        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="text-ye py-4 hover:drop-shadow-base">
              <Link
                as={`/blog/${post.slug.replace(/\.mdx?$/, '')}`}
                href={`/blog/[...slug]`}
                className="hover:drop-shadow-base"
              >
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
          ))}
        </ul>
      </Suspense>
    </Layout>
  );
}
