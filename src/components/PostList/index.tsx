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
      {posts.map(({ frontmatter, fields }) => {
        return (
          <Thumbnail
            key={fields.slug}
            slug={fields.slug}
            frontmatter={frontmatter}
          />
        );
      })}
    </ul>
  );
};

export default PostList;
