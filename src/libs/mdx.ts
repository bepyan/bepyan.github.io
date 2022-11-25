import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import { TableOfContents } from './types';

const parseToc = (source: string) => {
  return source
    .split('\n')
    .filter((line) => line.match(/(^#{1,3})\s/))
    .filter((line) => line.toLowerCase().match(/^(?!.*(#*\stoc$|#*\stable of contents$)).*$/g))
    .reduce<TableOfContents>((ac, rawHeading) => {
      const nac = [...ac];
      const section = {
        slug: rawHeading
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, ''),
        text: rawHeading.replace(/^##*\s/, ''),
      };

      const isSubTitle = rawHeading.split('#').length - 1 === 3;

      if (ac.length && isSubTitle) {
        nac.at(-1)?.subSections.push(section);
      } else {
        nac.push({ ...section, subSections: [] });
      }

      return nac;
    }, []);
};

const serializeMdx = (source: string) => {
  return serialize(source, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener noreferrer'],
          },
        ],
      ],
      format: 'mdx',
    },
  });
};

export const parseMdx = async (source: string) => {
  const tableOfContents = parseToc(source);
  const { compiledSource } = await serializeMdx(source);

  return {
    compiledSource,
    tableOfContents,
  };
};
