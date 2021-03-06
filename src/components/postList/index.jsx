import React from 'react';
import styled from "styled-components";
import Thumbnail from '../thumbnail';
import { Widths } from '../../styles/styleVariables';

// slug, title
const PostList = ({ posts }) => {
  // console.log("---->posts", posts);

  return (
    <StyleUl>
      {posts && posts.map(({ title, slug, meta, category, tags }) => {
        return (
          <Thumbnail
            title={title}
            category={category}
            slug={slug}
            meta={meta}
            tags={tags}
          />)
      })}
    </StyleUl>
  )
}

export default PostList;

const StyleUl = styled.ul`
  /* width: 290px;
  height: 270px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 5px 12px;
  margin: 15px 10px; */
  display: flex;
  flex-wrap: wrap;
  .title{
    font-size: 18px;
  }
  .date{
    font-size: 14px;
  }
  @media (max-width: calc(${Widths.Tablet} - 1px)) {
    width: 100vw;
    height: 100%;
  }
`;