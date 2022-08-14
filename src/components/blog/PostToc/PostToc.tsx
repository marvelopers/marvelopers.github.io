import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { GREY_2, GREY_5, PURPLE } from "styles/colors";
import Link from "next/link";
import { Button } from "src/components/common/button/Button";
// import ScrollSpy from './scroll-spy';
// import { Link } from 'gatsby';
// import { SPACE_40, SPACE_4 } from '../styles/space';
// import { PURPLE, GREY_2, GREY_5 } from '../styles/colors';
// import { FONT_SIZE_1 } from '../styles/size';
// import { Button } from '../components/common/button/button';

interface PostTocProps {
  tableOfContents: string;
}

const PostToc = ({ tableOfContents }: PostTocProps) => {
  useEffect(() => {
    const post = document.querySelector("#post-content");

    const headings = Array.from(
      post.querySelectorAll("h1,h2,h3,h4,h5,h6")
    ).filter((h: HTMLElement) => h.id);

    const toc = document.querySelector("#post-toc");
    new ScrollSpy(toc as HTMLElement, headings as HTMLElement[]);
  }, []);

  return (
    <StyledAside>
      <StyledToc
        id="post-toc"
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
      />
      <MainButton>
        <Link href={"/"}>메인으로 돌아가기</Link>
      </MainButton>
    </StyledAside>
  );
};

export default PostToc;

const MainButton = styled(Button)`
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
`;

const StyledAside = styled.div`
  position: sticky;
  top: 60px;
  margin-left: 20px;
`;

const StyledToc = styled.div`
  ul {
    border-top: 1px solid ${GREY_5};
    width: 240px;
  }
  li {
    list-style: none;
    border-bottom: 1px solid ${GREY_5};
  }
  a {
    display: block;
    padding: 14px 0px;
    text-decoration: none;
    letter-spacing: -0.025rem;
    color: ${GREY_2};
    transition: all 1s ease-in;

    &.active {
      font-weight: 700;
      color: #2b092b;
    }
  }
`;
