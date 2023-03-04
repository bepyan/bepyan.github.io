import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRef } from 'react';

import Hr from '~/components/common/Hr';
import Pill from '~/components/common/Pill';
import PostListItem from '~/components/common/PostListItem';
import SnippetListItem from '~/components/common/SnippetListItem';
import Title from '~/components/common/Title';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import { fadeIn, fadeInUp, staggerOne } from '~/constants/animations';
import { allBlogPosts, allSnippets, allTags } from '~/constants/dataset';
import { reducePost } from '~/libs/post';
import { ReducedPost } from '~/libs/types';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allTags.map((tag) => `/archives/tags/${tag}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const tag = (params?.tag ?? '') as string;
  const posts = allBlogPosts.filter((post) => post.tags.includes(tag)).map(reducePost);
  const snippets = allSnippets.filter((post) => post.tags.includes(tag)).map(reducePost);

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
        <div className="bg-primary sticky top-0 z-10 my-4 -mx-2 flex items-center gap-2 bg-opacity-80 px-2 py-4 backdrop-blur transition-all dark:bg-opacity-80">
          <motion.div variants={fadeIn}>
            <Pill className="cursor-pointer" onClick={scrollToPosts}>
              Posts
            </Pill>
          </motion.div>
          <motion.div variants={fadeIn}>
            <Pill className="cursor-pointer" onClick={scrollToSnippets}>
              Snippets
            </Pill>
          </motion.div>
        </div>

        <div className="mt-8 space-y-12">
          <div ref={postsRef} className="scroll-m-16">
            <p className="text-xl font-bold">
              Posts <span className="text-base">({posts.length})</span>
            </p>
            <Hr className="my-4" />
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-12">
              {posts.map((post) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <motion.div variants={fadeIn} initial="initial" whileInView="animate">
                    <PostListItem post={post} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div ref={snippetsRef}>
            <p className="text-xl font-bold">
              Snippets <span className="text-base">({snippets.length})</span>
            </p>
            <Hr className="my-4" />
            <div className="grid gap-4 lg:grid-cols-2">
              {snippets.map((post) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <motion.div variants={fadeIn} initial="initial" whileInView="animate">
                    <SnippetListItem key={post.slug} post={post} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
