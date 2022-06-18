import React from 'react';
import { Layout } from 'src/components/layout/Layout';
import Thumbnail from 'src/components/common/Thumbnail';
import { FrontMeta, Nav } from 'src/model/layout';
import { getAllPosts } from 'src/utils/api';

const DevPost = ({ allPosts }: { allPosts: FrontMeta[] }) => {
  const devPosts = allPosts.filter(({ category }) => category !== Nav.Essay);

  return (
    <Layout>
      <ul>
        {devPosts.map((post) => (
          <Thumbnail post={post} />
        ))}
      </ul>
    </Layout>
  );
};

export default DevPost;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'category', 'tags']);

  return {
    props: { allPosts },
  };
};
