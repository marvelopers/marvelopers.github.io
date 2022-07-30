import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import postApi from "src/api/postApi";
import styles from "../styles/Home.module.css";

interface HomeProps {
  posts: { title: string; category: string; date: string; slug: string }[];
}

const Home = ({ posts }: HomeProps) => {
  // console.log("posts", posts);
  return (
    <div>
      <Head>
        <title>BLOG</title>
      </Head>
      <main>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <div>
              <h3>{post.title}</h3>
              <h5>{post.category}</h5>
              {post.date}
              {post.slug}
            </div>
          </Link>
        ))}
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await postApi.getAllPosts();

  return {
    props: posts,
  };
};

export default Home;
