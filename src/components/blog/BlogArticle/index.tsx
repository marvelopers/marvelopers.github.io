import React from 'react';
import { BlogPostLayout } from 'src/components/layout/Layout';
import { BlogPostType } from 'src/model/posts';
import { PostToc } from '../PostToc/PostToc';
import * as S from './styles';

interface BlogArticleProps {
  post: BlogPostType;
}

const BlogArticle = ({ post }: BlogArticleProps) => {
  const { frontMeta, content } = post;

  return (
    <BlogPostLayout aside={<PostToc />}>
      <S.Article>
        <S.Title>{frontMeta.title}</S.Title>
        <S.Date>{frontMeta.date}</S.Date>
        <S.Content id="post-content" dangerouslySetInnerHTML={{ __html: content }} />
      </S.Article>
    </BlogPostLayout>
  );
};

export default BlogArticle;
