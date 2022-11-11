import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Hr from '~/components/common/Hr';
import Layout from '~/components/Layout';
import { serializeMdx } from '~/utils/mdx';
import { getAllPosts } from '~/utils/post';
import { Post } from '~/utils/types';

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => `/blog/${post.slug}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = [...slugs].join('/');
  const post = getAllPosts().find((v) => v.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdx = await serializeMdx(post.content);

  return {
    props: {
      post,
      slug,
      mdx,
    },
  };
};

export default function PostPage({
  post,
  mdx,
}: {
  post: Post;
  slug: string;
  mdx: MDXRemoteSerializeResult;
}) {
  return (
    <Layout>
      {/* <BlogSEO {...post} url={`/blog/${slug}`} summary={post.description} images={[]} /> */}

      <div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {post.title}
        </h1>

        <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center">
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">{post.date}</p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
            {post.readingMinutes}
            {` • `}
            {post.wordCount} words
          </p>
        </div>
        <Hr className="mt-4" />
      </div>

      <div className="prose mt-4 w-full max-w-none dark:prose-dark">
        <MDXRemote {...mdx} />
      </div>
    </Layout>
  );
}
