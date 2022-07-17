import { NextPageContext } from "next";
import postApi from "../../api/postApi";

const BlogPost = ({
  post,
}: {
  post: { frontMeta: { title: string; date: string }; content: string };
}) => {
  console.log("props", post);

  return (
    <>
      <h1>{post.frontMeta.title}</h1>
      <span>{post.frontMeta.date}</span>
      <p>{post.content}</p>
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
