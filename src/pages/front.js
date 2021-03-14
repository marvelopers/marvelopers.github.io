import React from 'react'
import { Layout } from "../components/layout"
import PostList from "../components/postList"
import SEO from "../components/seo"

const FrontPage = ({data}) => {
  return (
    <>
      <Layout>
      <SEO title="Front-end" />
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

export default FrontPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 10, sort: {order: DESC, fields: fields___date}) {
      nodes {
        excerpt(pruneLength: 20, format: PLAIN, truncate: true)
        fields {
          slug
          date(formatString: "YYYY.MM.DD")
        }
        frontmatter {
          title
          category : "front"
          tags
        }
      }
    }
  }
`
