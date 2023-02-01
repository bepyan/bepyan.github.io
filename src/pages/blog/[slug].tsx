import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';

import IconText from '~/components/common/IconText';
import PostListItem from '~/components/common/PostListItem';
import HoverCard from '~/components/HoverCard';
import CalenderIcon from '~/components/icons/CalenderIcon';
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
                <div className="relative mx-auto h-[336px] w-[240px] select-none rounded-lg bg-neutral-200 px-11 pb-16 pt-12 dark:bg-neutral-800">
                  <div className="absolute inset-y-0 left-4 w-[1px] bg-neutral-50 dark:bg-neutral-700" />
                  <div className="text-primary flex h-full break-keep bg-neutral-50 px-3 py-4 text-xl font-semibold dark:bg-neutral-700">
                    {serize.title}
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          </div>

          <div className="sm:col-span-2">
            <motion.div className="bg-secondary rounded-lg px-5 py-4" variants={fadeIn}>
              <p className="text-primary font-medium">{serize.description}</p>
              <div className="text-secondary mt-1 flex gap-2">
                <IconText Icon={CalenderIcon} text={dayjs(serize.date).format('YY.MM.DD')} />
                <IconText Icon={ListIcon} text={`${serize.posts.length}편`} />
                <IconText Icon={ClockIcon} text={`${serize.readingMinutes}분`} />
              </div>
            </motion.div>

            <div className="mt-16 space-y-4">
              {serize.posts.map((post, i) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <div className="flex space-x-6">
                    <div className="pt-4 font-bold">{i + 1}.</div>
                    <PostListItem post={post} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
