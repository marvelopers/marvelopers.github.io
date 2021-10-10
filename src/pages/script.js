import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import PostList from "../components/postList"
import SEO from "../components/SEO"

const ScriptPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="JavaScript" />
        <PostList
          posts={data.allMarkdownRemark.nodes.map(node => ({
            slug: node.fields.slug,
            title: node.frontmatter.title,
            category: node.frontmatter.category,
            tags: node.frontmatter.tags,
            meta: node.fields.date,
            // meta: (
            //   <time dateTime={node.fields.date}>{node.fields.dateStr}</time>
            // ),
            excerpt: node.excerpt,
          }))}
        />
      </Layout>
    </>
  )
}

export default ScriptPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: fields___date }
      filter: { frontmatter: { category: { eq: "script" } } }
    ) {
      nodes {
        excerpt(pruneLength: 20, format: PLAIN, truncate: true)
        fields {
          slug
          date(formatString: "YYYY.MM.DD")
        }
        frontmatter {
          title
          category
          tags
        }
      }
    }
  }
`
