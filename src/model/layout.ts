export const enum Nav {
  Front = 'front',
  Script = 'script',
  React = 'react',
  Marketing = 'marketing',
  Essay = 'essay',
}

export type FrontMeta = {
  title: string;
  date: string;
  category: Nav;
  tags: string[];
  slug: string;
};
