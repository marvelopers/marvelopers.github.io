import { GetStaticProps } from "next";
import postApi from "src/api/postApi";
import { Layout } from "src/components/layout/Layout";
import Posts from "src/components/main/Posts";
import { Post } from "src/model/posts";

interface HomeProps {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <Layout>
      <section>
        <Posts posts={posts} />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await postApi.getAllPosts();

  return {
    props: posts,
  };
};

export default Home;
