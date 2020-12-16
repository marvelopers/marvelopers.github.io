import * as React from "react"
import { GlobalStyle } from "../../styles/GlobalStyle"
import styled from "styled-components";
import Footer from "../footer/Footer"
import Header from "../header/Header"


export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledLayout>
        {children}
      </StyledLayout>
      <Footer />
    </>
  )
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
  )
};


//필요한 레이아웃은 몇개인가요? 
//Route 
/*
* /
* /fornt
* /ContentsLayout
*/

const StyledLayout = styled.main`
  border: 1px solid #E8E8E8;
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
`;

const StyledBlogLayout = styled.main`
  border: 1px solid #E8E8E8;
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
  display: flex;
  /* justify-content: space-between; */
  padding-top: 80px;  
  .content{
    font-size: 16px;
    line-height: 1.8;
    width : 720px;
    border: 1px solid #FF3E88;
  }
  .aside{
    
  }
`;

