import { writeFileSync } from 'fs';

import {
  getAllPosts,
  getAllSerizes,
  getAllSnippets,
  getTagsByPosts,
  reducePost,
  sortPostByTimeDesc,
} from '../src/libs/post';

const generateContentDataset = () => {
  const posts = getAllPosts().map(reducePost).sort(sortPostByTimeDesc);
  const snippets = getAllSnippets().map(reducePost).sort(sortPostByTimeDesc);
  const serizes = getAllSerizes();
  const tags = getTagsByPosts([...posts, ...snippets]);

  const data = {
    posts,
    snippets,
    serizes,
    tags,
  };

  writeFileSync('public/dataset.json', JSON.stringify(data), 'utf-8');
};

(() => {
  generateContentDataset();
})();
