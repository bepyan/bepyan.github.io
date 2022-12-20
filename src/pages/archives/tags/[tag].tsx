import { Transition } from '@headlessui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useRef, useState } from 'react';

import Hr from '~/components/common/Hr';
import PostListItem from '~/components/common/PostListItem';
import SnippetListItem from '~/components/common/SnippetListItem';
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

      <Transition className="mt-8 space-y-12" appear show>
        <div ref={postsRef} className="scroll-m-16">
          <p className="text-xl font-bold">
            Posts <span className="text-base">({posts.length})</span>
          </p>
          <Hr className="my-4" />
          <ul className="grid gap-4 lg:grid-cols-2 lg:gap-12">
            {posts.map((post, i) => (
              <Transition.Child
                key={post.slug}
                enter="transition-opacity duration-300"
                enterFrom="opacity-30"
                enterTo="opacity-100"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <PostListItem post={post} />
              </Transition.Child>
            ))}
          </ul>
        </div>
        <div ref={snippetsRef}>
          <p className="text-xl font-bold">
            Snippets <span className="text-base">({snippets.length})</span>
          </p>
          <Hr className="my-4" />
          <ul className="grid gap-4 lg:grid-cols-2">
            {snippets.map((post, i) => (
              <Transition.Child
                key={post.slug}
                enter="transition-opacity duration-300"
                enterFrom="opacity-30"
                enterTo="opacity-100"
                style={{ transitionDelay: `${30 + i * 30}ms` }}
              >
                <SnippetListItem key={post.slug} post={post} />
              </Transition.Child>
            ))}
          </ul>
        </div>
      </Transition>
    </Layout>
  );
}
