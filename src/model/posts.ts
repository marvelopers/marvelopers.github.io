import { Category } from "./category";

export type Post = {
  title: string;
  category: Category;
  date: string;
  slug: string;
};

export type BlogPost = {
  frontMeta: { title: string; date: string };
  content: string;
};
