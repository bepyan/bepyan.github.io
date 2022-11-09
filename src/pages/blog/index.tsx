import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';
import { getAllPosts } from '~/utils/post';

export function getStaticProps() {
  // const posts = postFilePaths.map((filePath) => {
  //   const file = readPost(filePath);
  //   const { content, data } = matter(file);

  //   return {
  //     content,
  //     data: data as TPostMatters,
  //     filePath,
  //   };
  // });
  const posts = getAllPosts();

  return { props: { posts: [] } };
}

type Props = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PostPage({ posts }: Props) {
  return (
    <Layout>
      <PageSEO title="Blog" description="" url="/blog" />
      <Title>Blog</Title>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.filePath} className="py-4">
            <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/blog/[slug]`}>
              <p className="text-xl font-bold">{post.data.title}</p>
            </Link>
            <div>
              {post.data.tags.map((keyword, i) => (
                <Link key={i} href={`/keyword/${keyword}`}>
                  {keyword}
                </Link>
              ))}
            </div>
            <p className="text-gray-800 dark:text-gray-400">{post.data.description}</p>
          </li>
        ))} */}
      </ul>
    </Layout>
  );
}
