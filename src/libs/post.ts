import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

import { GrayMatter, Post, ReducedPost, Serize } from './types';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const pathToSlug = (filePath: string) =>
  filePath
    .slice(filePath.indexOf(BASE_PATH) + BASE_PATH.length + 1)
    .replace('.mdx', '')
    .replace('/index', '');

const getDescription = (description: string, content: string) => {
  if (description.length) return description;

  const parsedContent = content
    .replace(/(?<=\])\((.*?)\)/g, '')
    .replace(/(?<!\S)((http)(s?):\/\/|www\.).+?(?=\s)/g, '')
    .replace(/[#*\|\[\]]|(\-{3,})|(`{3})(\S*)(?=\s)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 130);
  return `${parsedContent}...`;
};

/**
 * 글
 */
const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = fs.readFileSync(postPath, { encoding: 'utf8' });
    const { content, data } = matter(file);
    const grayMatter = data as GrayMatter;
    grayMatter.description = getDescription(grayMatter.description, content);

    if (grayMatter.draft) {
      return;
    }

    const post: Post = {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
      content,
      slug: pathToSlug(postPath),
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    };

    const [fristSlug, middleSlug] = post.slug.split('/');

    const isSnippet = fristSlug === 'snippets';
    const isSerizePost = sync(`${POSTS_PATH}/${fristSlug}/index.mdx`).length > 0;

    if (isSerizePost) {
      post.serizeSlug = fristSlug;
    }

    if (isSnippet) {
      post.snippetSlug = middleSlug;
      post.slug = `/${post.slug}`;
    } else {
      post.slug = `/blog/${post.slug}`;
    }

    return post;
  } catch (e) {
    console.error(e);
    return;
  }
};

export const getAllPosts = (subPath = '') => {
  const postPaths = sync(`${POSTS_PATH}/!(snippets)${subPath}/!(index).mdx`);

  return postPaths.reduce<Post[]>((ac, filePath) => {
    const post = parsePost(filePath);
    if (!post) return ac;

    return [...ac, post];
  }, []);
};

export const getPost = (slug: string) => {
  return parsePost(`${POSTS_PATH}${slug.replace(/\/blog/g, '')}.mdx`);
};

export const getTagsByPosts = (posts: ReducedPost[]) => {
  return Array.from(
    posts.reduce((ac, v) => {
      v.tags.forEach((tag) => ac.add(tag));
      return ac;
    }, new Set<string>([])),
  );
};

/**
 * 시리즈
 */
const parseSerize = (serizePath: string): Serize | undefined => {
  try {
    const file = fs.readFileSync(serizePath, { encoding: 'utf8' });
    const { data } = matter(file);
    const grayMatter = data as GrayMatter;

    const slug = pathToSlug(serizePath);
    const posts = getAllPosts(slug)
      .map(reducePost)
      .sort((a, b) => (a.slug > b.slug ? 1 : -1));

    return {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
      posts,
      readingMinutes: posts.reduce((ac, post) => ac + post.readingMinutes, 0),
      slug: `/blog/${slug}`,
    };
  } catch (e) {
    console.error(e);
  }
};

export const getAllSerizes = () => {
  const serizePaths = sync(`${POSTS_PATH}/**/!(snippets)/index.mdx`);

  return serizePaths
    .reduce<Serize[]>((ac, serizePath) => {
      const serize = parseSerize(serizePath);
      if (!serize) return ac;

      return [...ac, serize];
    }, [])
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getSerizeBySlug = (slug: string) => {
  const commonSlug = slug.split('/').slice(0, -1).slice(2).join('/');
  const serizePath = `.${BASE_PATH}/${commonSlug}/index.mdx`;

  if (!fs.existsSync(`${serizePath}`)) return undefined;

  return parseSerize(serizePath);
};

/**
 * Snippets
 */
export const getAllSnippets = () => {
  const snippetsPaths = sync(`${POSTS_PATH}/**/snippets/**/*.mdx`);

  return snippetsPaths.reduce<Post[]>((ac, filePath) => {
    const post = parsePost(filePath);
    if (!post) return ac;

    return [...ac, post];
  }, []);
};

/**
 * Util
 */
export const reducePost = ({ content: _, ...post }: Post): ReducedPost => post;

export const sortPostByTimeDesc = (a: ReducedPost, b: ReducedPost) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};
