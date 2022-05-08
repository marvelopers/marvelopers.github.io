import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from 'src/components/layout/Layout';
import PostList from 'src/components/PostList';
import SEO from 'src/components/SEO';

const IndexPage = ({ data }: any) => {
  return (
    <>
      <Layout>
        <SEO title="홈" />
        <PostList
          posts={data.allMarkdownRemark.nodes.map((node: any) => ({
            slug: node.fields.slug,
            title: node.frontmatter.title,
            category: node.frontmatter.category,
            tags: node.frontmatter.tags,
            meta: node.fields.date,
            // meta: (
            //   <time dateTime={node.fields.date}>{node.fields.dateStr}</time>
            // ),
            excerpt: node.excerpt,
          }))}
        />
      </Layout>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: fields___date }) {
      nodes {
        excerpt(pruneLength: 20, format: PLAIN, truncate: true)
        fields {
          slug
          date(formatString: "YYYY.MM.DD")
        }
        frontmatter {
          title
          category
          tags
        }
      }
    }
  }
`;
