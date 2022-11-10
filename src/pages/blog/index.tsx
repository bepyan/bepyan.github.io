import Link from 'next/link';

import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';
import { posts } from '~/utils/post';

export function getStaticProps() {
  return { props: { posts } };
}

type Props = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PostPage({ posts }: Props) {
  return (
    <Layout>
      <PageSEO title="Blog" description="" url="/blog" />
      <Title>Blog</Title>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="py-4">
            <Link as={`/blog/${post.slug.replace(/\.mdx?$/, '')}`} href={`/blog/[...slug]`}>
              <p className="text-xl font-bold">{post.title}</p>
            </Link>
            <div>
              {post.tags.map((tag, i) => (
                <Link key={i} href={`/tags/${tag}`}>
                  {tag}
                </Link>
              ))}
            </div>
            <p className="text-gray-800 dark:text-gray-400">{post.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
