import { allPosts } from 'contentlayer/generated';

import { Post, Series } from '~/libs/types';

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

export const allSeries: Series[] = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('/index.mdx'))
  .map((series) => ({
    ...series,
    posts: allBlogPosts.filter((post) => series.slug.includes(post.seriesName ?? 'none')),
  }));

export const allTags = Array.from(
  [...allBlogPosts, ...allSnippets].reduce((ac, v) => {
    v.tags.forEach((tag) => ac.add(tag));
    return ac;
  }, new Set<string>([])),
).filter(Boolean);
