export type GrayMatter = {
  title: string;
  description: string;
  tags: string[];
  published?: boolean;
  date: Date;
};

export type Post = Omit<GrayMatter, 'date'> & {
  date: string;
  slug: string;
  content: string;
  readingTime: string;
  wordCount: number;
};
