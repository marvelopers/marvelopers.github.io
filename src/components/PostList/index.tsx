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
      {posts.map(({ id, frontmatter, fields }) => (
        <Thumbnail
          key={fields.slug}
          id={id}
          slug={fields.slug}
          frontmatter={frontmatter}
        />
      ))}
    </ul>
  );
};

export default PostList;
