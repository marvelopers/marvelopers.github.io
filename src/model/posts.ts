import { Category } from "./category";

export type Post = {
  title: string;
  category: Category;
  date: string;
  slug: string;
};
