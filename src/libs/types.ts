import { Post as TPost } from 'contentlayer/generated';

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

/**
 * 글 (posts + snippets)
 */
export type Post = TPost & {
  seriesName?: string | null;
  snippetName?: string | null;
};
export type ReducedPost = Omit<Omit<Omit<Post, 'body'>, '_raw'>, '_id'>;

/**
 * 시리즈북
 */
export type Series = Post & {
  posts: ReducedPost[];
};

/**
 * 목차 타입
 */
export type TableOfContents = Section[];
export type SubSection = {
  slug: string;
  text: string;
};
export type Section = SubSection & {
  subSections: SubSection[];
};
