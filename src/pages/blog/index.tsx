import Link from 'next/link';
import { Suspense } from 'react';

import PostListItem from '~/components/common/PostListItem';
import SubTitle from '~/components/common/SubTitle';
import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';
import { getAllPosts, getAllSerizes } from '~/libs/post';
import { Post, Serize } from '~/libs/types';

export function getStaticProps() {
  return {
    props: {
      serizes: getAllSerizes(),
      posts: getAllPosts().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
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
          개발하면서 탐구한 것을 소소하게 기록하는 공간입니다. <br />
          {`시리즈로 연재된 포스트는 아래 시리즈북으로 편리하게 열람할 수 있습니다 🧐`}
        </p>
      </div>

      <Suspense fallback={null}>
        <div className="flex items-center space-x-6">
          {serizes.map((serize) => (
            <Link key={serize.slug} as={`/blog/${serize.slug}`} href={`/blog/[slug]`}>
              <div className="relative h-56 w-40 select-none rounded-lg bg-gray-200 px-8 pt-8 pb-12 dark:bg-gray-800">
                <div className="absolute inset-y-0 left-2.5 w-[1px] bg-gray-100 dark:bg-gray-700" />
                <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-gray-700 dark:text-white">
                  {serize.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>

      <Suspense fallback={null}>
        <div className="mt-16 mb-4 flex items-end gap-2">
          <SubTitle>All Posts</SubTitle>
          <span className="font-bold">({posts.length})</span>
        </div>

        <ul className="w-full space-y-8 md:w-3/4">
          {posts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </ul>
      </Suspense>
    </Layout>
  );
}
