import React from 'react';
import {
  MarkdownRemarkConnection,
  MarkdownRemark,
  MarkdownRemarkFrontmatter,
  MarkdownRemarkFields,
} from 'src/types/graphql-types';
import styled from '@emotion/styled';
import Thumbnail from '../Thumbnail';
import { TABLET_SCREEN_OFFSET } from 'src/styles/layout';
import { Nav } from '../layout/Header';

interface Props {
  posts: MarkdownRemarkConnection;
}

const PostList = ({ posts }: Props) => {
  if (!posts.nodes) return;
  return (
    <StyleUl>
      {posts.nodes &&
        posts.nodes.map(({ frontmatter, fields }: MarkdownRemark, index) => {
          return (
            <Thumbnail
              key={frontmatter?.title || index}
              frontmatter={frontmatter as MarkdownRemarkFrontmatter}
              fields={fields as MarkdownRemarkFields}
            />
          );
        })}
    </StyleUl>
  );
};

export default PostList;

const StyleUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  .title {
    font-size: 18px;
  }
  .date {
    font-size: 14px;
  }
  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    width: 100vw;
    height: 100%;
  }
`;
