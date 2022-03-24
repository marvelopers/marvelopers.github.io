import React from 'react';
import Thumbnail from '../Thumbnail';
import { Mate } from '../../models/post';

type DataProps = {
  posts: Mate[];
};

// slug, title
const PostList = ({ posts }: DataProps) => {
  return (
    <ul>
      {posts.map(({ frontmatter }) => {
        return <Thumbnail key={frontmatter.title} frontmatter={frontmatter} />;
      })}
    </ul>
  );
};

export default PostList;
