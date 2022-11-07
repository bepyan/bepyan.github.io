import fs from 'fs';
import { sync } from 'glob';
import path from 'path';

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // md(x) files
  .filter((filePath) => /\$.mdx?$/.test(filePath));

export const readPost = (filePath: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filePath));
};

export const getAllPosts = () => {
  const files = sync(`${POSTS_PATH}/**/*.md*`);

  console.log(files);

  return files;
};
