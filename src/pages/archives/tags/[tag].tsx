import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRef } from 'react';

import Hr from '~/components/common/Hr';
import PostListItem from '~/components/common/PostListItem';
import SnippetListItem from '~/components/common/SnippetListItem';
import Title from '~/components/common/Title';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import { fadeIn, fadeInUp, staggerOne } from '~/constants/animations';
import { posts as reducedPosts, snippets as reducedSnippets, tags } from '~/constants/dataset';
import { ReducedPost } from '~/libs/types';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: tags.map((tag) => `/archives/tags/${tag}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const tag = (params?.tag ?? '') as string;
  const posts = reducedPosts.filter((post) => post.tags.includes(tag));
  const snippets = reducedSnippets.filter((post) => post.tags.includes(tag));

  if (posts.length + snippets.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tag, posts, snippets },
  };
};

export default function TagPage({
  tag,
  posts,
  snippets,
}: {
  tag: string;
  posts: ReducedPost[];
  snippets: ReducedPost[];
}) {
  const postsRef = useRef<HTMLDivElement>(null);
  const snippetsRef = useRef<HTMLDivElement>(null);

  const postsLength = posts.length + snippets.length;

  const scrollToPosts = () => {
    postsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSnippets = () => {
    snippetsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <PageSEO
        title={`${tag} - bepyan`}
        description={`Posts and Snippets about ${tag} (${postsLength})`}
      />

      <Title className="flex items-end gap-4">
        Tags - {tag} <span className="text-2xl">({postsLength})</span>
      </Title>

      <motion.div variants={staggerOne} initial="initial" animate="animate">
        <div className="sticky top-0 z-10 my-4 -mx-2 flex items-center gap-2 bg-gray-100 bg-opacity-80 px-2 py-4 backdrop-blur transition-all dark:bg-gray-900 dark:bg-opacity-50">
          <motion.div
            className="cursor-pointer rounded-lg border border-gray-700 py-1 px-2 font-bold hover:bg-gray-200 dark:border-gray-200 dark:font-normal dark:hover:bg-gray-800"
            onClick={scrollToPosts}
            variants={fadeIn}
          >
            Posts
          </motion.div>
          <motion.div
            className="cursor-pointer rounded-lg border border-gray-700 py-1 px-2 font-bold hover:bg-gray-200 dark:border-gray-200 dark:font-normal dark:hover:bg-gray-800"
            onClick={scrollToSnippets}
            variants={fadeIn}
          >
            Snippets
          </motion.div>
        </div>

        <div className="mt-8 space-y-12">
          <div ref={postsRef} className="scroll-m-16">
            <p className="text-xl font-bold">
              Posts <span className="text-base">({posts.length})</span>
            </p>
            <Hr className="my-4" />
            <ul className="grid gap-4 lg:grid-cols-2 lg:gap-12">
              {posts.map((post) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <motion.div variants={fadeIn} initial="initial" whileInView="animate">
                    <PostListItem post={post} />
                  </motion.div>
                </motion.div>
              ))}
            </ul>
          </div>

          <div ref={snippetsRef}>
            <p className="text-xl font-bold">
              Snippets <span className="text-base">({snippets.length})</span>
            </p>
            <Hr className="my-4" />
            <ul className="grid gap-4 lg:grid-cols-2">
              {snippets.map((post) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <motion.div variants={fadeIn} initial="initial" whileInView="animate">
                    <SnippetListItem key={post.slug} post={post} />
                  </motion.div>
                </motion.div>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
