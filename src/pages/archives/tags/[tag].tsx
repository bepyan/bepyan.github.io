import { GetStaticPaths, GetStaticProps } from 'next';

import PostListItem from '~/components/common/PostListItem';
import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { getAllPosts, getTagsByPosts } from '~/libs/post';
import { Post } from '~/libs/types';

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();
  const tags = getTagsByPosts(posts);

  return {
    paths: tags.map((tag) => `/archives/tags/${tag}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const tag = (params?.tag ?? '') as string;

  const posts = getAllPosts()
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (!posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tag, posts },
  };
};

export default function TagPage({ tag, posts }: { tag: string; posts: Post[] }) {
  return (
    <Layout>
      <Title className="flex items-end gap-4">
        Tags - {tag} <span className="text-2xl">({posts.length})</span>
      </Title>
      <ul className="mt-12 space-y-4">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ul>
    </Layout>
  );
}
