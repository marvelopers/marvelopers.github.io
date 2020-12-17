import React, { useEffect } from 'react';
import styled from "styled-components";

const PostToc = ({ tableOfContents }) => {

  useEffect(() => {
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
    width: 240px;
  }
  li{
  }
  a{
    border-top: 1px solid #E8E8E8;
    display: block;
    padding: 14px 0px;
    text-decoration: none;
    letter-spacing: -0.1px;
    line-height: 1rem;
    font-size: 14px;
    color: #494949;
  }

`;