import React from 'react';
import Thumbnail from '../Thumbnail';
import { Node } from '../../models/post';

type DataProps = {
  posts: Node[];
};

// slug, title
const PostList = ({ posts }: DataProps) => {
  return (
    <ul>
      {posts.map(({ frontmatter, slug }) => {
        return <Thumbnail key={slug} slug={slug} frontmatter={frontmatter} />;
      })}
    </ul>
  );
};

export default PostList;
