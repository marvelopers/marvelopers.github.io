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
  slug: string;
};

type DataProps = {
  data: {
    site: Site;
    mdx: Mdx;
  };
};

export const Template = ({ data }: DataProps) => {
  console.log('data', data);
  return (
    <>
      <GlobalStyle />
      <Header />
      <BlogArticle data={data} />
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String = null) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(slug: { eq: $slug }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
      tableOfContents(maxDepth: 10)
      slug
    }
  }
`;
