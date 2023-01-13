import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import IconText from '~/components/common/IconText';
import LinkArrow from '~/components/common/LinkArrow';
import LinkExternalBold from '~/components/common/LinkExternalBold';
import PlainText from '~/components/common/PlainText';
import SubTitle from '~/components/common/SubTitle';
import Title from '~/components/common/Title';
import CalanderIcon from '~/components/icons/CalanderIcon';
import Layout from '~/components/layouts/Layout';
import { PageSEO } from '~/components/SEO';
import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerHalf,
} from '~/constants/animations';
import { getRandomUnsplashImageList } from '~/constants/images';
import { useMediaQuery } from '~/libs/useMediaQuery';

export default function Home() {
  const featureImages = getRandomUnsplashImageList(4);

  const isMobile = useMediaQuery(640);

  return (
    <Layout>
      <PageSEO title="Home" />

      <motion.section
        variants={staggerHalf}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: 0.6, once: true }}
      >
        <Title>bepyan</Title>

        <motion.div variants={defaultFadeInVariants} className="mb-4">
          Frontend Developer at{' '}
          <LinkExternalBold href="https://www.kakaocorp.com/">Kakao</LinkExternalBold>, developing{' '}
          <LinkExternalBold href="https://brunch.co.kr/">Brunch</LinkExternalBold>.
        </motion.div>

        <motion.div variants={defaultFadeInVariants}>
          <PlainText>
            Motivated to help people around me using React / Next.js, Typescript, Tailwind CSS.
          </PlainText>
        </motion.div>

        <motion.div variants={defaultFadeInVariants}>
          <LinkArrow
            href="https://bepyan.notion.site/Frontend-Developer-69fd245161734c1793e8df78dffe705c"
            target="_blank"
          >
            More about me
          </LinkArrow>
        </motion.div>
      </motion.section>

      <motion.section
        variants={staggerHalf}
        initial="initial"
        whileInView="animate"
        exit="exit"
        viewport={{ amount: isMobile ? 0.2 : 0.6, once: true }}
        className="mt-16"
      >
        <motion.div variants={defaultFadeInVariants}>
          <SubTitle className="mb-6">Featured Posts</SubTitle>
        </motion.div>

        <motion.div variants={staggerHalf} className="grid gap-6 md:grid-cols-4">
          <PostItem
            href="/blog/retrospect/2021-pass-kakao"
            imgUrl={featureImages[0]}
            title="Drag 이벤트 뽀개기"
            date="2022.10.01"
          />
          <PostItem
            href="/blog/2022/css-in-js"
            imgUrl={featureImages[1]}
            title="CSS-in-JS 라이브러리들에 대한 고찰"
            date="2022.02.11"
          />
          <PostItem
            href="/blog/retrospect/2021-pass-kakao"
            imgUrl={featureImages[2]}
            title="2022 카카오 블라인드 공채 합격 후기"
            date="2021.12.20"
          />
          <PostItem
            href="/blog/retrospect/2021-in-startup"
            imgUrl={featureImages[3]}
            title="5개월간 스타트업에서 굴렀다. 그리고 얻었다."
            date="2021.12.14"
          />
        </motion.div>

        <motion.div variants={defaultFadeInVariants}>
          <LinkArrow href="/blog" className="mt-8">
            Read all posts
          </LinkArrow>
        </motion.div>
      </motion.section>
    </Layout>
  );
}

const PostItem = (props: { href: string; imgUrl: string; title: string; date: string }) => {
  return (
    <motion.a
      href={props.href}
      className="overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800"
      variants={defaultFadeInUpVariants}
      whileHover={{ scale: 1.02, transformOrigin: 'center' }}
      whileTap={{ scale: 0.98 }}
    >
      <div>
        <Image
          src={props.imgUrl}
          alt={props.title}
          width={300}
          height={300}
          placeholder="blur"
          className="h-64 w-full object-cover"
          draggable={false}
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex w-full items-end">
          <IconText Icon={CalanderIcon} text={props.date} />
        </div>
        <h4 className="text-xl font-bold tracking-tight md:text-lg">{props.title}</h4>
      </div>
    </motion.a>
  );
};
