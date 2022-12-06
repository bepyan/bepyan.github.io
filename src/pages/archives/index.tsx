import Link from 'next/link';

import HoverLink from '~/components/common/HoverLink';
import Hr from '~/components/common/Hr';
import IconText from '~/components/common/IconText';
import PlainText from '~/components/common/PlainText';
import SubTitle from '~/components/common/SubTitle';
import Tag from '~/components/common/Tag';
import Title from '~/components/common/Title';
import ListIcon from '~/components/icons/ListIcon';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';
import { getAllPosts, getAllSerizes, getTagsByPosts } from '~/libs/post';
import { Post, Serize } from '~/libs/types';

type ClassifiedPosts = {
  [key: string]: Post[];
};

export const getStaticProps = () => {
  const serizes = getAllSerizes();
  const posts = getAllPosts();
  const tags = getTagsByPosts(posts);

  const classifiedPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reduce<ClassifiedPosts>((ac, v) => {
      const year = new Date(v.date).getFullYear();

      if (!ac[year]) {
        ac[year] = [];
      }
      ac[year].push(v);

      return ac;
    }, {});

  return {
    props: {
      serizes,
      tags,
      classifiedPosts,
    },
  };
};

export default function Archives({
  serizes,
  tags,
  classifiedPosts,
}: {
  serizes: Serize[];
  tags: string[];
  classifiedPosts: ClassifiedPosts;
}) {
  return (
    <Layout>
      <PageSEO title="Archives" description="" url="/archives" />
      <Title>Archives</Title>
      <PlainText>모든 기록물들을 한곳에 저장하는 장소입니다.</PlainText>
      <div className="mt-12">
        <SubTitle>
          Serizes<span className="ml-2 text-sm">({serizes.length})</span>
        </SubTitle>
        <div className="mt-4 flex flex-wrap gap-2">
          {serizes.map((serize) => (
            <HoverLink
              key={serize.slug}
              href={`/blog/${serize.slug}`}
              className="px-4 py-2 ring-1 ring-gray-300 dark:ring-gray-700"
            >
              <div>
                <span>{serize.title}</span>
                <div className="flex gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-xs">{serize.date}</span>
                  <IconText Icon={ListIcon} text={serize.posts.length} />
                </div>
              </div>
            </HoverLink>
          ))}
        </div>
      </div>
      <Hr className="my-8" />
      <div>
        <SubTitle>
          Tags<span className="ml-2 text-sm">({tags.length})</span>
        </SubTitle>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
      </div>
      <Hr className="my-8" />
      <div>
        <SubTitle>Posts</SubTitle>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.keys(classifiedPosts)
            .reverse()
            .map((year) => (
              <div key={year}>
                <div className="text-lg font-bold">
                  {year}
                  <span className="ml-1 text-sm">({classifiedPosts[year].length})</span>
                </div>
                <ul>
                  {classifiedPosts[year].map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
