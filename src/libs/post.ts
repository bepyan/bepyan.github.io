import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { GrayMatter, Post, Serize } from './types';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const pathToSlug = (filePath: string) =>
  filePath
    .slice(filePath.indexOf(BASE_PATH) + BASE_PATH.length + 1)
    .replace('.mdx', '')
    .replace('/index', '');

/**
 *
 */
export const getAllPosts = (subPath = '') => {
  const postPaths = sync(`${POSTS_PATH}/**/!(snippets)${subPath}/!(index).mdx`);

  return postPaths
    .reduce<Post[]>((ac, filePath) => {
      const file = fs.readFileSync(filePath, { encoding: 'utf8' });
      const { content, data } = matter(file);
      const grayMatter = data as GrayMatter;

      if (grayMatter.draft) {
        return ac;
      }

      const post: Post = {
        ...grayMatter,
        tags: grayMatter.tags.filter(Boolean),
        date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
        content,
        slug: pathToSlug(filePath),
        readingMinutes: Math.ceil(readingTime(content).minutes),
        wordCount: content.split(/\s+/gu).length,
      };

      return [...ac, post];
    }, [])
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

/**
 *
 */
export const getAllSerizes = () => {
  const serizePaths = sync(`${POSTS_PATH}/**/!(snippets)/index.mdx`);

  return serizePaths
    .reduce<Serize[]>((ac, serizePath) => {
      const file = fs.readFileSync(serizePath, { encoding: 'utf8' });
      const { data } = matter(file);
      const grayMatter = data as GrayMatter;

      const slug = pathToSlug(serizePath);
      const posts = getAllPosts(slug).sort((a, b) => (a.slug > b.slug ? 1 : -1));

      const serize: Serize = {
        ...grayMatter,
        tags: grayMatter.tags.filter(Boolean),
        date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
        posts,
        readingMinutes: posts.reduce((ac, post) => ac + post.readingMinutes, 0),
        slug,
      };

      return [...ac, serize];
    }, [])
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// /**
//  *
//  */
// const snippetsPaths = sync(`${POSTS_PATH}/**/snippets/*.mdx`);
// console.log(snippetsPaths);
