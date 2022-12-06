import dayjs from 'dayjs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import Hr from '~/components/common/Hr';
import IconText from '~/components/common/IconText';
import Title from '~/components/common/Title';
import Giscus from '~/components/Giscus';
import CalanderIcon from '~/components/icons/CalanderIcon';
import ClockIcon from '~/components/icons/ClockIcon';
import Layout from '~/components/Layout';
import PostFooter, { PostFooterProps } from '~/components/PostFooter';
import { BlogSEO } from '~/components/SEO';
import TocBanner from '~/components/TocBanner';
import TocTop from '~/components/TocTop';
import { $ } from '~/libs/core';
import { parseMdx } from '~/libs/mdx';
import { getAllSnippets } from '~/libs/post';
import { useRehypeCodeCoppy } from '~/libs/rehypeCodeWrap';
import { Post, TableOfContents } from '~/libs/types';

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllSnippets();

  return {
    paths: posts.map((post) => `/${post.slug}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `snippets/${[...slugs].join('/')}`;
  const posts = getAllSnippets();
  const postIndex = posts.findIndex((v) => v.slug === slug);

  if (postIndex === -1) {
    return {
      notFound: true,
    };
  }

  const post = posts[postIndex];
  const postFooterProps: PostFooterProps = {
    prevPost: postIndex > 0 ? posts.at(postIndex - 1) ?? null : null,
    nextPost: posts.at(postIndex + 1) ?? null,
  };

  const { compiledSource, tableOfContents } = await parseMdx(post.content);

  const props: Props = {
    post,
    postFooterProps,
    slug,
    compiledSource,
    tableOfContents,
  };

  return {
    props,
  };
};

type Props = {
  post: Post;
  postFooterProps: PostFooterProps;
  slug: string;
  compiledSource: string;
  tableOfContents: TableOfContents;
};

export default function PostPage({
  post,
  postFooterProps,
  slug,
  compiledSource,
  tableOfContents,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useRehypeCodeCoppy();

  return (
    <Layout>
      <BlogSEO {...post} url={`${slug}`} summary={post.description} images={[]} />

      <div>
        <Title className="mb-4 text-center">{post.title}</Title>

        <div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
          <div className="mx-auto flex gap-2 text-gray-600 dark:text-gray-400">
            <IconText Icon={CalanderIcon} text={dayjs(post.date).format('YYYY.MM.DD')} />
            <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
          </div>
        </div>

        <Hr className="mt-4" />
      </div>

      <div
        className={$(
          'fixed top-[120px] bottom-0 hidden overflow-y-auto px-4 pb-10 xl:block 2xl:px-8',
          // 자연스럽게 사라지는 시점: 3xl(768) + 2 * width(256) = xl(1280)
          'right-[max(0px,calc(50%-42rem))] w-64 2xl:right-[max(calc(50%-46rem),calc(50%-48rem))] 2xl:w-80',
        )}
      >
        <TocBanner tableOfContents={tableOfContents} />
      </div>

      <div className="prose mt-4 w-full max-w-none dark:prose-dark">
        <TocTop tableOfContents={tableOfContents} />
        <MDXRemote compiledSource={compiledSource} />
      </div>

      <div className="mt-12 space-y-8">
        <PostFooter {...postFooterProps} />
        <Hr />
        <Giscus />
      </div>
    </Layout>
  );
}
