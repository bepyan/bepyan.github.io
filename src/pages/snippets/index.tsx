import { GetStaticProps } from 'next';
import title from 'title';

import PlainText from '~/components/common/PlainText';
import SnippetListItem from '~/components/common/SnippetListItem';
import Title from '~/components/common/Title';
import Layout from '~/components/Layout';
import { PageSEO } from '~/components/SEO';
import { getAllSnippets } from '~/libs/post';
import { Post } from '~/libs/types';

type Snippet = {
  tag: string;
  snippets: Post[];
};

export const getStaticProps: GetStaticProps = () => {
  const snippets = getAllSnippets();

  const tagSnippets = snippets.reduce<{ [key: string]: Post[] }>((ac, snippet) => {
    const key = snippet.snippetSlug;
    if (!key) return ac;

    if (!ac[key]) {
      ac[key] = [];
    }

    ac[key].push(snippet);
    return ac;
  }, {});

  const snippetList = Object.keys(tagSnippets)
    .map<Snippet>((tag) => ({
      tag,
      snippets: tagSnippets[tag],
    }))
    .sort((a, b) => b.snippets.length - a.snippets.length);

  return {
    props: { snippetList },
  };
};

export default function Snippets({ snippetList }: { snippetList: Snippet[] }) {
  return (
    <Layout>
      <PageSEO title="Snippets" description="" url="/snippets" />
      <Title>Code Snippets</Title>
      <PlainText>
        개발하면서 실제 사용되었던 코드조각들을 기록했습니다.
        <br />
        간단한 JS 유틸 함수, CSS 꼼수에서부터 프레임워크 사용 꿀팁까지 정리되어 있습니다 🍯
      </PlainText>

      <div className="mt-8 space-y-16">
        {snippetList.map(({ tag, snippets }) => (
          <div key={tag}>
            <p className="text-xl font-bold">{title(tag)}</p>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              {snippets.slice(0, 6).map((snippet) => (
                <div key={snippet.slug} className="">
                  <SnippetListItem post={snippet} />
                </div>
              ))}
            </ul>
            <span></span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
