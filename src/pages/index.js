import * as React from "react"
// import { GlobalStyle } from "../styles/GlobalStyle"
import { Layout } from "../components/layout"
import PostList from "../components/postList"


// data
// const links = [
//   {
//     text: "Documentation",
//     url: "https://www.gatsbyjs.com/docs/",
//   },
//   {
//     text: "Tutorials",
//     url: "https://www.gatsbyjs.com/tutorial/",
//   },
//   {
//     text: "Guides",
//     url: "https://www.gatsbyjs.com/tutorial/",
//   },
//   {
//     text: "API Reference",
//     url: "https://www.gatsbyjs.com/docs/api-reference/",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//   },
//   {
//     text: "Cheat Sheet",
//     url: "https://www.gatsbyjs.com/docs/cheat-sheet/",
//   },
// ]


// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <title>Home Page</title>
        <div>Hello world!<span role="img" aria-label="Party popper emojis">🎉🎉🎉</span></div>
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
      {/* <BlogLayout>
        내용을 입력합니다. 여기는 블로그 글입니다. 이렇게 나옵니다. 짠짠내용을 입력합니다. 여기는 블로그 글입니다. 이렇게 나옵니다. 짠짠내용을 입력합니다. 여기는 블로그 글입니다. 이렇게 나옵니다. 짠짠내용을 입력합니다. 여기는 블로그 글입니다. 이렇게 나옵니다. 짠짠내용을 입력합니다. 여기는 블로그 글입니다. 이렇게 나옵니다. 짠짠내용을 입력합니다. 여기는 블로그 글입니다. 이렇게 나옵니다. 짠짠내용을 입력합니다. 여기는 블로그 글입니다. 이렇게 나옵니다. 짠짠
      </BlogLayout> */}
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 10, sort: {order: DESC, fields: fields___date}) {
      nodes {
        excerpt(pruneLength: 20, format: PLAIN, truncate: true)
        fields {
          slug
          date(formatString: "YYYY년 MM월 DD일")
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