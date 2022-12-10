import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useRef, useState } from 'react';

import PostListItem from '~/components/common/PostListItem';
import Title from '~/components/common/Title';
import Layout from '~/components/layouts/Layout';
import { getAllPosts, getAllSnippets, getTagsByPosts } from '~/libs/post';
import { Post } from '~/libs/types';

export const getStaticPaths: GetStaticPaths = () => {
  const tags = getTagsByPosts([...getAllPosts(), ...getAllSnippets()]);

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

  const snippets = getAllSnippets()
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (posts.length + snippets.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tag, posts, snippets },
  };
};

export default function TagPage({
  tag,
  posts,
  snippets,
}: {
  tag: string;
  posts: Post[];
  snippets: Post[];
}) {
  const postsRef = useRef<HTMLDivElement>(null);
  const snippetsRef = useRef<HTMLDivElement>(null);

  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsScrollable(window.innerHeight < document.body.clientHeight);
    };
    onResize();

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('reize', onResize);
    };
  }, []);

  const scrollToPosts = () => {
    postsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSnippets = () => {
    snippetsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      <Title className="flex items-end gap-4">
        Tags - {tag} <span className="text-2xl">({posts.length + snippets.length})</span>
      </Title>

      {isScrollable && (
        <div className="sticky top-0 my-4 -mx-2 flex items-center gap-2 bg-gray-100 bg-opacity-80 px-2 py-4 backdrop-blur transition-all dark:bg-gray-900 dark:bg-opacity-50">
          <div
            className="cursor-pointer rounded-lg border border-gray-700 py-1 px-2 font-bold hover:bg-gray-200 dark:border-gray-200 dark:font-normal dark:hover:bg-gray-800"
            onClick={scrollToPosts}
          >
            Posts
          </div>
          <div
            className="cursor-pointer rounded-lg border border-gray-700 py-1 px-2 font-bold hover:bg-gray-200 dark:border-gray-200 dark:font-normal dark:hover:bg-gray-800"
            onClick={scrollToSnippets}
          >
            Snippets
          </div>
        </div>
      )}

      <div className="mt-8 space-y-12">
        <div ref={postsRef} className="scroll-m-16">
          <p className="text-xl font-bold">
            Posts <span className="text-base">({posts.length})</span>
          </p>
          <ul className="mt-2 space-y-4">
            {posts.map((post) => (
              <PostListItem key={post.slug} post={post} />
            ))}
          </ul>
        </div>
        <div ref={snippetsRef}>
          <p className="text-xl font-bold">
            Snippets <span className="text-base">({snippets.length})</span>
          </p>
          <ul className="mt-2 space-y-4">
            {snippets.map((post) => (
              <PostListItem key={post.slug} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
