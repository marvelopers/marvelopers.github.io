import React from "react";
import Link from "next/link";
import { Post } from "src/model/posts";
import Thumbnail from "../Thumbnail";
import * as S from "./styles";

interface PostsProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => (
  <S.Posts>
    {posts.map((post) => (
      <Link href={`/posts/${post.slug}`} key={post.slug}>
        <a>
          <Thumbnail post={post} />
        </a>
      </Link>
    ))}
  </S.Posts>
);

export default Posts;
