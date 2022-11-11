import Link from 'next/link';
import { Suspense } from 'react';

import PostListItem from '~/components/common/PostListItem';
import SubTitle from '~/components/common/SubTitle';
import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';
import { getAllPosts, getAllSerizes } from '~/utils/post';
import { Post, Serize } from '~/utils/types';

export function getStaticProps() {
  return {
    props: {
      serizes: getAllSerizes(),
      posts: getAllPosts(),
    },
  };
}

export default function PostPage({ serizes, posts }: { serizes: Serize[]; posts: Post[] }) {
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

      <Suspense fallback={null}>
        <div className="flex items-center space-x-6">
          {serizes.map((serize) => (
            <Link key={serize.slug} as={`/blog/${serize.slug}`} href={`/blog/[slug]`}>
              <div className="h-56 w-40 select-none rounded-lg bg-gray-200 px-8 pt-8 pb-12 dark:bg-gray-800">
                <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-gray-700 dark:text-white">
                  {serize.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <SubTitle className="mt-16 mb-4">All Posts</SubTitle>

        <ul className="space-y-4">
          {posts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </ul>
      </Suspense>
    </Layout>
  );
}
