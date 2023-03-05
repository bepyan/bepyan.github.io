import { Post, ReducedPost } from './types';

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

export const getTagsByPosts = (posts: ReducedPost[]) => {
  return Array.from(
    posts.reduce((ac, v) => {
      v.tags.forEach((tag) => ac.add(tag));
      return ac;
    }, new Set<string>([])),
  );
};

export const reducePost = ({ body: _, _raw, _id, ...post }: Post): ReducedPost => post;

export const sortPostByTimeDesc = (a: Post, b: Post) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};
