import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const get = () => {};

const postApi = {
  getAllPosts: () => {
    const dirFiles = fs.readdirSync(postsDirectory, {
      withFileTypes: true,
    });
    console.log("dirFiles", dirFiles); //[  'forms.mdx', 'test' ]
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
