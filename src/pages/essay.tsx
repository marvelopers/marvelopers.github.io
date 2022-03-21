import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownRemarkConnection, Query } from 'src/types/graphql-types';
import { Layout } from 'src/components/layout/Layout';
import PostList from 'src/components/PostList';
import SEO from 'src/components/SEO';

type Props = PageProps<Query>;

const EssayPage = ({ data }: Props) => {
  return (
    <>
      <Layout>
        <SEO title="essay" />
        <PostList posts={data.allMarkdownRemark as MarkdownRemarkConnection} />
      </Layout>
    </>
  );
};

export default EssayPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: fields___date }
      filter: { frontmatter: { category: { eq: "essay" } } }
    ) {
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
