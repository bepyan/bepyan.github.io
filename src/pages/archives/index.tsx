import { Transition } from '@headlessui/react';
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
      <PlainText>모든 기록물들을 한곳에 저장하는 장소입니다.</PlainText>
      <Transition appear show>
        {/* Serizes */}
        <div className="mt-12">
          <SubTitle>
            Serizes<span className="ml-2 text-sm">({serizes.length})</span>
          </SubTitle>
          <Transition.Child
            className="mt-4 flex flex-wrap gap-2"
            enter="transition-opacity duration-300"
            enterFrom="opacity-30"
            enterTo="opacity-100"
          >
            {serizes.map((serize) => (
              <LinkHover
                key={serize.slug}
                href={serize.slug}
                className="px-4 py-2 ring-1 ring-gray-300 dark:ring-gray-700"
              >
                <div>
                  <span>{serize.title}</span>
                  <div className="flex gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-xs">{serize.date}</span>
                    <IconText Icon={ListIcon} text={serize.posts.length} />
                  </div>
                </div>
              </LinkHover>
            ))}
          </Transition.Child>
        </div>
        <Hr className="my-8" />
        {/* Tags */}
        <Transition.Child
          enter="transition-opacity duration-300 delay-75"
          enterFrom="opacity-30"
          enterTo="opacity-100"
        >
          <SubTitle>
            Tags<span className="ml-2 text-sm">({tags.length})</span>
          </SubTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
        </Transition.Child>
        <Hr className="my-8" />
        {/* Posts, Snippets */}
        <Transition.Child
          className="mt-4 grid grid-cols-1 gap-8 delay-100 sm:grid-cols-2"
          enter="transition-opacity duration-300"
          enterFrom="opacity-30"
          enterTo="opacity-100"
        >
          <div>
            <SubTitle>Posts</SubTitle>
            <PostSection classifiedPosts={classifiedPosts} />
          </div>
          <div>
            <SubTitle>Snippets</SubTitle>
            <PostSection classifiedPosts={classifiedSnippets} />
          </div>
        </Transition.Child>
      </Transition>
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
                  <Link
                    href={post.slug}
                    className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};
