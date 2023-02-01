import { AnimatePresence, motion } from 'framer-motion';
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
import { fadeInHalf, staggerHalf, staggerImmediate } from '~/constants/animations';
import { snippets } from '~/constants/dataset';
import { ReducedPost } from '~/libs/types';

type Snippet = {
  key: string;
  postList: ReducedPost[];
};

export const getStaticProps: GetStaticProps = () => {
  const tagSnippets = snippets.reduce<{ [key: string]: ReducedPost[] }>((ac, snippet) => {
    const key = snippet.snippetSlug;
    if (!key) {
      return ac;
    }

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

  const filteredSnippetList = snippetList.filter((snippet) => {
    if (isAll) return true;

    return snippet.key === selectedKey;
  });

  return (
    <Layout>
      <PageSEO
        title="Snippets"
        description="개발하면서 실제 사용되었던 코드 조각들 입니다. 간단한 JavaScript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다 🍯"
        url="/snippets"
      />

      <Title>Code Snippets</Title>

      <motion.div variants={staggerHalf} initial="initial" animate="animate" exit="exit">
        <motion.div variants={fadeInHalf}>
          <PlainText>
            개발하면서 실제 사용되었던 코드 조각들 입니다.
            <br />
            간단한 JavaScript 유틸 함수, CSS 꼼수에서부터 Framework 사용 꿀팁까지 정리되어 있습니다
            🍯
          </PlainText>
        </motion.div>

        <motion.div
          className="bg-primary sticky top-0 z-10 -mx-2 flex items-center gap-2 overflow-scroll bg-opacity-70 px-2 py-4 backdrop-blur transition-all no-scrollbar dark:bg-opacity-70"
          variants={staggerImmediate}
        >
          <motion.div variants={fadeInHalf}>
            <Link href="?key=all">
              <Pill selected={isAll} className="cursor-pointer whitespace-nowrap">
                All <span className="text-xs">{allSnippetsCnt}</span>
              </Pill>
            </Link>
          </motion.div>
          {snippetList.map(({ key, postList }) => (
            <motion.div key={key} variants={fadeInHalf}>
              <Link href={`?key=${key}`}>
                <Pill className="cursor-pointer whitespace-nowrap" selected={key === selectedKey}>
                  {title(key)} <span className="text-xs">{postList.length}</span>
                </Pill>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 space-y-16">
          {filteredSnippetList.map(({ key, postList }) => {
            return (
              <motion.ul
                key={key}
                className="mt-4 grid grid-cols-2 gap-4"
                variants={staggerImmediate}
              >
                <AnimatePresence mode="wait">
                  {postList.map((post) => (
                    <motion.li key={post.slug} variants={fadeInHalf}>
                      <SnippetListItem post={post} />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            );
          })}
        </div>
      </motion.div>
    </Layout>
  );
}
