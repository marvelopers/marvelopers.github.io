import React from 'react';
import { Layout } from 'src/components/layout/Layout';
import Thumbnail from 'src/components/common/Thumbnail';
import { FrontMeta, Nav } from 'src/model/layout';
import { getAllPosts, getPostBySlug } from 'src/utils/api';

const Home = ({ allPosts }: { allPosts: FrontMeta[] }) => {
  console.log('ALL POST', allPosts);
  return (
    <Layout>
      <ul>
        {allPosts.map((post) => (
          <Thumbnail post={post} />
        ))}
      </ul>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getPostBySlug(sulg, [
    'title',
    'date',
    'slug',
    'category',
    'tags',
  ]);

  return {
    props: { allPosts },
  };
};
