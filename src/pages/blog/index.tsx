import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

import PlainText from '~/components/common/PlainText';
import PostListItem from '~/components/common/PostListItem';
import SearchInput from '~/components/common/SearchInput';
import SubTitle from '~/components/common/SubTitle';
import Title from '~/components/common/Title';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import { getAllPosts, getAllSerizes } from '~/libs/post';
import { Post, Serize } from '~/libs/types';
import useSearch from '~/libs/useSearch';

export function getStaticProps() {
  return {
    props: {
      serizes: getAllSerizes(),
      posts: getAllPosts().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    },
  };
}

export default function PostPage({ serizes, posts }: { serizes: Serize[]; posts: Post[] }) {
  const { searchValue, searchHandler } = useSearch();

  const filteredSerizes = serizes.filter((serize) =>
    serize.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Layout>
      <PageSEO title="Blog" description="" url="/blog" />

      <div className="pb-4">
        <Title>Blog</Title>
        <PlainText>
          개발하면서 탐구한 것을 소소하게 기록하는 공간입니다. <br />
          {`시리즈로 연재된 포스트는 아래 시리즈북으로 편리하게 열람할 수 있습니다 🧐`}
        </PlainText>

        <SearchInput
          className="relative mb-4 w-full"
          placeholder="시리즈북, 포스트 제목 검색"
          onChange={searchHandler}
        />
      </div>

      <Transition appear show>
        <div className="flex items-center space-x-6">
          {filteredSerizes.map((serize, i) => (
            <Transition.Child
              key={serize.slug}
              enter="transition-all duration-300"
              enterFrom="opacity-30 translate-x-16"
              enterTo="opacity-100 translate-x-0"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <Link as={serize.slug} href={`/blog/[slug]`}>
                <div className="relative h-56 w-40 select-none rounded-lg bg-gray-200 px-8 pt-8 pb-12 dark:bg-gray-800">
                  <div className="absolute inset-y-0 left-2.5 w-[1px] bg-gray-100 dark:bg-gray-700" />
                  <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-gray-700 dark:text-white">
                    {serize.title}
                  </div>
                </div>
              </Link>
            </Transition.Child>
          ))}
        </div>

        <Transition.Child
          enter="transition-all duration-300"
          enterFrom="opacity-60"
          enterTo="opacity-100"
          className="mt-16 mb-4 flex items-end gap-2"
          style={{ transitionDelay: `${200}ms` }}
        >
          <SubTitle>{!searchValue ? 'All Posts' : 'Filtered Posts'}</SubTitle>
          <span className="font-bold">({filteredBlogPosts.length})</span>
        </Transition.Child>

        <ul className="w-full space-y-8 md:w-3/4">
          {filteredBlogPosts.map((post, i) => (
            <Transition.Child
              key={post.slug}
              enter="transition-all duration-300"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              style={{ transitionDelay: `${200 + i * 30}ms` }}
            >
              <PostListItem post={post} />
            </Transition.Child>
          ))}
        </ul>
      </Transition>
    </Layout>
  );
}
