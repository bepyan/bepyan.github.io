import { GetStaticPaths, GetStaticProps } from 'next';

import PostLayout, { PostLayoutProps } from '~/components/layouts/PostLayout';
import { PostFooterProps } from '~/components/PostFooter';
import { parseMdx } from '~/libs/mdx';
import { getAllSnippets } from '~/libs/post';

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

  const props: PostLayoutProps = {
    post,
    serize: null,
    postFooterProps,
    slug,
    compiledSource,
    tableOfContents,
  };

  return {
    props,
  };
};

export default function PostPage({ ...postLayoutProps }: PostLayoutProps) {
  return <PostLayout {...postLayoutProps} />;
}
