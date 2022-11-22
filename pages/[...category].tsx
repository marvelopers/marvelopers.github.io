import { GetServerSideProps } from 'next';
import postApi from 'src/api/postApi';
import { Layout } from 'src/components/layout/Layout';
import Posts from 'src/components/main/Posts';
import { Post } from 'src/model/posts';

interface FrontProps {
  posts: Post[];
}

const Front = ({ posts }: FrontProps) => {
  return (
    <Layout>
      <section>
        <Posts posts={posts} />
      </section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [category] = context.params?.category as string[];
  const posts = postApi.getPostsData(category);

  return {
    props: posts,
  };
};

export default Front;
