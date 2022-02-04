import React from 'react';
import PostTag from 'src/templates/PostTag';
import PostToc from 'src/templates/PostToc';
import * as Styles from './styles';

const BlogArticle = ({ title, dateStr, html, tags, tableOfContents }) => {
  return (
    <Styles.Article itemScope itemType="http://schema.org/BlogPosting">
      <Styles.Content>
        <h1>{title}</h1>
        <Styles.Date>{dateStr}</Styles.Date>
        <div
          id="post-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div>{tags.length > 0 && <PostTag tags={tags} />}</div>
      </Styles.Content>
      <Styles.Aside>
        {tableOfContents && <PostToc tableOfContents={tableOfContents} />}
      </Styles.Aside>
    </Styles.Article>
  );
};

export default BlogArticle;
