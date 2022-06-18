import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type Items = {
  [key: string]: string;
};

type FrontMeta = {
  title: string;
  date: string;
  category: string;
  tags: string;
};

const postsDirectory = join(process.cwd(), 'posts');

export const getPostSlugs = () => fs.readdirSync(postsDirectory);

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { tags, category } = data as FrontMeta;

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (field === 'category') {
      items[field] = category;
    }

    if (field === 'tags') {
      items[field] = tags;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs();
  console.log('SLUGS', slugs);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
