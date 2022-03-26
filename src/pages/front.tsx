import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout/Layout';
import PostList from '../components/PostList';
import { Node } from '../models/post';

type DataProps = {
  allMdx: {
    nodes: Node[];
  };
};

const IndexPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout>
      <PostList posts={data.allMdx.nodes} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        slug
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;
