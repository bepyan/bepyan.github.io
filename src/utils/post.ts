import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { GrayMatter, Post } from './types';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

/**
 *
 */
const postPaths = sync(`${POSTS_PATH}/**/!(snippets)/!(index).mdx`);
console.log(postPaths);

export const posts = postPaths
  .reduce<Post[]>((ac, filePath) => {
    const file = fs.readFileSync(filePath, { encoding: 'utf8' });
    const { content, data } = matter(file);
    const grayMatter = data as GrayMatter;

    const slug = filePath
      .slice(filePath.indexOf(BASE_PATH) + BASE_PATH.length + 1)
      .replace('.mdx', '');

    const post: Post = {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY-MM-DD (ddd)'),
      content,
      slug,
      readingTime: readingTime(content).text,
      wordCount: content.split(/\s+/gu).length,
    };

    return [...ac, post];
  }, [])
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

/**
 *
 */
const notebookPaths = sync(`${POSTS_PATH}/**/!(snippets)/index.mdx`);
console.log(notebookPaths);

/**
 *
 */
const snippetsPaths = sync(`${POSTS_PATH}/**/snippets/*.mdx`);
console.log(snippetsPaths);
