import { NextPageContext } from "next";
import postApi from "src/api/postApi";

interface BlogPostProps {
  post: { frontMeta: { title: string; date: string }; content: string };
}

const BlogPost = ({ post }: BlogPostProps) => {
  const { frontMeta, content } = post;
  console.log("props", post);

  return (
    <>
      <h1>{frontMeta.title}</h1>
      <span>{frontMeta.date}</span>
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

BlogPost.getInitialProps = async (context: NextPageContext) => {
  const slug = context.query.slug as string[];
  const post = await postApi.getPostData(slug.join("/"));

  return {
    post,
  };
};

export default BlogPost;
