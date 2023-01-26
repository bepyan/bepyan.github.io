import { ReducedPost, Serize } from '~/libs/types';

import dataset from '../../public/dataset.json';

export const posts: ReducedPost[] = dataset.posts;
export const serizes: Serize[] = dataset.serizes;
export const snippets: ReducedPost[] = dataset.snippets;
export const tags = dataset.tags;
