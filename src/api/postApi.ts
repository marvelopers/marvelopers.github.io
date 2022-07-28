import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "src/utils/markdownToHtml";

const getPostsDirectory = (folderName: string, needType = false) =>
  needType
    ? fs.readdirSync(path.join(process.cwd(), `${folderName}`), {
        withFileTypes: true,
      })
    : fs.readdirSync(path.join(process.cwd(), `${folderName}`));

const postsDirectory = path.join(process.cwd(), "posts");

const getFilesSlugs = () => {
  const dirFiles = getPostsDirectory("posts", true) as fs.Dirent[];

  return dirFiles.map(({ name }) =>
    !name.includes("mdx")
      ? `${name}/${getPostsDirectory(`posts/${name}`)}`
      : name
  );
};

const getPosts = () => {
  const filesSlugs = getFilesSlugs();
  return filesSlugs.map((fileSlug) => {
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileSlug),
      "utf8"
    );

    const [slug, mdx] = fileSlug.split(".");
    return {
      ...matter(fileContents).data,
      slug,
    };
  });
};

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
