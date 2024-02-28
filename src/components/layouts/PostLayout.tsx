import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { siteConfig } from '~/config';
import { fadeInHalf, staggerHalf } from '~/constants/animations';
import { Post, Series, TableOfContents } from '~/libs/types';

import AdBanner from '../AdBanner';
import AuthorContacts from '../common/AuthorContacts';
import Hr from '../common/Hr';
import IconText from '../common/IconText';
import Tag from '../common/Tag';
import Title from '../common/Title';
import Giscus from '../Giscus';
import CalenderIcon from '../icons/CalenderIcon';
import ClockIcon from '../icons/ClockIcon';
import CodeBlock from '../mdx/CodeBlock';
import ZoomImage from '../mdx/ZoomImage';
import ReadingProgressBar from '../ReadingProgressBar';
import { BlogSEO } from '../SEO';
import SeriesCard from '../SeriesCard';
import TocBanner from '../TocBanner';
import TocTop from '../TocTop';
import Layout from './Layout';
import PostFooter, { PostFooterProps } from './PostFooter';

export type PostLayoutProps = {
  post: Post;
  series?: Series | null;
  postFooterProps: PostFooterProps;
  tableOfContents: TableOfContents;
};

const mdxComponents = {
  img: ZoomImage,
  pre: CodeBlock,
};

export default function PostLayout({
  post,
  series,
  postFooterProps,
  tableOfContents,
}: PostLayoutProps) {
  const headerTagTitle = series?.title ?? post.snippetName;
  const headerTagSlug = series?.slug ?? `/snippets?key=${post.snippetName ?? 'all'}`;

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout>
      <BlogSEO {...post} url={post.slug} summary={post.description} images={[]} />

      <ReadingProgressBar />

      <motion.section variants={staggerHalf} initial="initial" animate="animate" exit="exit">
        {/* Post Header */}
        <motion.div variants={fadeInHalf}>
          <Title className="mx-auto mb-4 max-w-3xl text-center">{post.title}</Title>

          {headerTagTitle && (
            <div className="mt-2 flex justify-center gap-1">
              {post.snippetName && <span>snippet: </span>}
              <Link href={headerTagSlug}>
                <span className="text-sm font-medium underline underline-offset-4 sm:text-base">
                  {headerTagTitle}
                </span>
              </Link>
            </div>
          )}

          <div className="mt-2 flex w-full flex-col justify-between md:flex-row md:items-center">
            <div className="mx-auto flex gap-2 text-neutral-600 dark:text-neutral-400">
              <IconText Icon={CalenderIcon} text={dayjs(post.date).format('YYYY.MM.DD')} />
              <IconText Icon={ClockIcon} text={`${post.readingMinutes}분`} />
            </div>
          </div>

          <Hr className="mt-4" />
        </motion.div>

        {/* Post Content */}
        <motion.div variants={fadeInHalf} className="relative gap-8 lg:flex">
          <div className="prose prose-neutral w-full max-w-3xl font-spoqa dark:prose-dark">
            <TocTop className="lg:hidden" tableOfContents={tableOfContents} />
            <MDXContent components={mdxComponents} />
          </div>

          <div className="mt-12 ml-auto">
            <div className="sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block">
              <TocBanner tableOfContents={tableOfContents} />
              <AdBanner
                className="mt-12"
                style={{ width: '240px', height: '200px' }}
                data-ad-slot="5629805393"
              />
            </div>
          </div>
        </motion.div>

        {/* Post Footer */}
        <motion.div variants={fadeInHalf} className="mt-12 space-y-8 lg:mt-24">
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
                  className="h-24 w-24 select-none overflow-hidden rounded-full"
                  alt="프로필 사진"
                  draggable={false}
                />
              </div>
              <div>
                <div className="font-bold">{siteConfig.author.name}</div>
                <div className="text-tertiary text-sm">{siteConfig.author.bio}</div>
                <AuthorContacts className="mt-2 text-sm" />
              </div>
            </div>
          </div>
          <PostFooter {...postFooterProps} />
          {series && <SeriesCard currentPost={post} series={series} />}
          <Giscus />
        </motion.div>
      </motion.section>
    </Layout>
  );
}
