import { GetStaticPaths, GetStaticProps } from 'next';

import PostLayout, { PostLayoutProps } from '~/components/layouts/PostLayout';
import { PostFooterProps } from '~/components/PostFooter';
import { parseMdx } from '~/libs/mdx';
import { getAllPosts, getSerizeBySlug } from '~/libs/post';

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => post.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `/blog/${[...slugs].join('/')}`;
  const posts = getAllPosts();
  const postIndex = posts.findIndex((v) => v.slug === slug);

  if (postIndex === -1) {
    return {
      notFound: true,
    };
  }

  const post = posts[postIndex];
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

export default function PostPage({ ...props }: PostLayoutProps) {
  return <PostLayout {...props} />;
}
