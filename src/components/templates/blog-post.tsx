import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Frontmatter } from '../../models/post';

import Header from '../../components/layout/Header';
import GlobalStyle from '../../styles/GlobalStyle';
import BlogArticle from '../../components/BlogArticle';

export type Site = {
  siteMetadata: {
    title: string;
    siteUrl: string;
  };
};

export type Mdx = {
  id: number;
  body: string;
  frontmatter: Frontmatter;
  tableOfContents: any;
  html: string;
};

type DataProps = {
  site: Site;
  mdx: Mdx;
};

const Template = ({ data }: PageProps<DataProps>) => {
  console.log('data', data);
  return (
    <>
      <GlobalStyle />
      <Header />
      <BlogArticle data={data} />
    </>
  );
};

export default Template;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String = "") {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      html
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        tags
      }
      fields {
        slug
        date
      }
      tableOfContents
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
