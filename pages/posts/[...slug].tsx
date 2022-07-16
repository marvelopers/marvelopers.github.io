import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const slug = (router.query.slug as String[]) || [];

  return <p>Slug: {slug.join("/")}</p>;
};

export default BlogPost;
