import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import PlainText from '~/components/common/PlainText';
import PostListItem from '~/components/common/PostListItem';
import SearchInput from '~/components/common/SearchInput';
import SubTitle from '~/components/common/SubTitle';
import Title from '~/components/common/Title';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import {
  fadeIn,
  fadeInHalf,
  fadeInSlideToLeft,
  fadeInUp,
  staggerHalf,
  staggerOne,
} from '~/constants/animations';
import { posts, serizes } from '~/constants/dataset';
import useSearch from '~/libs/useSearch';

export default function PostPage() {
  const { searchValue, searchHandler } = useSearch();

  const filteredSerizes = serizes.filter((serize) =>
    serize.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Layout>
      <PageSEO
        title="Blog"
        description="개발하면서 탐구한 것을 소소하게 기록하는 공간입니다."
        url="/blog"
      />

      <Title>Blog</Title>

      <motion.div variants={staggerHalf} initial="initial" animate="animate" exit="exit">
        <motion.div variants={fadeInHalf}>
          <PlainText>
            개발하면서 탐구한 것을 소소하게 기록하는 공간입니다. <br />
            {`시리즈로 연재된 포스트는 아래 시리즈북으로 편리하게 열람할 수 있습니다 🧐`}
          </PlainText>
        </motion.div>

        <motion.div variants={fadeInHalf}>
          <SearchInput
            className="relative mb-4 w-full"
            placeholder="시리즈북, 포스트 제목 검색"
            onChange={searchHandler}
          />
        </motion.div>

        <motion.div
          className="no-scrollbar -my-12 -ml-8 flex items-center space-x-6 overflow-scroll py-12 pl-8"
          variants={staggerOne}
        >
          <AnimatePresence mode="wait">
            {filteredSerizes.map((serize) => (
              <motion.div key={serize.slug} variants={fadeInSlideToLeft}>
                <Link as={serize.slug} href={`/blog/[slug]`}>
                  <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800">
                    <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700" />
                    <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-neutral-700 dark:text-white">
                      {serize.title}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div className="mt-16 mb-4 flex items-end gap-2" variants={fadeInHalf}>
          <SubTitle>{!searchValue ? 'All Posts' : 'Filtered Posts'}</SubTitle>
          <span className="font-bold">({filteredBlogPosts.length})</span>
        </motion.div>

        <motion.div
          className="mt-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12"
          variants={staggerHalf}
        >
          {filteredBlogPosts.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <motion.div
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ amount: 0.6, once: true }}
              >
                <PostListItem post={post} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
}
