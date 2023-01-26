import { Transition } from '@headlessui/react';
import dayjs from 'dayjs';
import { MDXRemote } from 'next-mdx-remote';

import { siteConfig } from '~/config';
import { useRehypeCodeCoppy } from '~/libs/rehypeCodeWrap';
import { Post, Serize, TableOfContents } from '~/libs/types';
import useMediumZoom from '~/libs/useMediumZoom';

import AuthorContacts from '../common/AuthorContacts';
import Hr from '../common/Hr';
import IconText from '../common/IconText';
import Tag from '../common/Tag';
import Title from '../common/Title';
import Giscus from '../Giscus';
import CalanderIcon from '../icons/CalanderIcon';
import ClockIcon from '../icons/ClockIcon';
import PostFooter, { PostFooterProps } from '../PostFooter';
import ReadingProgressBar from '../ReadingProgressBar';
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
      <BlogSEO {...post} url={slug} summary={post.description} images={[]} />

      <ReadingProgressBar />

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

      <Transition className="relative gap-8 lg:flex" show appear>
        <Transition.Child
          className="prose max-w-3xl dark:prose-dark"
          enter="transition-opacity duration-200"
          enterFrom="opacity-70"
          enterTo="opacity-100"
        >
          <TocTop className="lg:hidden" tableOfContents={tableOfContents} />
          <MDXRemote compiledSource={compiledSource} />
        </Transition.Child>

        <div className="mt-12 ml-auto">
          <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
            <TocBanner tableOfContents={tableOfContents} />
          </div>
        </div>
      </Transition>

      <div className="mt-12 space-y-8 lg:mt-24">
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <Hr />
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center gap-4 sm:gap-8 sm:p-12">
            <div>
              <img
                src={siteConfig.author.photo}
                className="h-24 w-24 overflow-hidden rounded-full"
                alt="프로필 사진"
              />
            </div>
            <div>
              <div className="font-bold">{siteConfig.author.name}</div>
              <div className="text-gray-600 dark:text-gray-400">{siteConfig.author.bio}</div>
              <AuthorContacts className="mt-2 text-sm" />
            </div>
          </div>
        </div>
        <PostFooter {...postFooterProps} />
        {serize && <SerizeCard currentPost={post} serize={serize} />}
        <Giscus />
      </div>
    </Layout>
  );
}
