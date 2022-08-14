import styled from "@emotion/styled";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import postApi from "src/api/postApi";
import { Layout } from "src/components/layout/Layout";

const Div = styled.div`
  border: 1px solid red;
`;

interface HomeProps {
  posts: { title: string; category: string; date: string; slug: string }[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <Layout>
      <section>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <Div>
              <h3>{post.title}</h3>
              <h5>{post.category}</h5>
              <p>{post.date}</p>
              {post.slug}
            </Div>
          </Link>
        ))}
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
