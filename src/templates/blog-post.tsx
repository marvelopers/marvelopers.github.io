import * as React from 'react';
import { graphql } from 'gatsby';
import { GlobalStyle } from '../styles/GlobalStyle';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';
import BlogArticle from '../components/BlogArticle';

const BlogPostTemplate = ({ data, pageContext }) => {
  const { site, markdownRemark, series } = data;
  const { previous, next } = pageContext;
  return (
    <>
      <GlobalStyle />
      <Header />
      <SEO
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.excerpt}
        date={markdownRemark.fields.date}
        siteUrl={site.siteMetadata.siteUrl + markdownRemark.fields.slug}
        image={
          markdownRemark.frontmatter.featured_image ||
          markdownRemark.frontmatter.featuredImage?.childImageSharp.fluid.src
        }
      />
      <BlogArticle
        title={markdownRemark.frontmatter.title}
        dateStr={markdownRemark.fields.dateStr}
        html={markdownRemark.html}
        tags={markdownRemark.frontmatter.tags}
        tableOfContents={markdownRemark.tableOfContents}
      />
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
