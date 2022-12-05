import { GetStaticProps } from 'next';
import title from 'title';

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
    snippet.tags.forEach((tag) => {
      if (!ac[tag]) {
        ac[tag] = [];
      }

      ac[tag].push(snippet);
    });
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

      <div className="mt-8">
        {snippetList.map(({ tag, snippets }) => (
          <div key={tag}>
            <p className="text-xl font-bold">{title(tag)}</p>
            <ul className="mt-4 grid grid-cols-2">
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
