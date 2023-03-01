import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
import { posts, serizes, snippets, tags } from '~/constants/dataset';
import { ReducedPost } from '~/libs/types';

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
      classifiedPosts: classifyPosts(posts),
      classifiedSnippets: classifyPosts(snippets),
    },
  };
};

export default function Archives({
  classifiedPosts,
  classifiedSnippets,
}: {
  classifiedPosts: ClassifiedPosts;
  classifiedSnippets: ClassifiedPosts;
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

        {/* Serizes */}
        <motion.div className="mt-12" variants={fadeInHalf}>
          <SubTitle>
            Serizes<span className="ml-2 text-sm">({serizes.length})</span>
          </SubTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {serizes.map((series) => (
              <LinkHover
                key={series.slug}
                href={series.slug}
                className="px-4 py-2 ring-1 ring-neutral-300 dark:ring-neutral-700"
              >
                <div>
                  <span>{series.title}</span>
                  <div className="text-tertiary flex gap-2">
                    <span className="text-xs">{series.date}</span>
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
            Tags<span className="ml-2 text-sm">({tags.length})</span>
          </SubTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
        </motion.div>

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
