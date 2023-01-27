import { GetStaticPaths, GetStaticProps } from 'next';

import { PostFooterProps } from '~/components/layouts/PostFooter';
import PostLayout, { PostLayoutProps } from '~/components/layouts/PostLayout';
import { posts } from '~/constants/dataset';
import { parseMdx } from '~/libs/mdx';
import { getPost, getSerizeBySlug } from '~/libs/post';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: posts.map((post) => post.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `/blog/${[...slugs].join('/')}`;
  const post = getPost(slug);
  const postIndex = posts.findIndex((v) => v.slug === slug);

  if (!post || postIndex === -1) {
    return {
      notFound: true,
    };
  }

  const postFooterProps: PostFooterProps = {
    prevPost: posts.at(postIndex - 1) ?? null,
    nextPost: posts.at(postIndex + 1) ?? null,
  };

  const serize = getSerizeBySlug(post.slug) ?? null;
  if (serize) {
    const postI = serize.posts.findIndex((v) => v.slug === slug);
    postFooterProps.prevPost = postI - 1 >= 0 ? serize.posts.at(postI - 1) ?? null : null;
    postFooterProps.nextPost = serize.posts.at(postI + 1) ?? null;
  }

  const { compiledSource, tableOfContents } = await parseMdx(post.content);

  const props: PostLayoutProps = {
    post,
    postFooterProps,
    serize,
    slug,
    compiledSource,
    tableOfContents,
  };

  return {
    props,
  };
};

export default function PostPage(props: PostLayoutProps) {
  return <PostLayout {...props} />;
}
