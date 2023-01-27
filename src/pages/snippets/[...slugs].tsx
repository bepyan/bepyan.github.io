import { GetStaticPaths, GetStaticProps } from 'next';

import { PostFooterProps } from '~/components/layouts/PostFooter';
import PostLayout, { PostLayoutProps } from '~/components/layouts/PostLayout';
import { snippets } from '~/constants/dataset';
import { parseMdx } from '~/libs/mdx';
import { getPost } from '~/libs/post';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: snippets.map((post) => post.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `/snippets/${[...slugs].join('/')}`;

  const post = getPost(slug);
  const postIndex = snippets.findIndex((v) => v.slug === slug);

  if (!post || postIndex === -1) {
    return {
      notFound: true,
    };
  }

  const postFooterProps: PostFooterProps = {
    prevPost: postIndex > 0 ? snippets.at(postIndex - 1) ?? null : null,
    nextPost: snippets.at(postIndex + 1) ?? null,
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
