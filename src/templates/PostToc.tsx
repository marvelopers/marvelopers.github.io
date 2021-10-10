import React, { useEffect } from "react"
import styled from "@emotion/styled"
import ScrollSpy from "./scroll-spy"
import { Link } from "gatsby"
import { SPACE_40 } from "../styles/space"
import { PURPLE } from "../styles/colors"

interface PostTocProps {
  tableOfContents: string
}

const PostToc = ({ tableOfContents }: PostTocProps) => {
  useEffect(() => {
    const post = document.querySelector("#post-content")

    const headings = Array.from(
      post.querySelectorAll("h1,h2,h3,h4,h5,h6")
    ).filter((h: HTMLElement) => h.id)

    const toc = document.querySelector("#post-toc")
    new ScrollSpy(toc as HTMLElement, headings as HTMLElement[])
  }, [])
  return (
    <StyledAside>
      <StyledToc
        id="post-toc"
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
      />
      <button className="goToMain">
        <Link to={"/"}>메인으로 돌아가기</Link>
      </button>
    </StyledAside>
  )
}

export default PostToc

const StyledAside = styled.div`
  position: sticky;
  top: 60px;
  margin-top: ${SPACE_40};
  margin-left: 20px;

  .goToMain {
    margin-top: 40px;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background: rgb(243, 243, 243);
    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      color: ${PURPLE};
    }
  }
`

const StyledToc = styled.div`
  ul {
    width: 240px;
  }
  li {
    list-style: none;
  }
  a {
    border-top: 1px solid #e8e8e8;
    display: block;
    padding: 14px 0px;
    text-decoration: none;
    line-height: 1rem;
    font-size: 14px;
    color: #494949;
    transition: all 1s ease-in;

    &.active {
      font-weight: 700;
      color: #2b092b;
    }
  }
`
