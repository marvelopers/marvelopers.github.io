import { GetStaticProps, GetServerSideProps } from "next";
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
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string[];
  const post = await postApi.getPostData(slug.join("/"));

  return {
    props: { post },
  };
};

export default BlogPost;
