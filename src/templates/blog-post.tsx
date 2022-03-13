import * as React from 'react';
import { graphql } from 'gatsby';
import {
  MarkdownRemarkEdge,
  BlogPostBySlugQuery,
} from 'src/types/graphql-types';
import { GlobalStyle } from '../styles/GlobalStyle';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import BlogArticle from 'src/components/BlogArticle';
import SEO from 'src/components/SEO';

interface Props<T> {
  data: T;
  pageContext: MarkdownRemarkEdge;
}

const BlogPostTemplate = <T extends BlogPostBySlugQuery>({
  data,
}: Props<T>) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SEO data={data} />
      <BlogArticle data={data} />
      <Footer />
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        dateStr: date(formatString: "YYYY.MM.DD")
        date
        slug
      }
      frontmatter {
        title
        tags
      }
      tableOfContents(absolute: false, maxDepth: 6, heading: null)
    }
  }
`;
