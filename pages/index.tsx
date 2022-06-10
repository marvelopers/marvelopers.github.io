import React from 'react';
import { Layout } from 'src/components/layout/Layout';
import Thumbnail from 'src/components/common/Thumbnail';
import { Nav } from 'src/model/layout';

const Home = () => (
  <Layout>
    <Thumbnail title="rx" category={Nav.Front} />
    <Thumbnail title={Nav.Essay} category={Nav.Essay} />
    <Thumbnail title={Nav.Front} category={Nav.Front} />
  </Layout>
);

export default Home;
