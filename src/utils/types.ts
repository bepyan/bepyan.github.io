export type GrayMatter = {
  title: string;
  description: string;
  tags: string[];
  published: boolean;
  createdDate: string;
  updatedDate: string;
};

export type Post = GrayMatter & {
  slug: string;
  content: string;
  readingTime: string;
  wordCount: number;
};
