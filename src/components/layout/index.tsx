import * as React from 'react';

import styled from '@emotion/styled';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import Footer from '../Footer';
import Header from '../Header';
import { TABLET_SCREEN_OFFSET } from 'src/styles/layout';

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </>
  );
};

export const BlogLayout = ({ aside, children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledBlogLayout>
        <div className="content">
          <div className="title"></div>
          <div className="date"></div>
          <div className="post_des_wrapper"></div>
        </div>
        <div className="aside">aside</div>
      </StyledBlogLayout>
      <Footer />
    </>
  );
};

//필요한 레이아웃은 몇개인가요?
//Route
/*
 * /
 * /fornt
 * /ContentsLayout
 */

const StyledLayout = styled.main`
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    width: 100vw;
  }
`;

const StyledBlogLayout = styled.main`
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
  display: flex;
  justify-content: center;
  padding-top: 80px;
  .content {
    font-size: 16px;
    line-height: 1.8;
    width: 720px;
    border: 1px solid #ff3e88;
  }
  .aside {
  }
`;
