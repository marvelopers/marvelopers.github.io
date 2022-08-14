import React from "react";
import { BlogLayout } from "src/components/layout/Layout";
import { BlogPostType } from "src/model/posts";
import * as S from "./styles";

interface BlogArticleProps {
  post: BlogPostType;
}

const BlogArticle = ({ post }: BlogArticleProps) => {
  const { frontMeta, content } = post;
  return (
    <BlogLayout>
      <S.Article>
        <S.Title>{frontMeta.title}</S.Title>
        <S.Date>{frontMeta.date}</S.Date>
        <S.Content dangerouslySetInnerHTML={{ __html: content }} />
      </S.Article>
    </BlogLayout>
  );
};

export default BlogArticle;
