import dayjs from 'dayjs';
import { MDXRemote } from 'next-mdx-remote';

import { $ } from '~/libs/core';
import { useRehypeCodeCoppy } from '~/libs/rehypeCodeWrap';
import { Post, Serize, TableOfContents } from '~/libs/types';
import useMediumZoom from '~/libs/useMediumZoom';
import Hr from '../common/Hr';
import IconText from '../common/IconText';
import Title from '../common/Title';
import Giscus from '../Giscus';
import CalanderIcon from '../icons/CalanderIcon';
import ClockIcon from '../icons/ClockIcon';
import PostFooter, { PostFooterProps } from '../PostFooter';
import { BlogSEO } from '../SEO';
import SerizeCard from '../SerizeCard';
import TocBanner from '../TocBanner';
import TocTop from '../TocTop';
import Layout from './Layout';

export type PostLayoutProps = {
  post: Post;
  serize: Serize | null;
  postFooterProps: PostFooterProps;
  slug: string;
  compiledSource: string;
  tableOfContents: TableOfContents;
};

export default function PostLayout({
  post,
  serize,
  postFooterProps,
  slug,
  compiledSource,
  tableOfContents,
}: PostLayoutProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useRehypeCodeCoppy();
  useMediumZoom();

  return (
    <Layout>
      <BlogSEO {...post} url={`/blog/${slug}`} summary={post.description} images={[]} />

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

      <div className="relative flex gap-8">
        <div className="prose max-w-3xl flex-1 dark:prose-dark">
          <TocTop className="lg:hidden" tableOfContents={tableOfContents} />
          <MDXRemote compiledSource={compiledSource} />
        </div>
        <div className="mt-12 ml-auto">
          <div
            className={$(
              'sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block',
            )}
          >
            <TocBanner tableOfContents={tableOfContents} />
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <PostFooter {...postFooterProps} />
        <Hr />
        {serize && <SerizeCard currentPost={post} serize={serize} />}
        <Giscus />
      </div>
    </Layout>
  );
}
