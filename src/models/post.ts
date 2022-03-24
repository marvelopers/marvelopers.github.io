import { Nav } from './../constants/layout';

export type Frontmatter = {
  title: string;
  date: string;
  category: Nav;
};

export type Node = {
  id: number;
  slug: string;
  frontmatter: Frontmatter;
  body: string;
};
