import React, { useEffect, useState } from 'react';
import { Layout } from 'src/components/layout/Layout';
import { BlogPostType } from 'src/model/posts';
import PostToc from '../PostToc/PostToc';
import * as S from './styles';

interface BlogArticleProps {
  post: BlogPostType;
}

const BlogArticle = ({ post }: BlogArticleProps) => {
  const { frontMeta, content } = post;
  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    const post = document.querySelector('#post-content');
    const heading = post && Array.from(post.querySelectorAll('h1,h2,h3,h4,h5,h6')).map((h) => h.innerHTML);
    heading && setHeadings(heading);
  }, [post]);

  return (
    <Layout>
      <S.Article>
        <S.Title>{frontMeta.title}</S.Title>
        <S.Date>{frontMeta.date}</S.Date>
        <S.Content id="post-content" dangerouslySetInnerHTML={{ __html: content }} />
      </S.Article>
      {headings.map((h) => (
        <span>{h}</span>
      ))}
    </Layout>
  );
};

export default BlogArticle;
