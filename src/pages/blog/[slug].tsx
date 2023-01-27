import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';

import IconText from '~/components/common/IconText';
import PostListItem from '~/components/common/PostListItem';
import HoverCard from '~/components/HoverCard';
import CalanderIcon from '~/components/icons/CalanderIcon';
import ClockIcon from '~/components/icons/ClockIcon';
import ListIcon from '~/components/icons/ListIcon';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import { fadeIn, fadeInSlideToLeft, fadeInUp, staggerTwo } from '~/constants/animations';
import { serizes } from '~/constants/dataset';
import { Serize } from '~/libs/types';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: serizes.map((serize) => serize.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as { slug: string };

  const serizeSlug = `/blog/${slug}`;
  const serize = serizes.find((v) => v.slug === serizeSlug);

  if (!serize) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serize,
    },
  };
};

export default function PostPage({ serize }: { serize: Serize }) {
  return (
    <Layout>
      <PageSEO title={serize.title} description={serize.description} url={serize.slug} />

      <motion.section variants={staggerTwo} initial="initial" animate="animate">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-32">
          <div className="sm:sticky sm:top-8 sm:self-start">
            <motion.div variants={fadeInSlideToLeft} className="sm:col-span-1">
              <HoverCard>
                <div className="relative mx-auto h-[336px] w-[240px] select-none rounded-lg bg-gray-200 px-11 pb-16 pt-12 dark:bg-gray-800">
                  <div className="absolute inset-y-0 left-4 w-[1px] bg-gray-100 dark:bg-gray-700" />
                  <div className="flex h-full break-keep bg-gray-50 px-3 py-4 text-xl font-semibold dark:bg-gray-700 dark:text-white">
                    {serize.title}
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          </div>

          <div className="sm:col-span-2">
            <motion.div
              className="rounded-lg bg-gray-150 px-5 py-4 dark:bg-gray-800"
              variants={fadeIn}
            >
              <p>{serize.description}</p>
              <div className="mt-1 flex gap-2 text-gray-600 dark:text-gray-400">
                <IconText Icon={CalanderIcon} text={dayjs(serize.date).format('YY.MM.DD')} />
                <IconText Icon={ListIcon} text={`${serize.posts.length}편`} />
                <IconText Icon={ClockIcon} text={`${serize.readingMinutes}분`} />
              </div>
            </motion.div>

            <ul className="mt-16 space-y-4">
              {serize.posts.map((post, i) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <div className="flex space-x-6">
                    <div className="pt-4 font-bold">{i + 1}.</div>
                    <PostListItem post={post} />
                  </div>
                </motion.div>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
