import React from "react"
import PostTag from "../../templates/PostTag"
import PostToc from "../../templates/PostToc"
import * as Styles from "./styles"

const BlogArticle = ({ title, dateStr, html, tags, tableOfContents }) => {
  return (
    <Styles.Article
      className="blog-post"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <Styles.Content className="content">
        <h1 className="title">{title}</h1>
        <Styles.Date>{dateStr}</Styles.Date>
        <div
          id="post-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div>
          {tags.length > 0 && <PostTag tags={tags} />}
          {/* <PostShare
        markdownRemark={markdownRemark}
        siteMetadata={data.site.siteMetadata}
      /> */}
        </div>
      </Styles.Content>
      <section className="aside">
        {tableOfContents && <PostToc tableOfContents={tableOfContents} />}
        {/* {series && (
        <SeriesNav
          lite
          series={series}
          nodeId={markdownRemark.id}
          posts={data.allMarkdownRemark.nodes}
        /> */}
      </section>
    </Styles.Article>
  )
}

export default BlogArticle
