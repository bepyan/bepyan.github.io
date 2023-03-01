import { ReducedPost, Series } from '~/libs/types';

import dataset from '../../public/dataset.json';

export const posts: ReducedPost[] = dataset.posts;
export const serizes: Series[] = dataset.serizes;
export const snippets: ReducedPost[] = dataset.snippets;
export const tags = dataset.tags;
