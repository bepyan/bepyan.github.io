import { GetStaticPaths, GetStaticProps } from 'next';

import { PostFooterProps } from '~/components/layouts/PostFooter';
import PostLayout, { PostLayoutProps } from '~/components/layouts/PostLayout';
import { allSnippets } from '~/constants/dataset';
import { parseToc } from '~/libs/mdx';
import { contentToDescription } from '~/libs/post';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allSnippets.filter((post) => post.snippetName).map((post) => post.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };
  const slug = `/snippets/${[...slugs].join('/')}`;

  const post = allSnippets.find((v) => v.slug === slug);
  const postIndex = allSnippets.findIndex((v) => v.slug === slug);

  if (!post || postIndex === -1) {
    return {
      notFound: true,
    };
  }

  if (!post.description) {
    post.description = contentToDescription(post.body.raw);
  }

  const postFooterProps: PostFooterProps = {
    prevPost: postIndex > 0 ? allSnippets.at(postIndex - 1) ?? null : null,
    nextPost: allSnippets.at(postIndex + 1) ?? null,
  };

  const tableOfContents = parseToc(post.body.raw);

  const props: PostLayoutProps = {
    post,
    postFooterProps,
    tableOfContents,
  };

  return { props };
};

export default function PostPage({ ...postLayoutProps }: PostLayoutProps) {
  return <PostLayout {...postLayoutProps} />;
}
