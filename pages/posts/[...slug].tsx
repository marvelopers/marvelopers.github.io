import { GetStaticProps, GetServerSideProps } from "next";
import postApi from "src/api/postApi";
import BlogArticle from "src/components/blog/BlogArticle";
import { BlogLayout } from "src/components/layout/Layout";
import { BlogPostType } from "src/model/posts";

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => <BlogArticle post={post} />;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string[];
  const post = await postApi.getPostData(slug.join("/"));

  return {
    props: { post },
  };
};

export default BlogPost;
