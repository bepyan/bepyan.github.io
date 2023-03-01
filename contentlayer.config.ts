import { defineDocumentType, FieldDefs, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import rehypeCodeWrap from './src/libs/rehypeCodeWrap';

const fields: FieldDefs = {
  title: { type: 'string', required: true },
  description: { type: 'string', required: true },
  date: { type: 'date', required: true },
  tags: { type: 'list', required: true, of: { type: 'string' } },
  draft: { type: 'boolean' },
  image: { type: 'string' },
  icon: { type: 'string' },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields,
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    readingMinutes: {
      type: 'string',
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
    wordCount: {
      type: 'number',
      resolve: (post) => post.body.raw.split(/\s+/gu).length,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeWrap,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'anchor',
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
  },
});
