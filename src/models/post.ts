import { Nav } from './../constants/layout';

export type Frontmatter = {
  title: string;
  date: string;
  tags?: string[];
  category: Nav;
};

export type Fields = {
  slug: string;
  date: string;
};

export type Node = {
  id: number;
  fields: Fields;
  frontmatter: Frontmatter;
  body: string;
};
