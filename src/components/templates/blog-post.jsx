import * as React from "react"
import { graphql } from 'gatsby'
import { GlobalStyle } from "../../styles/GlobalStyle"
import styled from "styled-components";
import Footer from "../footer/Footer"
import Header from "../header/Header"
import PostToc from "./PostToc";


export const BlogPostTemplate = ({ data, pageContext }) => {
  const { site, markdownRemark, series } = data
  const { previous, next } = pageContext
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledBlogLayout>
        <div className="content">
          <div className="title">{markdownRemark.frontmatter.title}</div>
          <div className="publishedDate">{markdownRemark.fields.dateStr}</div>
          {/* 아티클 */}
          <StyledPostContent
            id="post-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          />
          <Styled.PostMeta>
            {(markdownRemark.frontmatter.tags || []).length > 0 && (
              <PostTag tags={markdownRemark.frontmatter.tags} />
            )}
            {/* <PostShare
              markdownRemark={markdownRemark}
              siteMetadata={data.site.siteMetadata}
            /> */}
          </Styled.PostMeta>
        </div>
        <div className="aside">
          {markdownRemark.tableOfContents && (
            <PostToc tableOfContents={markdownRemark.tableOfContents} />)}
          {series && (
            <SeriesNav
              lite
              series={series}
              nodeId={markdownRemark.id}
              posts={data.allMarkdownRemark.nodes}
            />
          )}
        </div>
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

const StyledBlogLayout = styled.main`
  border: 1px solid #E8E8E8;
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
  display: flex;
  /* justify-content: space-between; */
  padding-top: 80px;
  .title{
    font-size: 34px;
  }
  .publishedDate{
    font-size: 14px;
    color: #494949;
  }
  .content{
    font-size: 16px;
    line-height: 1.8;
    width : 720px;
    border: 1px solid #FF3E88;
  }
  .aside{
    
  }
`;

const StyledPostContent = styled.div`
  font-size: 16px;
  line-height: 1.8;
  width : 720px;
  border: 1px solid #FF3E88;
  h1 {
    font-size: 200%;
    margin-top: 20px;
  }
  h2 {
    font-size: 180%;
    margin-top: 18px;
  }
  h3 {
    font-size: 160%;
    margin-top: 16px;
  }
  h4 {
    font-size: 140%;
    margin-top: 14px;
  }
  h5 {
    font-size: 120%;
    margin-top: 12px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${Colors.Brand};
    font-family: ${Fonts.Base};
    line-height: 1em;
  }
  img {
    border-radius: 5px;
    display: block;
    /* margin: ${SpaceUnit()} * 2 auto; */
    max-width: 100%;
  }
  blockquote {
    /* color: ${lighten(0.2, Colors.Black)}; */
    position: relative;
    &::before {
      content: "“";
      position: absolute;
      left: -${SpaceUnit(3)};
      font-size: 40px;
      /* color: ${lighten(0.6, Colors.Black)}; */
    }
  }
  .gatsby-highlight {
    pre {
      /* border-radius: ${SpaceUnit()} / 2; */
      overflow: auto;
      word-wrap: normal;
      white-space: pre;
    }
  }
`;
