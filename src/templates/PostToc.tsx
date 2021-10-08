import React, { useEffect } from "react"
import styled from "@emotion/styled"
import ScrollSpy from "./scroll-spy"
import { Link } from "gatsby"

interface P {
  tableOfContents: string
}

const PostToc: React.FC<P> = ({ tableOfContents }) => {
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

  .goToMain {
    margin-top: 40px;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    a {
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      color: #4a154b;
    }
  }
`

const StyledToc = styled.div`
  ul {
    width: 240px;
  }
  li {
  }
  a {
    border-top: 1px solid #e8e8e8;
    display: block;
    padding: 14px 0px;
    text-decoration: none;
    letter-spacing: -0.1px;
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
