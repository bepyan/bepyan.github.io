import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Link from 'next/link';

import AdBanner from '~/components/AdBanner';
import Hr from '~/components/common/Hr';
import IconText from '~/components/common/IconText';
import LinkHover from '~/components/common/LinkHover';
import PlainText from '~/components/common/PlainText';
import SubTitle from '~/components/common/SubTitle';
import Tag from '~/components/common/Tag';
import Title from '~/components/common/Title';
import ListIcon from '~/components/icons/ListIcon';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import { fadeInHalf, staggerHalf } from '~/constants/animations';
import { allSeries, allTags, reducedAllBlogPosts, reducedAllSnippets } from '~/constants/dataset';
import { ReducedPost, Series } from '~/libs/types';

type ClassifiedPosts = {
  [key: string]: ReducedPost[];
};

const classifyPosts = (posts: ReducedPost[]) => {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reduce<ClassifiedPosts>((ac, v) => {
      const year = new Date(v.date).getFullYear();

      if (!ac[year]) {
        ac[year] = [];
      }
      ac[year].push(v);

      return ac;
    }, {});
};

export const getStaticProps = () => {
  return {
    props: {
      classifiedPosts: classifyPosts(reducedAllBlogPosts),
      classifiedSnippets: classifyPosts(reducedAllSnippets),
      allSeries,
      allTags,
    },
  };
};

export default function Archives({
  classifiedPosts,
  classifiedSnippets,
  allSeries,
  allTags,
}: {
  classifiedPosts: ClassifiedPosts;
  classifiedSnippets: ClassifiedPosts;
  allSeries: Series[];
  allTags: string[];
}) {
  return (
    <Layout>
      <PageSEO
        title="Archives"
        description="모든 기록물들을 한곳에 저장하는 장소입니다."
        url="/archives"
      />

      <Title>Archives</Title>

      <motion.div variants={staggerHalf} initial="initial" animate="animate" exit="exit">
        <motion.div variants={fadeInHalf}>
          <PlainText>모든 기록물들을 한곳에 저장하는 장소입니다.</PlainText>
        </motion.div>

        {/* Series */}
        <motion.div className="mt-12" variants={fadeInHalf}>
          <SubTitle>
            Series<span className="ml-2 text-sm">({allSeries.length})</span>
          </SubTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {allSeries.map((series) => (
              <LinkHover
                key={series.slug}
                href={series.slug}
                className="px-4 py-2 ring-1 ring-neutral-300 dark:ring-neutral-700"
              >
                <div>
                  <span>{series.title}</span>
                  <div className="text-tertiary flex gap-2">
                    <span className="text-xs">{dayjs(series.date).format('YYYY-MM-DD')}</span>
                    <IconText Icon={ListIcon} text={series.posts.length} />
                  </div>
                </div>
              </LinkHover>
            ))}
          </div>
        </motion.div>

        <Hr className="my-8" />

        {/* Tags */}
        <motion.div className="mt-12" variants={fadeInHalf}>
          <SubTitle>
            Tags<span className="ml-2 text-sm">({allTags.length})</span>
          </SubTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {allTags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
        </motion.div>

        <Hr className="my-8" />

        <AdBanner
          data-ad-slot="5794684285"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        <Hr className="my-8" />

        {/* Posts, Snippets */}
        <motion.div
          variants={fadeInHalf}
          className="mt-4 grid grid-cols-1 gap-8 delay-100 sm:grid-cols-2"
        >
          <div>
            <SubTitle>Posts</SubTitle>
            <PostSection classifiedPosts={classifiedPosts} />
          </div>
          <div>
            <SubTitle>Snippets</SubTitle>
            <PostSection classifiedPosts={classifiedSnippets} />
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}

const PostSection = ({ classifiedPosts }: { classifiedPosts: ClassifiedPosts }) => {
  return (
    <>
      {Object.keys(classifiedPosts)
        .reverse()
        .map((year) => (
          <div key={year} className="mt-4">
            <div className="text-lg font-bold">
              {year}
              <span className="ml-1 text-sm">({classifiedPosts[year].length})</span>
            </div>
            <ul>
              {classifiedPosts[year].map((post) => (
                <li key={post.slug}>
                  <Link href={post.slug} className="text-tertiary transition hover:text-primary">
                    <div className="flex items-end gap-1">
                      <span className="mb-0.5 w-8 text-xs">{dayjs(post.date).format('MM.DD')}</span>
                      <span>{post.title}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};
