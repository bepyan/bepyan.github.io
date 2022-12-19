import { Transition } from '@headlessui/react';
import dayjs from 'dayjs';
import { GetStaticPaths, GetStaticProps } from 'next';

import IconText from '~/components/common/IconText';
import PostListItem from '~/components/common/PostListItem';
import CalanderIcon from '~/components/icons/CalanderIcon';
import ClockIcon from '~/components/icons/ClockIcon';
import ListIcon from '~/components/icons/ListIcon';
import Layout from '~/components/layouts/Layout';
import { getAllSerizes } from '~/libs/post';
import { Serize } from '~/libs/types';

export const getStaticPaths: GetStaticPaths = () => {
  const serizes = getAllSerizes();

  return {
    paths: serizes.map((serize) => serize.slug),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as { slug: string };

  const serizeSlug = `/blog/${slug}`;
  const serize = getAllSerizes().find((v) => v.slug === serizeSlug);

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
      <Transition appear={true} show={true}>
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-32">
          <div className="sm:sticky sm:top-8 sm:self-start">
            <div className="col-span-3 sm:col-span-1">
              <Transition.Child
                enter="transition-shadow duration-300"
                enterFrom="shadow-md"
                enterTo="shadow-lg"
                className="relative mx-auto h-[336px] w-[240px] select-none rounded-lg bg-gray-200 px-11 pb-16 pt-12 dark:bg-gray-800"
              >
                <div className="absolute inset-y-0 left-4 w-[1px] bg-gray-100 dark:bg-gray-700" />
                <div className="flex h-full break-keep bg-gray-50 px-3 py-4 text-xl font-semibold dark:bg-gray-700 dark:text-white">
                  {serize.title}
                </div>
              </Transition.Child>
            </div>
          </div>
          <div className="col-span-3 sm:col-span-2">
            <div className="rounded-lg bg-gray-150 px-5 py-4 dark:bg-gray-800">
              <p>{serize.description}</p>
              <div className="mt-1 flex gap-2 text-gray-600 dark:text-gray-400">
                <IconText Icon={CalanderIcon} text={dayjs(serize.date).format('YY.MM.DD')} />
                <IconText Icon={ListIcon} text={`${serize.posts.length}편`} />
                <IconText Icon={ClockIcon} text={`${serize.readingMinutes}분`} />
              </div>
            </div>
            <ul className="mt-4 space-y-4">
              {serize.posts.map((post, i) => (
                <Transition.Child
                  key={post.slug}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <div className="flex space-x-6">
                    <div className="pt-4 font-bold">{i + 1}.</div>
                    <PostListItem post={post} noBorder />
                  </div>
                </Transition.Child>
              ))}
            </ul>
          </div>
        </div>
      </Transition>
    </Layout>
  );
}
