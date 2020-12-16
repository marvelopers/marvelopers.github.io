import React from 'react';
import styled from "styled-components";

const PostToc = ({ tableOfContents }) => {

  useEffect(() => {
    effect

    const post = document.querySelector('#post-content')
    const heading = Array.from(
      post.querySelectorAll("h1,h2,h3,h4,h5,h6")
    ).filter((h) => h.id)
    const toc = document.querySelector("post-toc")
  }, [])

  return (
    <StyledToc
      id="post-toc"
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  )
}

export default PostToc

const StyledToc = styled.div`
  ul{
    border: 1px solid #292929;
  }
  li{
    border: 1px solid #494949;
    margin-bottom: 4px;
    font-size: 12px;
  }
  a{
    font-size: 14px;
  }
`;