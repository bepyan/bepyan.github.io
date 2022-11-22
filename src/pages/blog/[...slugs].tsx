import dayjs from 'dayjs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import Hr from '~/components/common/Hr';
import IconText from '~/components/common/IconText';
import Giscus from '~/components/Giscus';
import CalanderIcon from '~/components/icons/CalanderIcon';
import ClockIcon from '~/components/icons/ClockIcon';
import Layout from '~/components/Layout';
import { BlogSEO } from '~/components/SEO';
import TocBanner from '~/components/TocBanner';
import TocTop from '~/components/TocTop';
import { parseMdx } from '~/libs/mdx';
import { getAllPosts } from '~/libs/post';
import { Post, TableOfContents } from '~/libs/types';

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => `/blog/${post.slug}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = [...slugs].join('/');
  const post = getAllPosts().find((v) => v.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const { compiledSource, tableOfContents } = await parseMdx(post.content);

  return {
    props: {
      post,
      slug,
      compiledSource,
      tableOfContents,
    },
  };
};

export default function PostPage({
  post,
  slug,
  compiledSource,
  tableOfContents,
}: {
  post: Post;
  slug: string;
  compiledSource: string;
  tableOfContents: TableOfContents;
}) {
  return (
    <Layout>
      <BlogSEO {...post} url={`/blog/${slug}`} summary={post.description} images={[]} />

      <div>
        <h1 className="mb-4 text-center text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {post.title}
        </h1>

        <div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
          <div className="mx-auto flex gap-2 text-gray-600 dark:text-gray-400">
            <IconText Icon={CalanderIcon} text={dayjs(post.date).format('YYYY.MM.DD')} />
            <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
          </div>
        </div>

        <Hr className="mt-4" />
      </div>

      <div className="absolute left-full">
        <TocBanner tableOfContents={tableOfContents} />
      </div>

      <div className="prose mt-4 w-full max-w-none dark:prose-dark">
        <TocTop tableOfContents={tableOfContents} />
        <MDXRemote compiledSource={compiledSource} />
      </div>

      <div>
        <Hr className="my-8" />
        <Giscus />
      </div>
    </Layout>
  );
}
