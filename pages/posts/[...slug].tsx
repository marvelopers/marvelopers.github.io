import { GetStaticProps, NextPageContext } from "next";
import postApi from "src/api/postApi";

interface BlogPostProps {
  post: { frontMeta: { title: string; date: string }; content: string };
}

const BlogPost = ({ post }: BlogPostProps) => {
  const { frontMeta, content } = post;

  return (
    <>
      <h1>{frontMeta.title}</h1>
      <span>{frontMeta.date}</span>
      {content}
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export const getStaticPaths = async () => {
  const { posts } = await postApi.getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug.split("/") },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string[];
  const post = await postApi.getPostData(slug.join("/"));

  return {
    props: { post },
  };
};

export default BlogPost;
