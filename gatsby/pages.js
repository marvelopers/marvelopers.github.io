const path = require(`path`)
const qs = require("querystring")

exports.crateBlogPost = async ({ graphql, actions }) => {

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: fields___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
              date
            }
            frontmatter {
              title
              category
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges.map(e => e.node)

  posts.forEach((post, index) => {
    actions.createPage({
      path: qs.unescape(post.fields.slug),
      component: path.resolve(`./src/templates/blog-post.jsx`),
      context: {
        slug: post.fields.slug,
        date: post.fields.date,
        // seriesId: p.frontmatter.seriesId,
        // videoId: p.frontmatter.videoId,
        previous: index === posts.length - 1 ? null : posts[index + 1],
        next: index === 0 ? null : posts[index - 1],
      },
    })
  })
}