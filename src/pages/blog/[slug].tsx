import { GetStaticPaths, GetStaticProps } from 'next';

import IconText from '~/components/common/IconText';
import PostListItem from '~/components/common/PostListItem';
import ClockIcon from '~/components/icons/ClockIcon';
import ListIcon from '~/components/icons/ListIcon';
import Layout from '~/components/Layout';
import { getAllSerizes } from '~/utils/post';
import { Serize } from '~/utils/types';

export const getStaticPaths: GetStaticPaths = () => {
  const serizes = getAllSerizes();

  return {
    paths: serizes.map((serize) => `/blog/${serize.slug}`),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as { slug: string };

  const serize = getAllSerizes().find((v) => v.slug === slug);

  if (!serize) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serize,
    },
  };
};

export default function PostPage({ serize }: { serize: Serize }) {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-32">
        <div className="col-span-1">
          <div className="h-[336px] w-[240px] select-none rounded-lg bg-gray-200 px-11 pb-16 pt-12 dark:bg-gray-800">
            <div className="flex h-full break-keep bg-white px-3 py-4 text-xl font-semibold dark:bg-gray-700 dark:text-white">
              {serize.title}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="rounded-lg bg-gray-150 px-5 py-4 dark:bg-gray-800">
            <p>{serize.description}</p>
            <div className="mt-1 flex gap-2 text-gray-600 dark:text-gray-400">
              <IconText Icon={ListIcon} text={`${serize.posts.length}편`} />
              <IconText Icon={ClockIcon} text={`${serize.readingMinutes}분`} />
            </div>
          </div>

          <ul className="mt-4 space-y-4">
            {serize.posts.map((post, i) => (
              <div key={post.slug} className="flex space-x-6">
                <div className="pt-4 font-bold">{i + 1}.</div>
                <PostListItem post={post} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
