import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "src/utils/markdownToHtml";

const POSTS = "posts";

const getPostsDirectory = (folderName: string) =>
  fs.readdirSync(path.join(process.cwd(), `${folderName}`));

const postsDirectory = path.join(process.cwd(), POSTS);

const getPostSlugs = (name: string) =>
  getPostsDirectory(`${POSTS}/${name}`).map((post) => `${name}/${post}`);

const getFilesSlugs = () => {
  const slugs = getPostsDirectory(POSTS).flatMap((name: string) =>
    name.includes("mdx") ? name : getPostSlugs(name)
  );

  return slugs;
};

const getPosts = () =>
  getFilesSlugs().map((fileSlug) => {
    const [slug, mdx] = fileSlug.split(".");
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileSlug),
      "utf8"
    );

    return {
      ...matter(fileContents).data,
      slug,
    };
  });

const postApi = {
  getAllPosts: () => {
    const posts = getPosts();

    return { posts };
  },
  getPostsData: () => {},
  getPostData: async (slug: string) => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontMeta, content } = matter(fileContents);
    const html = await markdownToHtml(content);

    return { frontMeta, content: html };
  },
};

export default postApi;
