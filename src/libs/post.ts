import { allPosts } from 'contentlayer/generated';

import { Post, ReducedPost, Series } from './types';

export const contentToDescription = (content: string) => {
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
 * 글 & 시리즈북
 */
export const allSeriesName = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('/index.mdx'))
  .map((post) => post.slug.split('/')[2]);

export const allBlogPosts: Post[] = allPosts
  .filter(
    (post) =>
      post._raw.sourceFilePath.includes('blog') && !post._raw.sourceFilePath.includes('/index.mdx'),
  )
  .map((post) => ({
    ...post,
    seriesName: allSeriesName.find((seriesName) => post.slug.includes(seriesName)) ?? null,
  }));

export const allSnippets: Post[] = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('snippets'))
  .map((snippet) => ({ ...snippet, snippetName: snippet.slug.split('/').at(2) ?? null }));

export const allSeries: Series[] = allBlogPosts
  .filter((post) => Boolean(post.seriesName))
  .map((series) => ({
    ...series,
    posts: allBlogPosts.filter((post) => series.slug.includes(post.seriesName ?? 'none')),
  }));

export const getTagsByPosts = (posts: ReducedPost[]) => {
  return Array.from(
    posts.reduce((ac, v) => {
      v.tags.forEach((tag) => ac.add(tag));
      return ac;
    }, new Set<string>([])),
  );
};

/**
 * Util
 */
export const reducePost = ({ body: _, ...post }: Post): ReducedPost => post;

export const sortPostByTimeDesc = (a: Post, b: Post) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};
