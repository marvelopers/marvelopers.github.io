import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPostsDirectory = (folderName: string, needType = false) =>
  needType
    ? fs.readdirSync(path.join(process.cwd(), `${folderName}`), {
        withFileTypes: true,
      })
    : fs.readdirSync(path.join(process.cwd(), `${folderName}`));

const postsDirectory = path.join(process.cwd(), "posts");

const getSlugs = () => {
  const dirFiles = getPostsDirectory("posts", true) as fs.Dirent[];

  return dirFiles.map(({ name }) =>
    !name.includes("mdx")
      ? `${name}/${getPostsDirectory(`posts/${name}`)}`
      : name
  );
};

const postApi = {
  getAllPosts: () => {
    const slugs = getSlugs();
    console.log("check", slugs); //[  'forms.mdx', 'test' ]

    return { slugs };
  },
  getPostsData: () => {},
  getPostData: (slug: string) => {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontMeta, content } = matter(fileContents);
    // console.log("meta", frontMeta);
    // console.log("content", content);
    // console.log(
    //   "dirFiles",
    //   fs.readdirSync(path.join(process.cwd(), "posts")).reverse()
    // ); //[ 'test', 'forms.mdx' ]

    return { frontMeta, content };
  },
};

export default postApi;
