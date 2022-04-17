import React, { ReactElement } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// import PostTag from 'src/templates/PostTag';
// import PostToc from 'src/templates/PostToc';
import * as S from './styles';
import { Mdx, Site } from '../../templates/blog-post';

type DataProps = {
  data: {
    site: Site;
    mdx: Mdx;
  };
};

const BlogArticle = ({ data }: DataProps) => {
  console.log('DATA', data);
  const { frontmatter, body, tableOfContents } = data.mdx;
  const { title, date } = frontmatter;

  return (
    <S.Article itemScope itemType="http://schema.org/BlogPosting">
      <div>
        {/* <S.Content> */}
        <h1>{title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
        {/* <S.Date>{date}</S.Date> */}
        {/* <div id="post-content" itemProp="articleBody"> */}
        {/* </div> */}
        {/* <div>{tags && <PostTag tags={tags} />}</div> */}
        {/* </S.Content> */}
      </div>
      {/* <S.Aside> */}
      {/* {tableOfContents && <PostToc tableOfContents={tableOfContents} />} */}
      {/* </S.Aside> */}
    </S.Article>
  );
};

export default BlogArticle;
