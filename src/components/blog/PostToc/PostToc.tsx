import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { GREY_2, GREY_5, PURPLE } from 'styles/colors';
import Link from 'next/link';
import { Button } from 'src/components/common/button/Button';
import { useRouter } from 'next/router';
import ScrollSpy from 'src/utils/scrollSpy';

export const PostToc = () => {
  const [headings, setHeadings] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const post = document.querySelector('#post-content');
    const heading = post && (Array.from(post.querySelectorAll('h1,h2,h3,h4,h5,h6')).map((h) => h) as HTMLElement[]);
    const toc = document.querySelector('#post-toc');

    heading && setHeadings(heading);
    new ScrollSpy(toc as HTMLElement, heading as HTMLElement[]);
  }, []);

  return (
    <StyledAside>
      <StyledToc id="post-toc">
        <ul>
          {headings.map((h) => (
            <li key={h.innerHTML}>
              <Link href={`${useRouter().basePath}#${h.innerHTML}`}>{h.innerHTML}</Link>
            </li>
          ))}
        </ul>
      </StyledToc>
      <MainButton>
        <Link href={'/'}>메인으로 돌아가기</Link>
      </MainButton>
    </StyledAside>
  );
};


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
