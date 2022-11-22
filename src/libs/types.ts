export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;

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
  posts: Post[];
};

export type SubSection = {
  slug: string;
  text: string;
};
export type Section = SubSection & {
  subSections: SubSection[];
};
export type TableOfContents = Section[];
