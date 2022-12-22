import { Transition } from '@headlessui/react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import title from 'title';

import Pill from '~/components/common/Pill';
import PlainText from '~/components/common/PlainText';
import SnippetListItem from '~/components/common/SnippetListItem';
import Title from '~/components/common/Title';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import { excludePostContent, getAllSnippets } from '~/libs/post';
import { Post } from '~/libs/types';

type Snippet = {
  key: string;
  postList: Post[];
};

export const getStaticProps: GetStaticProps = () => {
  const snippets = getAllSnippets().map(excludePostContent);

  const tagSnippets = snippets
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .reduce<{ [key: string]: Post[] }>((ac, snippet) => {
      const key = snippet.snippetSlug;
      if (!key) return ac;

      if (!ac[key]) {
        ac[key] = [];
      }

      ac[key].push(snippet);
      return ac;
    }, {});

  const snippetList = Object.keys(tagSnippets)
    .map<Snippet>((key) => ({
      key,
      postList: tagSnippets[key],
    }))
    .sort((a, b) => b.postList.length - a.postList.length);

  return {
    props: { snippetList },
  };
};

export default function Snippets({ snippetList }: { snippetList: Snippet[] }) {
  const router = useRouter();
  const selectedKey = router.query?.key;

  const isAll = !selectedKey || selectedKey === 'all';
  const allSnippetsCnt = snippetList.reduce((ac, snippet) => ac + snippet.postList.length, 0);
  const postList = snippetList.reduce<Post[]>((ac, v) => {
    if (selectedKey && selectedKey !== 'all' && selectedKey !== v.key) {
      return [...ac];
    }
    return [...ac, ...v.postList];
  }, []);

  return (
    <Layout>
      <PageSEO
        title="Snippets"
        description="개발하면서 실제 사용되었던 코드 조각들 입니다. 간단한 Javavscript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 🍯"
        url="/snippets"
      />
      <Title>Code Snippets</Title>
      <PlainText>
        개발하면서 실제 사용되었던 코드 조각들 입니다.
        <br />
        간단한 Javavscript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 🍯
      </PlainText>

      <div className="no-scrollbar sticky top-0 -mx-2 flex items-center gap-2 overflow-scroll bg-gray-100 bg-opacity-80 px-2 py-4 backdrop-blur transition-all dark:bg-gray-900 dark:bg-opacity-50">
        <Link href="?key=all">
          <Pill selected={isAll} className="cursor-pointer whitespace-nowrap">
            All <span className="text-xs">{allSnippetsCnt}</span>
          </Pill>
        </Link>
        {snippetList.map(({ key, postList }) => (
          <Link key={key} href={`?key=${key}`}>
            <Pill className="cursor-pointer whitespace-nowrap" selected={key === selectedKey}>
              {title(key)} <span className="text-xs">{postList.length}</span>
            </Pill>
          </Link>
        ))}
      </div>

      <div className="mt-8 space-y-16">
        {isAll ? (
          snippetList.map(({ key, postList }) => {
            return (
              <ul key={key} className="mt-4 grid grid-cols-2 gap-4">
                {postList.map((post) => (
                  <Transition
                    key={post.slug}
                    appear
                    show
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-30"
                    enterTo="opacity-100"
                  >
                    <SnippetListItem post={post} />
                  </Transition>
                ))}
              </ul>
            );
          })
        ) : (
          <ul className="mt-4 grid grid-cols-2 gap-4">
            {postList.map((post) => (
              <Transition
                key={post.slug}
                appear
                show
                enter="transition-opacity duration-300"
                enterFrom="opacity-30"
                enterTo="opacity-100"
              >
                <SnippetListItem post={post} />
              </Transition>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
