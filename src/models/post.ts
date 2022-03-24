import { Nav } from './../constants/layout';

export type Frontmatter = {
  title: string;
  date: string;
  category: Nav;
};

export type Mate = {
  id: number;
  frontmatter: Frontmatter;
  body: string;
};
