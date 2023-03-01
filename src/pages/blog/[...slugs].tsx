import { GetStaticPaths, GetStaticProps } from 'next';

import { PostFooterProps } from '~/components/layouts/PostFooter';
import PostLayout, { PostLayoutProps } from '~/components/layouts/PostLayout';
import { parseToc } from '~/libs/mdx';
import { allBlogPosts, allSeries, contentToDescription } from '~/libs/post';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allBlogPosts.map((post) => post.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };
  const slug = `/blog/${[...slugs].join('/')}`;

  const post = allBlogPosts.find((v) => v.slug === slug);
  const postIndex = allBlogPosts.findIndex((v) => v.slug === slug);

  if (!post || postIndex === -1) {
    return {
      notFound: true,
    };
  }

  if (!post.description) {
    post.description = contentToDescription(post.body.raw);
  }

  const postFooterProps: PostFooterProps = {
    prevPost: allBlogPosts.at(postIndex - 1) ?? null,
    nextPost: allBlogPosts.at(postIndex + 1) ?? null,
  };

  const series = allSeries.find((series) => series.slug === post?.seriesName) ?? null;
  if (series) {
    const postI = series.posts.findIndex((v) => v.slug === slug);
    postFooterProps.prevPost = postI - 1 >= 0 ? series.posts.at(postI - 1) ?? null : null;
    postFooterProps.nextPost = series.posts.at(postI + 1) ?? null;
  }

  const props: PostLayoutProps = {
    post,
    postFooterProps,
    series,
    tableOfContents: parseToc(post.body.raw),
  };

  return {
    props,
  };
};

export default function PostPage(props: PostLayoutProps) {
  return <PostLayout {...props} />;
}
