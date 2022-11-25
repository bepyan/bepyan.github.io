export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

/**
 * 글 관련 타입
 */
export type GrayMatter = {
  title: string;
  description: string;
  tags: string[];
  draft?: boolean;
  date: Date;
};

export type Post = Omit<GrayMatter, 'date'> & {
  date: string;
  slug: string;
  content: string;
  readingMinutes: number;
  wordCount: number;
};

export type Serize = Omit<GrayMatter, 'date'> & {
  date: string;
  slug: string;
  readingMinutes: number;
  posts: Omit<Post, 'content'>[];
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
