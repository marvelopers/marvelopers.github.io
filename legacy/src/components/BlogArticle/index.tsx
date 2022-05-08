import React, { ReactElement } from 'react';
import {
  BlogPostBySlugQuery,
  MarkdownRemarkFrontmatterFilterInput,
} from 'src/types/graphql-types';
import PostTag from 'src/templates/PostTag';
import PostToc from 'src/templates/PostToc';
import * as S from './styles';

interface Props<T> {
  data: T;
}

const BlogArticle = <T extends BlogPostBySlugQuery>({
  data,
}: Props<T>): ReactElement => {
  if (!data.markdownRemark) return <></>;
  const { frontmatter, html, tableOfContents } = data.markdownRemark;
  const { title, date, tags } =
    frontmatter as MarkdownRemarkFrontmatterFilterInput;

  return (
    <S.Article itemScope itemType="http://schema.org/BlogPosting">
      <S.Content>
        <h1>{title}</h1>
        <S.Date>{date}</S.Date>
        <div
          id="post-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: html as string }}
        />
        <div>{tags && <PostTag tags={tags} />}</div>
      </S.Content>
      <S.Aside>
        {tableOfContents && <PostToc tableOfContents={tableOfContents} />}
      </S.Aside>
    </S.Article>
  );
};

export default BlogArticle;
