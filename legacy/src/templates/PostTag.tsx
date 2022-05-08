import React from 'react';
import styled from '@emotion/styled';

const PostTag = ({ tags }) => {
  return (
    <StyledTag>
      {tags.map((tag) => {
        return (
          <div key={tag}>
            <button link to={`/tags/#${tag}`}>
              #{tag}
            </button>
          </div>
        );
      })}
    </StyledTag>
  );
};

export default PostTag;

const StyledTag = styled.div`
  margin: 20px 0px;
  div {
    display: inline;
  }
  button {
    margin-right: 8px;
    font-weight: 600;
    font-size: 14px;
    color: #4a154b;
  }
`;
